// GrulyaFM - Global Radio Application
// Full multilingual support, no flags edition

// Translations
const CONTACT_EMAIL = 'yourmail@example.com';
const TRANSLATIONS = {
  en: {
    subtitle: 'Global Radio • 200+ Stations',
    bannerTitle: '🌍 Global Radio',
    bannerText: '200+ stations from 22 countries',
    selectStation: 'Select a station',
    clickStation: 'Click on a station below',
    searchPlaceholder: 'Search stations...',
    randomStation: 'Random Station',
    settings: 'Settings',
    language: 'Language',
    theme: 'Theme',
    darkMode: '🌙 Dark Mode',
    lightMode: '☀️ Light Mode',
    visibleCountries: 'Visible Countries',
    addStation: 'Add Station',
    stationName: 'Station Name',
    streamURL: 'Stream URL',
    save: 'Save',
    sleepTimer: 'Sleep Timer',
    min: 'min',
    hour: 'hour',
    hours: 'hours',
    cancel: 'Cancel',
    cancelTimer: 'Cancel Timer',
    radioAlarm: 'Radio Alarm',
    time: 'Time',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    station: 'Station',
    setAlarm: 'Set Alarm',
    cancelAlarm: 'Cancel Alarm',
    connecting: 'Connecting...',
    live: 'Live',
    addedToFav: 'Added to favorites',
    removedFromFav: 'Removed from favorites',
    stationAdded: 'Station added!',
    fillAllFields: 'Fill in all fields',
    invalidURL: 'Invalid URL',
    timerSet: 'Timer set for',
    goodNight: 'Good night!',
    alarmSet: 'Alarm set for',
    alarmCancelled: 'Alarm cancelled',
    timerCancelled: 'Timer cancelled',
    goodMorning: 'Good morning! Alarm started',
    all: '🌐 All',
    favorites: '❤️ Favorites',
    alarm: 'Alarm',
    remaining: 'Remaining',
    aboutTitle: 'About GrulyaFM',
    aboutLead: 'GrulyaFM — global internet radio. Design and development: Grulya.',
    contactTitle: 'Contact',
    privacyTitle: 'Privacy',
    privacyShort: 'GrulyaFM does not collect or transmit your personal data. Settings and favorite stations are stored only in your browser or in your Supabase account.',
    privacyLink: 'More about privacy policy'
  },
  ru: {
    subtitle: 'Глобальное радио • 200+ станций',
    bannerTitle: '🌍 Глобальное радио',
    bannerText: '200+ станций из 22 стран мира',
    selectStation: 'Выберите станцию',
    clickStation: 'Нажмите на станцию ниже',
    searchPlaceholder: 'Поиск станций...',
    randomStation: 'Случайная станция',
    settings: 'Настройки',
    language: 'Язык',
    theme: 'Тема',
    darkMode: '🌙 Тёмная тема',
    lightMode: '☀️ Светлая тема',
    visibleCountries: 'Отображаемые страны',
    addStation: 'Добавить станцию',
    stationName: 'Название станции',
    streamURL: 'URL потока',
    save: 'Сохранить',
    sleepTimer: 'Таймер сна',
    min: 'мин',
    hour: 'час',
    hours: 'часа',
    cancel: 'Отмена',
    cancelTimer: 'Отменить таймер',
    radioAlarm: 'Будильник',
    time: 'Время',
    weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    station: 'Станция',
    setAlarm: 'Установить будильник',
    cancelAlarm: 'Отменить будильник',
    connecting: 'Подключение...',
    live: 'Прямой эфир',
    addedToFav: 'Добавлено в избранное',
    removedFromFav: 'Удалено из избранного',
    stationAdded: 'Станция добавлена!',
    fillAllFields: 'Заполните все поля',
    invalidURL: 'Неверный URL',
    timerSet: 'Таймер установлен на',
    goodNight: 'Спокойной ночи!',
    alarmSet: 'Будильник установлен на',
    alarmCancelled: 'Будильник отменён',
    timerCancelled: 'Таймер отменён',
    goodMorning: 'Доброе утро! Будильник запущен',
    all: '🌐 Все',
    favorites: '❤️ Избранное',
    alarm: 'Будильник',
    remaining: 'Осталось',
    aboutTitle: 'О приложении GrulyaFM',
    aboutLead: 'GrulyaFM — глобальное интернет-радио. Дизайн и разработка: Grulya.',
    contactTitle: 'Контакты',
    privacyTitle: 'Конфиденциальность',
    privacyShort: 'GrulyaFM не собирает и не передаёт ваши личные данные. Настройки и избранные станции хранятся только в вашем браузере или в вашем аккаунте Supabase.',
    privacyLink: 'Подробнее о политике конфиденциальности'
  },
  de: {
    subtitle: 'Globales Radio • 200+ Sender',
    bannerTitle: '🌍 Globales Radio',
    bannerText: '200+ Sender aus 22 Ländern',
    selectStation: 'Wählen Sie einen Sender',
    clickStation: 'Klicken Sie unten auf einen Sender',
    searchPlaceholder: 'Sender suchen...',
    randomStation: 'Zufälliger Sender',
    settings: 'Einstellungen',
    language: 'Sprache',
    theme: 'Design',
    darkMode: '🌙 Dunkler Modus',
    lightMode: '☀️ Heller Modus',
    visibleCountries: 'Sichtbare Länder',
    addStation: 'Sender hinzufügen',
    stationName: 'Sendername',
    streamURL: 'Stream-URL',
    save: 'Speichern',
    sleepTimer: 'Schlaf-Timer',
    min: 'Min',
    hour: 'Std',
    hours: 'Std',
    cancel: 'Abbrechen',
    cancelTimer: 'Timer abbrechen',
    radioAlarm: 'Radio-Wecker',
    time: 'Zeit',
    weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    station: 'Sender',
    setAlarm: 'Wecker stellen',
    cancelAlarm: 'Wecker abbrechen',
    connecting: 'Verbinden...',
    live: 'Live',
    addedToFav: 'Zu Favoriten hinzugefügt',
    removedFromFav: 'Aus Favoriten entfernt',
    stationAdded: 'Sender hinzugefügt!',
    fillAllFields: 'Alle Felder ausfüllen',
    invalidURL: 'Ungültige URL',
    timerSet: 'Timer eingestellt auf',
    goodNight: 'Gute Nacht!',
    alarmSet: 'Wecker gestellt auf',
    alarmCancelled: 'Wecker abgebrochen',
    timerCancelled: 'Timer abgebrochen',
    goodMorning: 'Guten Morgen! Wecker gestartet',
    all: '🌐 Alle',
    favorites: '❤️ Favoriten',
    alarm: 'Wecker',
    remaining: 'Verbleibend',
    aboutTitle: 'Über GrulyaFM',
    aboutLead: 'GrulyaFM — globales Internetradio. Design und Entwicklung: Grulya.',
    contactTitle: 'Kontakt',
    privacyTitle: 'Datenschutz',
    privacyShort: 'GrulyaFM sammelt und überträgt Ihre persönlichen Daten nicht. Einstellungen und Lieblingssender werden nur in Ihrem Browser oder in Ihrem Supabase-Konto gespeichert.',
    privacyLink: 'Mehr über Datenschutz'
  },
  fr: {
    subtitle: 'Radio Mondiale • 200+ Stations',
    bannerTitle: '🌍 Radio Mondiale',
    bannerText: '200+ stations de 22 pays',
    selectStation: 'Sélectionner une station',
    clickStation: 'Cliquez sur une station ci-dessous',
    searchPlaceholder: 'Rechercher des stations...',
    randomStation: 'Station aléatoire',
    settings: 'Paramètres',
    language: 'Langue',
    theme: 'Thème',
    darkMode: '🌙 Mode sombre',
    lightMode: '☀️ Mode clair',
    visibleCountries: 'Pays visibles',
    addStation: 'Ajouter une station',
    stationName: 'Nom de la station',
    streamURL: 'URL du flux',
    save: 'Enregistrer',
    sleepTimer: 'Minuterie de sommeil',
    min: 'min',
    hour: 'h',
    hours: 'h',
    cancel: 'Annuler',
    cancelTimer: 'Annuler la minuterie',
    radioAlarm: 'Réveil radio',
    time: 'Heure',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    station: 'Station',
    setAlarm: 'Définir l\'alarme',
    cancelAlarm: 'Annuler l\'alarme',
    connecting: 'Connexion...',
    live: 'En direct',
    addedToFav: 'Ajouté aux favoris',
    removedFromFav: 'Retiré des favoris',
    stationAdded: 'Station ajoutée!',
    fillAllFields: 'Remplir tous les champs',
    invalidURL: 'URL invalide',
    timerSet: 'Minuterie définie pour',
    goodNight: 'Bonne nuit!',
    alarmSet: 'Alarme définie pour',
    alarmCancelled: 'Alarme annulée',
    timerCancelled: 'Minuterie annulée',
    goodMorning: 'Bonjour! Alarme démarrée',
    all: '🌐 Tout',
    favorites: '❤️ Favoris',
    alarm: 'Alarme',
    remaining: 'Restant',
    aboutTitle: 'À propos de GrulyaFM',
    aboutLead: 'GrulyaFM — radio Internet mondiale. Design et développement: Grulya.',
    contactTitle: 'Contact',
    privacyTitle: 'Confidentialité',
    privacyShort: 'GrulyaFM ne collecte ni ne transmet vos données personnelles. Les paramètres et les stations favorites sont stockés uniquement dans votre navigateur ou dans votre compte Supabase.',
    privacyLink: 'En savoir plus sur la politique de confidentialité'
  },
  es: {
    subtitle: 'Radio Global • 200+ Estaciones',
    bannerTitle: '🌍 Radio Global',
    bannerText: '200+ estaciones de 22 países',
    selectStation: 'Seleccionar una estación',
    clickStation: 'Haga clic en una estación a continuación',
    searchPlaceholder: 'Buscar estaciones...',
    randomStation: 'Estación aleatoria',
    settings: 'Configuración',
    language: 'Idioma',
    theme: 'Tema',
    darkMode: '🌙 Modo oscuro',
    lightMode: '☀️ Modo claro',
    visibleCountries: 'Países visibles',
    addStation: 'Añadir estación',
    stationName: 'Nombre de la estación',
    streamURL: 'URL de transmisión',
    save: 'Guardar',
    sleepTimer: 'Temporizador de sueño',
    min: 'min',
    hour: 'h',
    hours: 'h',
    cancel: 'Cancelar',
    cancelTimer: 'Cancelar temporizador',
    radioAlarm: 'Alarma de radio',
    time: 'Hora',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    station: 'Estación',
    setAlarm: 'Establecer alarma',
    cancelAlarm: 'Cancelar alarma',
    connecting: 'Conectando...',
    live: 'En vivo',
    addedToFav: 'Añadido a favoritos',
    removedFromFav: 'Eliminado de favoritos',
    stationAdded: 'Estación añadida!',
    fillAllFields: 'Llenar todos los campos',
    invalidURL: 'URL inválida',
    timerSet: 'Temporizador establecido para',
    goodNight: 'Buenas noches!',
    alarmSet: 'Alarma establecida para',
    alarmCancelled: 'Alarma cancelada',
    timerCancelled: 'Temporizador cancelado',
    goodMorning: 'Buenos días! Alarma iniciada',
    all: '🌐 Todo',
    favorites: '❤️ Favoritos',
    alarm: 'Alarma',
    remaining: 'Restante',
    aboutTitle: 'Acerca de GrulyaFM',
    aboutLead: 'GrulyaFM — radio por Internet global. Diseño y desarrollo: Grulya.',
    contactTitle: 'Contacto',
    privacyTitle: 'Privacidad',
    privacyShort: 'GrulyaFM no recopila ni transmite sus datos personales. La configuración y las estaciones favoritas se almacenan solo en su navegador o en su cuenta de Supabase.',
    privacyLink: 'Más sobre la política de privacidad'
  },
  pt: {
    subtitle: 'Rádio Global • 200+ Estações',
    bannerTitle: '🌍 Rádio Global',
    bannerText: '200+ estações de 22 países',
    selectStation: 'Selecionar uma estação',
    clickStation: 'Clique em uma estação abaixo',
    searchPlaceholder: 'Pesquisar estações...',
    randomStation: 'Estação aleatória',
    settings: 'Configurações',
    language: 'Idioma',
    theme: 'Tema',
    darkMode: '🌙 Modo escuro',
    lightMode: '☀️ Modo claro',
    visibleCountries: 'Países visíveis',
    addStation: 'Adicionar estação',
    stationName: 'Nome da estação',
    streamURL: 'URL do stream',
    save: 'Salvar',
    sleepTimer: 'Temporizador de sono',
    min: 'min',
    hour: 'h',
    hours: 'h',
    cancel: 'Cancelar',
    cancelTimer: 'Cancelar temporizador',
    radioAlarm: 'Alarme de rádio',
    time: 'Hora',
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    station: 'Estação',
    setAlarm: 'Definir alarme',
    cancelAlarm: 'Cancelar alarme',
    connecting: 'Conectando...',
    live: 'Ao vivo',
    addedToFav: 'Adicionado aos favoritos',
    removedFromFav: 'Removido dos favoritos',
    stationAdded: 'Estação adicionada!',
    fillAllFields: 'Preencher todos os campos',
    invalidURL: 'URL inválida',
    timerSet: 'Temporizador definido para',
    goodNight: 'Boa noite!',
    alarmSet: 'Alarme definido para',
    alarmCancelled: 'Alarme cancelado',
    timerCancelled: 'Temporizador cancelado',
    goodMorning: 'Bom dia! Alarme iniciado',
    all: '🌐 Todos',
    favorites: '❤️ Favoritos',
    alarm: 'Alarme',
    remaining: 'Restante',
    aboutTitle: 'Sobre GrulyaFM',
    aboutLead: 'GrulyaFM — rádio pela Internet global. Design e desenvolvimento: Grulya.',
    contactTitle: 'Contato',
    privacyTitle: 'Privacidade',
    privacyShort: 'GrulyaFM não coleta nem transmite seus dados pessoais. As configurações e estações favoritas são armazenadas apenas no seu navegador ou na sua conta Supabase.',
    privacyLink: 'Mais sobre a política de privacidade'
  },
  it: {
    subtitle: 'Radio Globale • 200+ Stazioni',
    bannerTitle: '🌍 Radio Globale',
    bannerText: '200+ stazioni da 22 paesi',
    selectStation: 'Seleziona una stazione',
    clickStation: 'Clicca su una stazione qui sotto',
    searchPlaceholder: 'Cerca stazioni...',
    randomStation: 'Stazione casuale',
    settings: 'Impostazioni',
    language: 'Lingua',
    theme: 'Tema',
    darkMode: '🌙 Modalità scura',
    lightMode: '☀️ Modalità chiara',
    visibleCountries: 'Paesi visibili',
    addStation: 'Aggiungi stazione',
    stationName: 'Nome della stazione',
    streamURL: 'URL dello stream',
    save: 'Salva',
    sleepTimer: 'Timer di sonno',
    min: 'min',
    hour: 'ora',
    hours: 'ore',
    cancel: 'Annulla',
    cancelTimer: 'Annulla timer',
    radioAlarm: 'Sveglia radio',
    time: 'Ora',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    station: 'Stazione',
    setAlarm: 'Imposta sveglia',
    cancelAlarm: 'Annulla sveglia',
    connecting: 'Connessione...',
    live: 'In diretta',
    addedToFav: 'Aggiunto ai preferiti',
    removedFromFav: 'Rimosso dai preferiti',
    stationAdded: 'Stazione aggiunta!',
    fillAllFields: 'Compila tutti i campi',
    invalidURL: 'URL non valido',
    timerSet: 'Timer impostato per',
    goodNight: 'Buona notte!',
    alarmSet: 'Sveglia impostata per',
    alarmCancelled: 'Sveglia annullata',
    timerCancelled: 'Timer annullato',
    goodMorning: 'Buongiorno! Sveglia avviata',
    all: '🌐 Tutto',
    favorites: '❤️ Preferiti',
    alarm: 'Sveglia',
    remaining: 'Rimanente',
    aboutTitle: 'Informazioni su GrulyaFM',
    aboutLead: 'GrulyaFM — radio Internet globale. Design e sviluppo: Grulya.',
    contactTitle: 'Contatto',
    privacyTitle: 'Privacy',
    privacyShort: 'GrulyaFM non raccoglie né trasmette i tuoi dati personali. Le impostazioni e le stazioni preferite vengono archiviate solo nel tuo browser o nel tuo account Supabase.',
    privacyLink: 'Maggiori informazioni sulla politica sulla privacy'
  },
  uk: {
    subtitle: 'Глобальне радіо • 200+ станцій',
    bannerTitle: '🌍 Глобальне радіо',
    bannerText: '200+ станцій з 22 країн світу',
    selectStation: 'Виберіть станцію',
    clickStation: 'Натисніть на станцію нижче',
    searchPlaceholder: 'Пошук станцій...',
    randomStation: 'Випадкова станція',
    settings: 'Налаштування',
    language: 'Мова',
    theme: 'Тема',
    darkMode: '🌙 Темна тема',
    lightMode: '☀️ Світла тема',
    visibleCountries: 'Видимі країни',
    addStation: 'Додати станцію',
    stationName: 'Назва станції',
    streamURL: 'URL потоку',
    save: 'Зберегти',
    sleepTimer: 'Таймер сну',
    min: 'хв',
    hour: 'год',
    hours: 'год',
    cancel: 'Скасувати',
    cancelTimer: 'Скасувати таймер',
    radioAlarm: 'Будильник',
    time: 'Час',
    weekdays: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    station: 'Станція',
    setAlarm: 'Встановити будильник',
    cancelAlarm: 'Скасувати будильник',
    connecting: 'Підключення...',
    live: 'Прямий ефір',
    addedToFav: 'Додано до обраного',
    removedFromFav: 'Видалено з обраного',
    stationAdded: 'Станцію додано!',
    fillAllFields: 'Заповніть усі поля',
    invalidURL: 'Невірний URL',
    timerSet: 'Таймер встановлено на',
    goodNight: 'На добраніч!',
    alarmSet: 'Будильник встановлено на',
    alarmCancelled: 'Будильник скасовано',
    timerCancelled: 'Таймер скасовано',
    goodMorning: 'Доброго ранку! Будильник запущено',
    all: '🌐 Усі',
    favorites: '❤️ Обране',
    alarm: 'Будильник',
    remaining: 'Залишилось',
    aboutTitle: 'Про GrulyaFM',
    aboutLead: 'GrulyaFM — глобальне інтернет-радіо. Дизайн і розробка: Grulya.',
    contactTitle: 'Контакти',
    privacyTitle: 'Конфіденційність',
    privacyShort: 'GrulyaFM не збирає і не передає ваші особисті дані. Налаштування та улюблені станції зберігаються лише у вашому браузері або у вашому обліковому записі Supabase.',
    privacyLink: 'Детальніше про політику конфіденційності'
  },
  zh: {
    subtitle: '全球电台 • 200+ 电台',
    bannerTitle: '🌍 全球电台',
    bannerText: '来自22个国家的200多个电台',
    selectStation: '选择电台',
    clickStation: '点击下面的电台',
    searchPlaceholder: '搜索电台...',
    randomStation: '随机电台',
    settings: '设置',
    language: '语言',
    theme: '主题',
    darkMode: '🌙 深色模式',
    lightMode: '☀️ 浅色模式',
    visibleCountries: '可见国家',
    addStation: '添加电台',
    stationName: '电台名称',
    streamURL: '流URL',
    save: '保存',
    sleepTimer: '睡眠定时器',
    min: '分钟',
    hour: '小时',
    hours: '小时',
    cancel: '取消',
    cancelTimer: '取消定时器',
    radioAlarm: '电台闹钟',
    time: '时间',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    station: '电台',
    setAlarm: '设置闹钟',
    cancelAlarm: '取消闹钟',
    connecting: '连接中...',
    live: '直播',
    addedToFav: '已添加到收藏',
    removedFromFav: '已从收藏中移除',
    stationAdded: '电台已添加！',
    fillAllFields: '填写所有字段',
    invalidURL: '无效的URL',
    timerSet: '定时器设置为',
    goodNight: '晚安！',
    alarmSet: '闹钟设置为',
    alarmCancelled: '闹钟已取消',
    timerCancelled: '定时器已取消',
    goodMorning: '早上好！闹钟已启动',
    all: '🌐 全部',
    favorites: '❤️ 收藏',
    alarm: '闹钟',
    remaining: '剩余',
    aboutTitle: '关于 GrulyaFM',
    aboutLead: 'GrulyaFM — 全球互联网电台。设计和开发：Grulya。',
    contactTitle: '联系',
    privacyTitle: '隐私',
    privacyShort: 'GrulyaFM 不收集或传输您的个人数据。设置和收藏的电台仅存储在您的浏览器或 Supabase 帐户中。',
    privacyLink: '有关隐私政策的更多信息'
  },
  ja: {
    subtitle: 'グローバルラジオ • 200以上の局',
    bannerTitle: '🌍 グローバルラジオ',
    bannerText: '22カ国から200以上の局',
    selectStation: 'ステーションを選択',
    clickStation: '下のステーションをクリック',
    searchPlaceholder: 'ステーションを検索...',
    randomStation: 'ランダムステーション',
    settings: '設定',
    language: '言語',
    theme: 'テーマ',
    darkMode: '🌙 ダークモード',
    lightMode: '☀️ ライトモード',
    visibleCountries: '表示国',
    addStation: 'ステーションを追加',
    stationName: 'ステーション名',
    streamURL: 'ストリームURL',
    save: '保存',
    sleepTimer: 'スリープタイマー',
    min: '分',
    hour: '時間',
    hours: '時間',
    cancel: 'キャンセル',
    cancelTimer: 'タイマーをキャンセル',
    radioAlarm: 'ラジオアラーム',
    time: '時間',
    weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    station: 'ステーション',
    setAlarm: 'アラームを設定',
    cancelAlarm: 'アラームをキャンセル',
    connecting: '接続中...',
    live: 'ライブ',
    addedToFav: 'お気に入りに追加',
    removedFromFav: 'お気に入りから削除',
    stationAdded: 'ステーションが追加されました！',
    fillAllFields: 'すべてのフィールドを入力',
    invalidURL: '無効なURL',
    timerSet: 'タイマーを設定',
    goodNight: 'おやすみなさい！',
    alarmSet: 'アラームを設定',
    alarmCancelled: 'アラームがキャンセルされました',
    timerCancelled: 'タイマーがキャンセルされました',
    goodMorning: 'おはよう！アラームが開始されました',
    all: '🌐 すべて',
    favorites: '❤️ お気に入り',
    alarm: 'アラーム',
    remaining: '残り',
    aboutTitle: 'GrulyaFMについて',
    aboutLead: 'GrulyaFM — グローバルインターネットラジオ。デザインと開発：Grulya。',
    contactTitle: '連絡先',
    privacyTitle: 'プライバシー',
    privacyShort: 'GrulyaFMは個人データを収集または送信しません。設定とお気に入りのステーションは、ブラウザまたはSupabaseアカウントにのみ保存されます。',
    privacyLink: 'プライバシーポリシーの詳細'
  }
};

const LANGUAGE_NAMES = {
  en: ' English',
  ru: ' Русский',
  de: ' Deutsch',
  fr: ' Français',
  es: ' Español',
  pt: ' Português',
  it: ' Italiano',
  uk: ' Українська',
  zh: ' 中文',
  ja: ' 日本語'
};

const COUNTRY_NAMES = {
  GB: 'United Kingdom',
  FR: 'France',
  DE: 'Germany',
  ES: 'Spain',
  PT: 'Portugal',
  US: 'United States',
  UA: 'Ukraine',
  IT: 'Italy',
  NL: 'Netherlands',
  SE: 'Sweden',
  NO: 'Norway',
  PL: 'Poland',
  TR: 'Turkey',
  BR: 'Brazil',
  MX: 'Mexico',
  RU: "Russia",
  AR: 'Argentina',
  CA: 'Canada',
  AU: 'Australia',
  JP: 'Japan',
  CN: 'China',
  IN: 'India',
  MY: 'My Stations'
};

// Application State
const state = {
  currentStation: null,
  isPlaying: false,
  volume: 70,
  favorites: [],
  searchQuery: '',
  activeTab: 'all',
  enabledCountries: Object.keys(COUNTRY_NAMES).filter(c => c !== 'MY'),
  isDarkTheme: true,
  language: 'en',
  myStations: [],
  alarm: null,
  sleepTimer: null,
  compact: false // компактный режим списка
};

// ===== Supabase auth & cloud sync =====
// ПОЛНАЯ СИНХРОНИЗАЦИЯ С SUPABASE
// ============================================

// Получить текущего пользователя
async function getCurrentUser() {
  try {
    const { data } = await window.supabase.auth.getUser();
    return data?.user || null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
}

// СОХРАНИТЬ ВСЁ В SUPABASE
async function saveToSupabase() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      console.log('No user - saving only to localStorage');
      return;
    }

    const userData = {
      user_id: user.id,
      favorites: state.favorites || [],
      custom_stations: state.myStations || [],
      settings: {
        volume: state.volume,
        enabledCountries: state.enabledCountries,
        isDarkTheme: state.isDarkTheme,
        language: state.language,
        alarm: state.alarm,
        compact: state.compact,
        activeTab: state.activeTab
      }
    };

    console.log('💾 Saving to Supabase:', userData);

    // UPSERT - создаст или обновит
    const { data, error } = await window.supabase
      .from('user_data')
      .upsert(userData, { 
        onConflict: 'user_id',
        returning: 'minimal'
      });

    if (error) {
      console.error('❌ Supabase save error:', error);
      showToast('⚠️ Sync error: ' + error.message);
    } else {
      console.log('✅ Saved to Supabase successfully');
      showToast('✅ Synced to cloud');
    }
  } catch (error) {
    console.error('❌ Save exception:', error);
    showToast('⚠️ Sync failed');
  }
}

// ЗАГРУЗИТЬ ВСЁ ИЗ SUPABASE
async function loadFromSupabase() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      console.log('No user - loading only from localStorage');
      return false;
    }

    console.log('☁️ Loading from Supabase for user:', user.id);

    const { data, error } = await window.supabase
      .from('user_data')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No data yet - first time user
        console.log('📝 No cloud data yet - will create on first save');
        return false;
      }
      console.error('❌ Supabase load error:', error);
      return false;
    }

    if (!data) {
      console.log('No data returned');
      return false;
    }

    console.log('✅ Loaded from Supabase:', data);

    // Применяем данные из облака
    if (data.favorites) state.favorites = data.favorites;
    if (data.custom_stations) {
      state.myStations = data.custom_stations;
      allStations.MY = state.myStations;
    }
    
    if (data.settings) {
      const s = data.settings;
      if (s.volume !== undefined) state.volume = s.volume;
      if (s.enabledCountries) state.enabledCountries = s.enabledCountries;
      if (s.isDarkTheme !== undefined) state.isDarkTheme = s.isDarkTheme;
      if (s.language) state.language = s.language;
      if (s.alarm) state.alarm = s.alarm;
      if (s.compact !== undefined) state.compact = s.compact;
      if (s.activeTab) state.activeTab = s.activeTab;
    }

    // Применяем к UI
    audio.volume = state.volume / 100;
    document.getElementById('volumeFill').style.width = `${state.volume}%`;
    
    if (!state.isDarkTheme) {
      document.body.classList.add('light-theme');
    }

    if (state.alarm) {
      updateAlarmDisplay();
    }

    // Сохраняем локально тоже
    saveToLocalStorage();
    
    showToast('☁️ Loaded from cloud');
    return true;

  } catch (error) {
    console.error('❌ Load exception:', error);
    return false;
  }
}

// Сохранить только в localStorage (быстрое, для UI)
function saveToLocalStorage() {
  try {
    localStorage.setItem('grulyafm_state', JSON.stringify({
      favorites: state.favorites,
      volume: state.volume,
      enabledCountries: state.enabledCountries,
      isDarkTheme: state.isDarkTheme,
      language: state.language,
      myStations: state.myStations,
      alarm: state.alarm,
      compact: state.compact,
      activeTab: state.activeTab
    }));
  } catch (error) {
    console.error('localStorage save error:', error);
  }
}

// Загрузить из localStorage
function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem('grulyafm_state');
    if (!saved) return false;

    const savedState = JSON.parse(saved);
    state.favorites = savedState.favorites || [];
    state.volume = savedState.volume || 70;
    state.enabledCountries = savedState.enabledCountries || state.enabledCountries;
    state.isDarkTheme = savedState.isDarkTheme !== false;
    state.language = savedState.language || 'en';
    state.myStations = savedState.myStations || [];
    state.alarm = savedState.alarm || null;
    state.compact = savedState.compact === true;
    state.activeTab = savedState.activeTab || 'all';

    if (!state.isDarkTheme) {
      document.body.classList.add('light-theme');
    }

    audio.volume = state.volume / 100;
    document.getElementById('volumeFill').style.width = `${state.volume}%`;

    if (state.alarm) {
      updateAlarmDisplay();
    }

    return true;
  } catch (error) {
    console.error('localStorage load error:', error);
    return false;
  }
}

// ГЛАВНАЯ ФУНКЦИЯ СОХРАНЕНИЯ
// Сохраняет и локально, и в облако
function saveToStorage() {
  // Сразу сохраняем локально (быстро)
  saveToLocalStorage();
  
  // Синхронизируем с облаком (асинхронно, не блокирует UI)
  saveToSupabase().catch(err => console.error('Sync error:', err));
}

// ГЛАВНАЯ ФУНКЦИЯ ЗАГРУЗКИ
// Загружает из облака, fallback на localStorage
async function loadFromStorage() {
  console.log('📂 Loading user data...');
  
  // Сначала пробуем загрузить из облака
  const loadedFromCloud = await loadFromSupabase();
  
  if (!loadedFromCloud) {
    // Fallback на localStorage
    console.log('📂 Loading from localStorage...');
    loadFromLocalStorage();
  }
}

// Слушаем изменения авторизации
window.supabase?.auth.onAuthStateChange(async (event, session) => {
  console.log('🔐 Auth state changed:', event);
  
  if (event === 'SIGNED_IN') {
    showToast('🔓 Signed in!');
    // Загружаем данные из облака
    await loadFromSupabase();
    // Обновляем UI
    if (typeof updateUI === 'function') {
      updateUI();
    }
    if (typeof renderTabs === 'function') {
      renderTabs();
    }
    if (typeof renderStations === 'function') {
      renderStations();
    }
  } else if (event === 'SIGNED_OUT') {
    showToast('🚪 Signed out');
  } else if (event === 'TOKEN_REFRESHED') {
    console.log('🔄 Token refreshed');
  }
});

// Кнопка ручной синхронизации
document.getElementById('btnSyncNow')?.addEventListener('click', async () => {
  showToast('🔄 Syncing...');
  await saveToSupabase();
});

// Sign out button
document.getElementById('btnSignOut')?.addEventListener('click', async () => {
  await window.supabase.auth.signOut();
  showToast('👋 Вы вышли');
});

document.getElementById('btnSyncNow')?.addEventListener('click', async () => {
  await saveToSupabase();
});

console.log('✅ Supabase sync module loaded');

const audio = document.getElementById('audio');

// Wake Lock для предотвращения блокировки экрана во время воспроизведения
let wakeLock = null;

// Global stations object
let allStations = {};

// === CORS proxy + HLS helpers (auto-injected) ===
const proxify = (url) => `/api/radio-proxy?url=${encodeURIComponent(url)}`;
const isHls   = (url) => typeof url === 'string' && /\.m3u8(\?|$)/i.test(url);
function setStream(audioEl, url){
  const src = proxify(url);
  if (isHls(url)){
    import('./hls-helper.js').then(mod => {
      if (mod && typeof mod.setupHls === 'function'){
        mod.setupHls(audioEl, src);
      } else {
        audioEl.src = src;
      }
    }).catch(()=>{
      audioEl.src = src;
    });
  } else {
    audioEl.src = src;
  }
}
// === end helpers ===

const visualizer = document.getElementById('visualizer');

// Initialize visualizer bars
for (let i = 0; i < 30; i++) {
  const bar = document.createElement('div');
  bar.className = 'bar';
  visualizer.appendChild(bar);
}

// Translation helper
function t(key) {
  return TRANSLATIONS[state.language][key] || TRANSLATIONS['en'][key] || key;
}

// Show toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// === WAKE LOCK API для предотвращения блокировки экрана ===
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('✅ Wake Lock активирован');

      wakeLock.addEventListener('release', () => {
        console.log('⚠️ Wake Lock освобожден');
      });
    }
  } catch (err) {
    console.log('❌ Wake Lock не поддерживается или отклонен:', err);
  }
}

async function releaseWakeLock() {
  if (wakeLock !== null) {
    try {
      await wakeLock.release();
      wakeLock = null;
      console.log('✅ Wake Lock освобожден вручную');
    } catch (err) {
      console.log('❌ Ошибка освобождения Wake Lock:', err);
    }
  }
}

// Восстановление Wake Lock при возврате на страницу
document.addEventListener('visibilitychange', async () => {
  if (wakeLock !== null && document.visibilityState === 'visible' && state.isPlaying) {
    await requestWakeLock();
  }
});

// === MEDIA SESSION API для фонового воспроизведения ===
function updateMediaSession(station) {
  if ('mediaSession' in navigator && station) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: station.name,
      artist: `${station.country} • GrulyaFM`,
      album: 'Global Radio',
      artwork: [
        { src: '/icon-96.png', sizes: '96x96', type: 'image/png' },
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    });

    navigator.mediaSession.setActionHandler('play', () => {
      audio.play();
      state.isPlaying = true;
      document.getElementById('playBtn').textContent = '⏸️';
      updateMiniPlayer();
    });

    navigator.mediaSession.setActionHandler('pause', async () => {
      audio.pause();
      state.isPlaying = false;
      document.getElementById('playBtn').textContent = '▶️';
      await releaseWakeLock();
      updateMiniPlayer();
    });

    navigator.mediaSession.setActionHandler('stop', async () => {
      audio.pause();
      state.isPlaying = false;
      document.getElementById('playBtn').textContent = '▶️';
      await releaseWakeLock();
      updateMiniPlayer();
    });

    console.log('✅ Media Session обновлена для:', station.name);
  }
}

// Load stations from stations.json
async function loadStations() {
  try {
    const response = await fetch('stations.json');
    const data = await response.json();
    allStations = data.stations || {};
    allStations.MY = state.myStations;
    renderTabs();
    renderStations();
    showToast('🎵 ' + t('bannerText'));
  } catch (error) {
    console.error('Error loading stations:', error);
    showToast('❌ Error loading stations.json');
    allStations = { MY: state.myStations };
  }
}

// Load state from localStorage
function loadFromStorage() {
  try {
    const saved = localStorage.getItem('grulyafm_state');
    if (saved) {
      const savedState = JSON.parse(saved);
      state.favorites = savedState.favorites || [];
      state.volume = savedState.volume || 70;
      state.enabledCountries = savedState.enabledCountries || state.enabledCountries;
      state.isDarkTheme = savedState.isDarkTheme !== false;
      state.language = savedState.language || 'ru';
      state.myStations = savedState.myStations || [];
      state.alarm = savedState.alarm || null;
      state.compact = savedState.compact === true;

      if (!state.isDarkTheme) {
        document.body.classList.add('light-theme');
        const themeToggle = document.getElementById('themeToggle');
        const checkbox = themeToggle?.querySelector('.checkbox');
        if (checkbox) checkbox.classList.remove('checked');
      }

      audio.volume = state.volume / 100;
      document.getElementById('volumeFill').style.width = `${state.volume}%`;

      if (state.alarm) {
        updateAlarmDisplay();
      }
    }
  } catch (error) {
    console.error('Error loading state:', error);
  }
}

// Save state to localStorage
function saveToStorage() {
  try {
    localStorage.setItem('grulyafm_state', JSON.stringify({
      favorites: state.favorites,
      volume: state.volume,
      enabledCountries: state.enabledCountries,
      isDarkTheme: state.isDarkTheme,
      language: state.language,
      myStations: state.myStations,
      alarm: state.alarm,
      compact: state.compact
    }));
    // если пользователь авторизован — синкнем в фоне (не мешает UX)
    getCurrentUser().then(u => { if (u) saveUserStateToCloud(); });
  } catch (error) {
    console.error('Error saving state:', error);
  }
}

// Get filtered stations
function getFilteredStations() {
  let stations = [];
  state.enabledCountries.forEach(country => {
    if (allStations[country]) {
      stations.push(...allStations[country].map((s, index) => ({
        ...s,
        country,
        id: `${country}-${index}`
      })));
    }
  });

  // Сохранение в облако если пользователь авторизован
  getCurrentUser().then(u => { if (u) saveToSupabase(); });

  if (state.searchQuery) {
    stations = stations.filter(s =>
      s.name.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }

  if (state.activeTab === 'favorites') {
    stations = stations.filter(s => state.favorites.includes(s.id));
  } else if (state.activeTab !== 'all') {
    stations = stations.filter(s => s.country === state.activeTab);
  }

  return stations;
}

// Render stations list
function renderStations() {
  const stations = getFilteredStations();
  const list = document.getElementById('stationsList');

  if (stations.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:40px;color:var(--muted)">${t('clickStation')}</div>`;
    return;
  }

  list.innerHTML = stations.map(s => `
    <div class="station-card ${state.compact ? 'compact' : ''} ${state.currentStation?.id === s.id ? 'playing' : ''}" data-id="${s.id}">
      <div class="station-icon">📻</div>
      <div class="station-details">
        <div class="station-title">${s.name}</div>
        <div class="station-country">${s.country} • ${s.bitrate ?? 128} kbps</div>
      </div>
      <button class="fav-btn ${state.favorites.includes(s.id) ? 'active' : ''}" data-id="${s.id}">
        ${state.favorites.includes(s.id) ? '❤️' : '🤍'}
      </button>
      ${s.country === 'MY' ? `<button class="delete-btn" title="Delete" data-url="${s.url}">🗑️</button>` : ``}
    </div>
  `).join('');

  list.querySelectorAll('.station-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('fav-btn') || e.target.classList.contains('delete-btn')) return;
      const id = card.dataset.id;
      const station = stations.find(s => s.id === id);
      playStation(station);
    });
  });

  list.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      toggleFavorite(id);
    });
  });

  list.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const url = btn.dataset.url;
      if (confirm('Delete this station?')) {
        deleteMyStation(url);
      }
    });
  });
}

// Render tabs
function renderTabs() {
  const tabs = document.getElementById('tabs');
  const categories = ['all', 'favorites', ...state.enabledCountries];

  tabs.innerHTML = categories.map(cat => {
    let label = '';
    if (cat === 'all') label = t('all');
    else if (cat === 'favorites') label = t('favorites');
    else label = cat;

    return `<button class="tab ${cat === state.activeTab ? 'active' : ''}" data-category="${cat}">${label}</button>`;
  }).join('');

  tabs.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.activeTab = tab.dataset.category;
      renderTabs();
      renderStations();
    });
  });
}

// Play station
function playStation(station) {
  state.currentStation = station;
  setStream(audio, station.url);

  document.getElementById('stationName').textContent = station.name;
  document.getElementById('trackMetadata').textContent = t('connecting');

  audio.play().then(async () => {
    state.isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸️';
    document.getElementById('trackMetadata').textContent = `${station.country} • ${t('live')} • ${station.bitrate ?? 128} kbps`;
    showToast(`▶️ ${station.name}`);

    // Активируем Wake Lock для предотвращения блокировки экрана
    await requestWakeLock();

    // Обновляем Media Session для фонового воспроизведения
    updateMediaSession(station);

    renderStations();
    updateMiniPlayer();
  }).catch(() => {
    showToast('❌ ' + t('connecting'));
    state.isPlaying = false;
    document.getElementById('playBtn').textContent = '▶️';
    updateMiniPlayer();
  });
}

// Toggle favorite
function toggleFavorite(id) {
  const index = state.favorites.indexOf(id);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast('💔 ' + t('removedFromFav'));
  } else {
    state.favorites.push(id);
    showToast('❤️ ' + t('addedToFav'));
  }
  saveToStorage();
  renderStations();
}

// Render language grid
function renderLanguageGrid() {
  const grid = document.getElementById('languageGrid');
  grid.innerHTML = Object.keys(LANGUAGE_NAMES).map(lang => `
    <div class="lang-item ${state.language === lang ? 'active' : ''}" data-lang="${lang}">
      ${LANGUAGE_NAMES[lang]}
    </div>
  `).join('');

  grid.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', () => {
      state.language = item.dataset.lang;
      saveToStorage();
      renderLanguageGrid();
      updateUI();
      showToast(`🌍 ${LANGUAGE_NAMES[item.dataset.lang]}`);
    });
  });
}

// Render countries settings
function renderCountriesSettings() {
  const container = document.getElementById('countriesSettings');
  container.innerHTML = Object.keys(COUNTRY_NAMES).filter(c => c !== 'MY').map(code => `
    <div class="setting-item" style="cursor:pointer;" data-country="${code}">
      <div style="display:flex;align-items:center;gap:8px;">
        <div class="checkbox ${state.enabledCountries.includes(code) ? 'checked' : ''}"></div>
        <span>${COUNTRY_NAMES[code]}</span>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.setting-item').forEach(item => {
    item.addEventListener('click', () => {
      const country = item.dataset.country;
      const checkbox = item.querySelector('.checkbox');

      if (state.enabledCountries.includes(country)) {
        state.enabledCountries = state.enabledCountries.filter(c => c !== country);
        checkbox.classList.remove('checked');
      } else {
        state.enabledCountries.push(country);
        checkbox.classList.add('checked');
      }

      saveToStorage();
      renderTabs();
      renderStations();
    });
  });
}

// Update UI with current language
function updateUI() {
  document.getElementById('subtitle').textContent = t('subtitle');
  document.getElementById('bannerTitle').textContent = t('bannerTitle');
  document.getElementById('bannerText').textContent = t('bannerText');
  document.getElementById('stationName').textContent = state.currentStation ? state.currentStation.name : t('selectStation');
  document.getElementById('trackMetadata').textContent = state.currentStation ? `${state.currentStation.country} • ${t('live')} • ${state.currentStation.bitrate ?? 128} kbps` : t('clickStation');
  document.getElementById('searchInput').placeholder = t('searchPlaceholder');
  document.getElementById('randomBtnText').textContent = t('randomStation');

  // Modal titles
  document.getElementById('settingsTitle').textContent = `⚙️ ${t('settings')}`;
  document.getElementById('addStationTitle').textContent = `➕ ${t('addStation')}`;
  document.getElementById('timerTitle').textContent = `💤 ${t('sleepTimer')}`;
  document.getElementById('alarmModalTitle').textContent = `⏰ ${t('radioAlarm')}`;

  // Section titles
  document.getElementById('languageTitle').textContent = `🌍 ${t('language')}`;
  document.getElementById('themeTitle').textContent = `🎨 ${t('theme')}`;
  document.getElementById('countriesTitle').textContent = `🌎 ${t('visibleCountries')}`;

  // Input labels
  document.getElementById('stationNameLabel').textContent = t('stationName');
  document.getElementById('stationUrlLabel').textContent = t('streamURL');
  document.getElementById('alarmTimeLabel').textContent = t('time');
  document.getElementById('alarmDaysLabel').textContent = t('weekdays').join(', ');
  document.getElementById('alarmStationLabel').textContent = t('station');

  // Button texts
  document.getElementById('saveStationText').textContent = t('save');
  document.getElementById('setAlarmText').textContent = t('setAlarm');
  document.getElementById('cancelAlarmText').textContent = t('cancelAlarm');
  document.getElementById('cancelTimerText').textContent = t('cancelTimer');
  document.getElementById('themeText').textContent = state.isDarkTheme ? t('darkMode') : t('lightMode');

  // Timer labels
  document.querySelectorAll('.min-label').forEach(el => el.textContent = t('min'));
  document.querySelectorAll('.hour-label').forEach(el => el.textContent = t('hour'));

  // About modal texts
  const aboutTitle = document.getElementById('aboutTitle');
  const aboutLead = document.getElementById('aboutLead');
  const contactTitle = document.getElementById('contactTitle');
  const privacyTitle = document.getElementById('privacyTitle');
  const privacyShort = document.getElementById('privacyShort');
  const privacyLink = document.getElementById('privacyLink');

  if (aboutTitle) aboutTitle.textContent = `ℹ️ ${t('aboutTitle')}`;
  if (aboutLead) aboutLead.textContent = t('aboutLead');
  if (contactTitle) contactTitle.textContent = `📫 ${t('contactTitle')}`;
  if (privacyTitle) privacyTitle.textContent = `🔒 ${t('privacyTitle')}`;
  if (privacyShort) privacyShort.textContent = t('privacyShort');
  if (privacyLink) {
    privacyLink.textContent = `📄 ${t('privacyLink')}`;
    // Update link to include current language
    privacyLink.href = `privacy-policy.html?lang=${state.language}`;
  }

  renderWeekdays();
  renderTabs();
  renderStations();
  updateMiniPlayer();
}

// Render weekdays
function renderWeekdays() {
  const container = document.getElementById('weekdays');
  const weekdays = t('weekdays');
  container.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(day => `
    <div class="weekday ${state.alarm && state.alarm.days && state.alarm.days.includes(day) ? 'active' : ''}" data-day="${day}">
      ${weekdays[day]}
    </div>
  `).join('');

  container.querySelectorAll('.weekday').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

// === NOTIFICATION API для будильника ===
async function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    try {
      const permission = await Notification.requestPermission();
      console.log('📢 Notification permission:', permission);
      return permission === 'granted';
    } catch (err) {
      console.log('❌ Notification permission error:', err);
      return false;
    }
  }
  return Notification.permission === 'granted';
}

function showAlarmNotification(stationName) {
  if ('Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification('⏰ GrulyaFM Будильник', {
      body: `${t('goodMorning')}\n🎵 ${stationName}`,
      icon: '/icon-192.png',
      badge: '/icon-96.png',
      tag: 'alarm',
      requireInteraction: true,
      vibrate: [200, 100, 200, 100, 200]
    });

    notification.onclick = () => {
      window.focus();
      notification.close();
    };
  }
}

// Check alarm
function checkAlarm() {
  if (!state.alarm) return;

  const now = new Date();
  const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  const currentDay = now.getDay();

  if (currentTime === state.alarm.time && state.alarm.days && state.alarm.days.includes(currentDay)) {
    const stations = getFilteredStations();
    const station = stations.find(s => s.id === state.alarm.stationId);
    if (station) {
      // Показываем уведомление
      showAlarmNotification(station.name);

      // Запускаем станцию
      playStation(station);
      showToast('⏲️ ' + t('goodMorning'));
    }
  }
}

// Update alarm display
function updateAlarmDisplay() {
  if (state.alarm) {
    const weekdays = t('weekdays');
    const daysText = state.alarm.days ? state.alarm.days.map(d => weekdays[d]).join(', ') : '';
    document.getElementById('alarmText').textContent = `⏲️ ${t('alarm')}: ${state.alarm.time}`;
    document.getElementById('alarmDays').textContent = `📅 ${daysText}`;
    document.getElementById('alarmDisplay').classList.add('active');
  } else {
    document.getElementById('alarmDisplay').classList.remove('active');
  }
}

// === Mini Player ===
function updateMiniPlayer() {
  const mini = document.getElementById('miniPlayer');
  const miniTitle = document.getElementById('miniTitle');
  const miniMeta = document.getElementById('miniMeta');
  const miniPlay = document.getElementById('miniPlay');

  if (!state.currentStation) {
    if (mini) mini.classList.add('hidden');
    return;
  }

  if (mini) mini.classList.remove('hidden');
  if (miniTitle) miniTitle.textContent = state.currentStation.name;
  if (miniMeta) miniMeta.textContent = `${state.currentStation.country} • ${t('live')} • ${state.currentStation.bitrate ?? 128} kbps`;
  if (miniPlay) miniPlay.textContent = state.isPlaying ? '⏸️' : '▶️';
}

/* -------------------------------------------
   CUSTOM SELECT for Alarm Station (Glass UI)
   ------------------------------------------- */
function buildAlarmCustomSelect(stations) {
  const nativeSelect = document.getElementById('alarmStation'); // hidden
  const wrapper = document.getElementById('alarmStationCSelect');
  const selected = document.getElementById('csel-selected');
  const optionsBox = document.getElementById('csel-options');

  if (!nativeSelect || !wrapper || !selected || !optionsBox) return;

  // fill native select (для совместимости с логикой setAlarm)
  nativeSelect.innerHTML = stations.map(s => `<option value="${s.id}">${s.name}</option>`).join('');

  // choose current
  let currentId = nativeSelect.value || stations[0]?.id || '';
  nativeSelect.value = currentId;

  // build custom list
  if (!stations.length) {
    optionsBox.innerHTML = `<div class="cselect-empty">${t('clickStation')}</div>`;
    selected.textContent = '—';
    return;
  }

  optionsBox.innerHTML = stations.map(s => `
    <div class="cselect-option ${s.id===currentId?'active':''}" data-id="${s.id}" title="${s.name}">${s.name}</div>
  `).join('');

  const current = stations.find(s => s.id === currentId) || stations[0];
  selected.textContent = current?.name || '—';

  // open/close handlers
  const closeAll = () => wrapper.classList.remove('open');
  selected.onclick = (e) => { e.stopPropagation(); wrapper.classList.toggle('open'); };
  optionsBox.querySelectorAll('.cselect-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const id = opt.dataset.id;
      nativeSelect.value = id;
      selected.textContent = stations.find(s => s.id === id)?.name || '—';
      optionsBox.querySelectorAll('.cselect-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      closeAll();
    });
  });
  document.addEventListener('click', closeAll, { once:true });
}

// Event Listeners

// Random Station Button
document.getElementById('randomBtn').addEventListener('click', () => {
  const stations = getFilteredStations();
  if (stations.length > 0) {
    const randomStation = stations[Math.floor(Math.random() * stations.length)];
    playStation(randomStation);
  }
});

// Play/Pause Button
document.getElementById('playBtn').addEventListener('click', async () => {
  if (!state.currentStation) return showToast(t('selectStation'));

  if (state.isPlaying) {
    audio.pause();
    state.isPlaying = false;
    document.getElementById('playBtn').textContent = '▶️';
    await releaseWakeLock();
  } else {
    await audio.play();
    state.isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸️';
    await requestWakeLock();
  }
  updateMiniPlayer();
});

// Next Button
document.getElementById('nextBtn').addEventListener('click', () => {
  const stations = getFilteredStations();
  const currentIndex = stations.findIndex(s => s.id === state.currentStation?.id);
  const nextStation = stations[(currentIndex + 1) % stations.length];
  if (nextStation) playStation(nextStation);
});

// Previous Button
document.getElementById('prevBtn').addEventListener('click', () => {
  const stations = getFilteredStations();
  const currentIndex = stations.findIndex(s => s.id === state.currentStation?.id);
  const prevStation = stations[(currentIndex - 1 + stations.length) % stations.length];
  if (prevStation) playStation(prevStation);
});

// Volume Control
document.getElementById('volumeSlider').addEventListener('click', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  state.volume = Math.max(0, Math.min(100, percent * 100));
  audio.volume = state.volume / 100;
  document.getElementById('volumeFill').style.width = `${state.volume}%`;
  saveToStorage();
});

// Search Input
document.getElementById('searchInput').addEventListener('input', (e) => {
  state.searchQuery = e.target.value;
  renderStations();
});

// Settings Modal
document.getElementById('settingsBtn').addEventListener('click', () => {
  renderCountriesSettings();
  renderLanguageGrid();
  // показать состояние компактного режима
  const cb = document.getElementById('compactCheckbox');
  if (cb) cb.classList.toggle('checked', state.compact);
  document.getElementById('settingsModal').classList.add('active');
});

document.getElementById('closeSettings').addEventListener('click', () => {
  document.getElementById('settingsModal').classList.remove('active');
});

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  state.isDarkTheme = !state.isDarkTheme;
  document.body.classList.toggle('light-theme');
  const checkbox = document.getElementById('themeToggle').querySelector('.checkbox');
  checkbox.classList.toggle('checked');
  document.getElementById('themeText').textContent = state.isDarkTheme ? t('darkMode') : t('lightMode');
  saveToStorage();
});

// Compact list toggle
const compactRow = document.getElementById('compactToggle');
if (compactRow) {
  compactRow.addEventListener('click', () => {
    state.compact = !state.compact;
    const cb = document.getElementById('compactCheckbox');
    if (cb) cb.classList.toggle('checked', state.compact);
    saveToStorage();
    renderStations();
  });
}

// Add Station Modal
document.getElementById('addStationBtn').addEventListener('click', () => {
  document.getElementById('addStationModal').classList.add('active');
});

document.getElementById('closeAddStation').addEventListener('click', () => {
  document.getElementById('addStationModal').classList.remove('active');
});

document.getElementById('saveStation').addEventListener('click', () => {
  const name = document.getElementById('newStationName').value.trim();
  const url = document.getElementById('newStationUrl').value.trim();

  if (!name || !url) return showToast(t('fillAllFields'));
  if (!url.startsWith('http')) return showToast(t('invalidURL'));

  // не допускаем дубликаты по URL среди «моих станций»
  const exists = (state.myStations || []).some(s => s.url === url);
  if (exists) {
    showToast('⚠️ Station already exists');
    return;
  }

  const newStation = { name, url, bitrate: 128 };
  state.myStations.push(newStation);
  allStations.MY = state.myStations;

  if (!state.enabledCountries.includes('MY')) {
    state.enabledCountries.push('MY');
  }

  document.getElementById('newStationName').value = '';
  document.getElementById('newStationUrl').value = '';
  document.getElementById('addStationModal').classList.remove('active');

  saveToStorage();
  showToast('✅ ' + t('stationAdded'));
  renderTabs();
  renderStations();
});

// Sleep Timer Modal
document.getElementById('timerBtn').addEventListener('click', () => {
  document.getElementById('timerModal').classList.add('active');
});

document.getElementById('closeTimer').addEventListener('click', () => {
  document.getElementById('timerModal').classList.remove('active');
});

// Переменные для таймера сна с обратным отсчётом
let timerEndTime = null;
let timerUpdateInterval = null;

// Функция обновления отображения таймера
function updateTimerDisplay() {
  if (!timerEndTime) {
    document.getElementById('timerDisplay').classList.remove('active');
    return;
  }

  const now = Date.now();
  const remainingMs = timerEndTime - now;

  if (remainingMs <= 0) {
    document.getElementById('timerDisplay').classList.remove('active');
    if (timerUpdateInterval) {
      clearInterval(timerUpdateInterval);
      timerUpdateInterval = null;
    }
    timerEndTime = null;
    return;
  }

  const totalMinutes = Math.ceil(remainingMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  let timeText = '';
  if (hours > 0) {
    timeText = `${hours}:${minutes.toString().padStart(2, '0')}`;
  } else {
    timeText = `${minutes} ${t('min')}`;
  }

  document.getElementById('timerText').textContent = `💤 ${t('sleepTimer')}`;
  document.getElementById('timerRemaining').textContent = `⏱️ ${t('remaining')}: ${timeText}`;
  document.getElementById('timerDisplay').classList.add('active');
}

document.querySelectorAll('.timer-option').forEach(option => {
  option.addEventListener('click', () => {
    if (option.id === 'cancelTimer') {
      if (state.sleepTimer) clearTimeout(state.sleepTimer);
      state.sleepTimer = null;
      timerEndTime = null;
      if (timerUpdateInterval) {
        clearInterval(timerUpdateInterval);
        timerUpdateInterval = null;
      }
      document.getElementById('timerDisplay').classList.remove('active');
      showToast('⏰ ' + t('timerCancelled'));
    } else {
      const minutes = parseInt(option.dataset.minutes);
      if (state.sleepTimer) clearTimeout(state.sleepTimer);
      if (timerUpdateInterval) clearInterval(timerUpdateInterval);

      // Устанавливаем время окончания таймера
      timerEndTime = Date.now() + (minutes * 60 * 1000);

      // Обновляем отображение каждую секунду
      updateTimerDisplay();
      timerUpdateInterval = setInterval(updateTimerDisplay, 1000);

      state.sleepTimer = setTimeout(async () => {
        audio.pause();
        state.isPlaying = false;
        document.getElementById('playBtn').textContent = '▶️';
        await releaseWakeLock();
        showToast('💤 ' + t('goodNight'));
        updateMiniPlayer();

        // Скрываем индикатор таймера
        timerEndTime = null;
        if (timerUpdateInterval) {
          clearInterval(timerUpdateInterval);
          timerUpdateInterval = null;
        }
        document.getElementById('timerDisplay').classList.remove('active');
      }, minutes * 60 * 1000);

      showToast(`⏰ ${t('timerSet')} ${minutes} ${t('min')}`);
    }
    document.getElementById('timerModal').classList.remove('active');
  });
});

// Alarm Modal (open)
document.getElementById('alarmBtn').addEventListener('click', () => {
  const stations = getFilteredStations();
  // постраиваем кастомный список + наполняем скрытый select
  buildAlarmCustomSelect(stations);
  document.getElementById('alarmModal').classList.add('active');
  renderWeekdays();
});

document.getElementById('closeAlarm').addEventListener('click', () => {
  document.getElementById('alarmModal').classList.remove('active');
});

// Set / Cancel Alarm
document.getElementById('setAlarm').addEventListener('click', async () => {
  const time = document.getElementById('alarmTime').value;
  const stationId = document.getElementById('alarmStation').value; // из скрытого select
  const selectedDays = Array.from(document.querySelectorAll('.weekday.active')).map(el => parseInt(el.dataset.day));

  if (!time || selectedDays.length === 0 || !stationId) {
    return showToast(t('fillAllFields'));
  }

  // Запрашиваем разрешение на уведомления
  await requestNotificationPermission();

  state.alarm = { time, stationId, days: selectedDays };
  saveToStorage();
  updateAlarmDisplay();
  document.getElementById('alarmModal').classList.remove('active');
  showToast(`⏲️ ${t('alarmSet')} ${time}`);

  if (!alarmInterval) {
    alarmInterval = setInterval(checkAlarm, 60000);
  }
});

document.getElementById('cancelAlarm').addEventListener('click', () => {
  state.alarm = null;
  saveToStorage();
  updateAlarmDisplay();
  showToast('⏲️ ' + t('alarmCancelled'));

  if (alarmInterval) {
    clearInterval(alarmInterval);
    alarmInterval = null;
  }
});

// === Delete "My Station" by URL ===
function deleteMyStation(url) {
  if (!Array.isArray(state.myStations)) return;

  const idx = state.myStations.findIndex(s => s.url === url);
  if (idx === -1) return;

  const removed = state.myStations[idx];

  // убрать из избранного id вида "MY-<index>"
  const favId = `MY-${idx}`;
  state.favorites = state.favorites.filter(id => id !== favId);

  // если играло это радио — остановим
  if (state.currentStation && state.currentStation.url === removed.url) {
    try { audio.pause(); } catch(e){}
    state.currentStation = null;
    state.isPlaying = false;
    document.getElementById('playBtn').textContent = '▶️';
    updateMiniPlayer();
  }

  // удалить
  state.myStations.splice(idx, 1);
  allStations.MY = state.myStations;

  saveToStorage();
  renderTabs();
  renderStations();

  showToast('🗑️ Station removed');
}

// Mini-player controls
document.getElementById('miniPlay').addEventListener('click', async () => {
  if (!state.currentStation) return showToast(t('selectStation'));
  if (state.isPlaying) {
    audio.pause();
    state.isPlaying = false;
    document.getElementById('playBtn').textContent = '▶️';
    await releaseWakeLock();
  } else {
    await audio.play();
    state.isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸️';
    await requestWakeLock();
  }
  updateMiniPlayer();
});

document.getElementById('miniPrev').addEventListener('click', () => {
  const stations = getFilteredStations();
  const currentIndex = stations.findIndex(s => s.id === state.currentStation?.id);
  const prevStation = stations[(currentIndex - 1 + stations.length) % stations.length];
  if (prevStation) playStation(prevStation);
});

document.getElementById('miniNext').addEventListener('click', () => {
  const stations = getFilteredStations();
  const currentIndex = stations.findIndex(s => s.id === state.currentStation?.id);
  const nextStation = stations[(currentIndex + 1) % stations.length];
  if (nextStation) playStation(nextStation);
});

// Dock buttons
document.getElementById('dockHome').addEventListener('click', () => {
  state.activeTab = 'all';
  renderTabs(); renderStations();
});
document.getElementById('dockFavorites').addEventListener('click', () => {
  state.activeTab = 'favorites';
  renderTabs(); renderStations();
});
document.getElementById('dockSettings').addEventListener('click', () => {
  renderCountriesSettings();
  renderLanguageGrid();
  const cb = document.getElementById('compactCheckbox');
  if (cb) cb.classList.toggle('checked', state.compact);
  document.getElementById('settingsModal').classList.add('active');
});

// Visualizer Animation
function animate() {
  const bars = visualizer.querySelectorAll('.bar');
  bars.forEach(bar => {
    const height = state.isPlaying ? Math.random() * 80 + 20 : 20;
    bar.style.height = `${height}%`;
  });
  requestAnimationFrame(animate);
}

// Initialize - Async IIFE для await
(async function init() {
  console.log('🚀 Initializing GrulyaFM...');
  
  // Загружаем данные (из Supabase или localStorage)
  await loadFromStorage();
  
  // Загружаем станции
  loadStations();
  
  // Обновляем UI
  updateUI();
  
  // Запускаем анимацию
  animate();
  
  // Запускаем будильник если есть
  if (state.alarm) {
    alarmInterval = setInterval(checkAlarm, 60000);
  }
  
  console.log('✅ GrulyaFM initialized!');
})();

// Service Worker Registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.log('Service Worker registration failed:', err));
}
// === ABOUT MODAL ===
document.getElementById('aboutBtn')?.addEventListener('click', () => {
  document.getElementById('aboutModal').classList.add('active');
});
document.getElementById('closeAbout')?.addEventListener('click', () => {
  document.getElementById('aboutModal').classList.remove('active');
});
// === Fallback: открытие модалок About и Privacy ===
function openModal(id){
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}
function closeModal(id){
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

document.getElementById('btnAbout')?.addEventListener('click', ()=>openModal('aboutModal'));
document.getElementById('btnPrivacy')?.addEventListener('click', ()=>{
  // Privacy Policy находится внутри aboutModal, поэтому открываем aboutModal
  openModal('aboutModal');
  // Прокручиваем к секции Privacy
  setTimeout(() => {
    const privacySection = document.getElementById('privacySection');
    if (privacySection) {
      privacySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
});

// закрытие по фону или Esc
document.addEventListener('click', (e)=>{
  const modal = e.target.closest?.('.modal');
  if (modal && e.target === modal) modal.classList.remove('active');
});
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape')
    document.querySelectorAll('.modal.active').forEach(m=>m.classList.remove('active'));
});

// === AUTO-RECONNECT: Автоматическое переподключение при обрыве потока ===
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 10;
let reconnectTimeout = null;

// Обработчик ошибок audio
audio.addEventListener('error', (e) => {
  console.error('❌ Audio error:', e);

  if (state.isPlaying && state.currentStation && reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
    reconnectAttempts++;
    console.log(`🔄 Attempting reconnect ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS}...`);

    // Пробуем переподключиться через 2 секунды
    clearTimeout(reconnectTimeout);
    reconnectTimeout = setTimeout(() => {
      if (state.currentStation) {
        console.log('🔄 Reconnecting to:', state.currentStation.name);
        setStream(audio, state.currentStation.url);
        audio.play().then(() => {
          console.log('✅ Reconnected successfully!');
          reconnectAttempts = 0; // Сбрасываем счётчик при успешном подключении
        }).catch(err => {
          console.error('❌ Reconnect failed:', err);
        });
      }
    }, 2000);
  } else if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
    console.error('❌ Max reconnect attempts reached. Stopping playback.');
    showToast('❌ Connection lost. Please try another station.');
    state.isPlaying = false;
    document.getElementById('playBtn').textContent = '▶️';
    updateMiniPlayer();
    releaseWakeLock();
    reconnectAttempts = 0;
  }
});

// Обработчик stalled (поток завис)
audio.addEventListener('stalled', () => {
  console.warn('⚠️ Audio stream stalled, attempting to resume...');
  if (state.isPlaying && state.currentStation) {
    audio.load();
    audio.play().catch(err => {
      console.error('❌ Resume failed:', err);
    });
  }
});

// Обработчик ended (поток завершился)
audio.addEventListener('ended', () => {
  console.log('⚠️ Audio stream ended');
  if (state.isPlaying && state.currentStation) {
    console.log('🔄 Stream ended, restarting...');
    audio.play().catch(err => {
      console.error('❌ Restart failed:', err);
    });
  }
});

// Обработчик waiting (буферизация)
audio.addEventListener('waiting', () => {
  console.log('⏳ Buffering...');
  document.getElementById('trackMetadata').textContent = t('connecting');
});

// Обработчик playing (возобновление воспроизведения)
audio.addEventListener('playing', () => {
  console.log('▶️ Playing...');
  if (state.currentStation) {
    document.getElementById('trackMetadata').textContent = `${state.currentStation.country} • ${t('live')} • ${state.currentStation.bitrate ?? 128} kbps`;
  }
  reconnectAttempts = 0; // Сбрасываем счётчик попыток при успешном воспроизведении
});

// Обработчик pause (только логирование, не переподключаемся при намеренной паузе)
audio.addEventListener('pause', () => {
  console.log('⏸️ Paused');
});

console.log('✅ Auto-reconnect handlers initialized');

// End of app.js
