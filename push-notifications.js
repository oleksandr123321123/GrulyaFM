// Web Push Notifications для iOS 16.4+ и Android
// Требует HTTPS и установленное PWA приложение

// VAPID ключи (сгенерируйте свои: https://vapidkeys.com/)
// Это публичный ключ, приватный должен быть на сервере
const VAPID_PUBLIC_KEY = 'YOUR_VAPID_PUBLIC_KEY_HERE';

let pushSubscription = null;

// Проверка поддержки Push API
export function isPushSupported() {
  return 'serviceWorker' in navigator && 'PushManager' in window;
}

// Проверка, подписан ли пользователь
export async function isPushSubscribed() {
  if (!isPushSupported()) return false;

  try {
    const registration = await navigator.serviceWorker.ready;
    pushSubscription = await registration.pushManager.getSubscription();
    return pushSubscription !== null;
  } catch (error) {
    console.error('Error checking push subscription:', error);
    return false;
  }
}

// Подписка на push уведомления
export async function subscribeToPush() {
  if (!isPushSupported()) {
    throw new Error('Push notifications are not supported');
  }

  try {
    // Запросить разрешение
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
      throw new Error('Notification permission denied');
    }

    // Получить service worker
    const registration = await navigator.serviceWorker.ready;

    // Подписаться на push
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true, // iOS требует это
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
    });

    pushSubscription = subscription;

    // Отправить subscription на сервер
    await sendSubscriptionToServer(subscription);

    console.log('✅ Push subscription created:', subscription);
    return subscription;
  } catch (error) {
    console.error('Error subscribing to push:', error);
    throw error;
  }
}

// Отписка от push
export async function unsubscribeFromPush() {
  if (!pushSubscription) {
    const registration = await navigator.serviceWorker.ready;
    pushSubscription = await registration.pushManager.getSubscription();
  }

  if (pushSubscription) {
    try {
      await pushSubscription.unsubscribe();
      await removeSubscriptionFromServer(pushSubscription);
      pushSubscription = null;
      console.log('✅ Push unsubscribed');
      return true;
    } catch (error) {
      console.error('Error unsubscribing:', error);
      throw error;
    }
  }

  return false;
}

// Отправить subscription на сервер
async function sendSubscriptionToServer(subscription) {
  try {
    const response = await fetch('/api/push-subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subscription: subscription.toJSON(),
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send subscription to server');
    }

    console.log('✅ Subscription sent to server');
  } catch (error) {
    console.error('Error sending subscription to server:', error);
    // Не бросаем ошибку, продолжаем даже если сервер недоступен
  }
}

// Удалить subscription с сервера
async function removeSubscriptionFromServer(subscription) {
  try {
    await fetch('/api/push-unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        endpoint: subscription.endpoint
      })
    });

    console.log('✅ Subscription removed from server');
  } catch (error) {
    console.error('Error removing subscription:', error);
  }
}

// Конвертация VAPID ключа из Base64
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Проверка специфичных возможностей iOS
export function isIOSPWA() {
  return window.navigator.standalone === true ||
         window.matchMedia('(display-mode: standalone)').matches;
}

// iOS Push доступен только в standalone режиме
export function canUseIOSPush() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  return isIOS && isIOSPWA() && isPushSupported();
}

// Получить информацию о поддержке
export function getPushInfo() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const iOSVersion = isIOS ? parseFloat(
    ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
    .replace('undefined', '3_2').replace('_', '.').replace('_', '')
  ) || 0 : 0;

  return {
    isSupported: isPushSupported(),
    isIOS: isIOS,
    iOSVersion: iOSVersion,
    iOSPushSupported: iOSVersion >= 16.4, // iOS 16.4+ поддерживает Web Push
    isStandalone: isIOSPWA(),
    canUsePush: isIOS ? canUseIOSPush() : isPushSupported(),
    notificationPermission: 'Notification' in window ? Notification.permission : 'unavailable'
  };
}

// Тестовое уведомление
export async function sendTestNotification() {
  if (!('Notification' in window)) {
    console.log('Notifications not supported');
    return;
  }

  if (Notification.permission !== 'granted') {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.log('Notification permission denied');
      return;
    }
  }

  // Локальное уведомление (не через push)
  const notification = new Notification('GrulyaFM Test', {
    body: 'Push notifications are working!',
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    tag: 'test-notification',
    requireInteraction: false,
    vibrate: [200, 100, 200]
  });

  notification.onclick = () => {
    window.focus();
    notification.close();
  };

  setTimeout(() => notification.close(), 5000);
}

// Инициализация при загрузке
export function initPushNotifications() {
  if (!isPushSupported()) {
    console.log('❌ Push notifications not supported');
    return;
  }

  const info = getPushInfo();
  console.log('📱 Push Info:', info);

  if (info.isIOS && !info.iOSPushSupported) {
    console.log('⚠️ iOS version too old for Web Push (need 16.4+)');
  }

  if (info.isIOS && !info.isStandalone) {
    console.log('⚠️ iOS Web Push requires app to be installed to Home Screen');
  }

  // Проверить существующую подписку
  isPushSubscribed().then(subscribed => {
    if (subscribed) {
      console.log('✅ Already subscribed to push notifications');
    } else {
      console.log('📭 Not subscribed to push notifications');
    }
  });
}
