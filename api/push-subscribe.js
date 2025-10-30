// Vercel Serverless Function для сохранения push subscriptions
// Требует установки: npm install web-push

import webpush from 'web-push';

// VAPID ключи (генерируются с помощью web-push generate-vapid-keys)
// ВАЖНО: Храните приватный ключ в переменных окружения Vercel
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || 'YOUR_PRIVATE_KEY';
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:support@grulya-fm.vercel.app';

// Настройка VAPID
webpush.setVapidDetails(
  VAPID_SUBJECT,
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

// In-memory хранилище (для продакшена используйте БД)
// Для Vercel можно использовать Vercel KV, Supabase, или другую БД
let subscriptions = [];

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { subscription, userAgent, timestamp } = req.body;

    if (!subscription || !subscription.endpoint) {
      return res.status(400).json({ error: 'Invalid subscription' });
    }

    // Проверка, не существует ли уже такая подписка
    const exists = subscriptions.some(
      sub => sub.subscription.endpoint === subscription.endpoint
    );

    if (!exists) {
      subscriptions.push({
        subscription,
        userAgent,
        timestamp,
        createdAt: Date.now()
      });

      console.log(`✅ New push subscription added. Total: ${subscriptions.length}`);
    } else {
      console.log(`✅ Push subscription already exists`);
    }

    // TODO: Сохранить в базу данных
    // await saveToDB(subscription);

    return res.status(200).json({
      success: true,
      message: 'Subscription saved',
      totalSubscriptions: subscriptions.length
    });
  } catch (error) {
    console.error('Error saving subscription:', error);
    return res.status(500).json({
      error: 'Failed to save subscription',
      message: error.message
    });
  }
}

// Вспомогательная функция для отправки push уведомлений
// Вызывается из другого endpoint (например, /api/send-push)
export async function sendPushToSubscription(subscription, payload) {
  try {
    await webpush.sendNotification(subscription, JSON.stringify(payload));
    console.log('✅ Push notification sent');
    return true;
  } catch (error) {
    console.error('❌ Error sending push:', error);

    // Если подписка невалидна (410 Gone), удалить её
    if (error.statusCode === 410) {
      console.log('🗑️ Subscription expired, should be removed');
      // TODO: Удалить из БД
    }

    return false;
  }
}

// Экспорт подписок для других функций
export function getSubscriptions() {
  return subscriptions;
}
