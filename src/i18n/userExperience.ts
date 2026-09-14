import type { Locale } from './types'

export type NotificationTone = 'critical' | 'warning' | 'success'

export type NotificationRow = {
  key: string
  tone: NotificationTone
}

export const notificationRows: NotificationRow[] = [
  { key: 'trucksAttention', tone: 'critical' },
  { key: 'regionForecast', tone: 'warning' },
  { key: 'routeOptimized', tone: 'success' },
  { key: 'maintenanceFeedDelayed', tone: 'warning' },
]

export const userExperienceCopy = {
  en: {
    title: 'Notifications, Profile & Preferences',
    subtitle: 'Supporting panels for day-to-day account and notification management.',

    notificationCenterTitle: 'Notification Center',
    tagCritical: 'Critical',
    tagWarning: 'Warning',
    tagSuccess: 'Success',
    timeToday: 'Today · 08:30',

    notifTrucksAttention: '3 trucks require attention',
    notifRegionForecast: 'South region forecast down 12%',
    notifRouteOptimized: 'Route optimization completed',
    notifMaintenanceFeedDelayed: 'Maintenance data feed delayed',

    profileTitle: 'Profile',
    profileName: 'Najwa Jafar',
    profileRole: 'Operations Manager',
    profileCompany: 'BNS · Bosowa',
    editProfile: 'Edit profile',

    preferencesTitle: 'Preferences',
    languageLabel: 'Language',
    dashboardDensityLabel: 'Dashboard density',
    themeLabel: 'Theme',
    bahasa: 'Bahasa',
    english: 'English',
    comfortable: 'Comfortable',
    compact: 'Compact',
    light: 'Light',
    dark: 'Dark',
  },
  id: {
    title: 'Notifikasi, Profil & Preferensi',
    subtitle: 'Panel pendukung untuk manajemen akun dan notifikasi sehari-hari.',

    notificationCenterTitle: 'Pusat Notifikasi',
    tagCritical: 'Kritis',
    tagWarning: 'Peringatan',
    tagSuccess: 'Berhasil',
    timeToday: 'Hari ini · 08:30',

    notifTrucksAttention: '3 truk memerlukan perhatian',
    notifRegionForecast: 'Prediksi region Selatan turun 12%',
    notifRouteOptimized: 'Optimasi rute selesai',
    notifMaintenanceFeedDelayed: 'Feed data pemeliharaan tertunda',

    profileTitle: 'Profil',
    profileName: 'Najwa Jafar',
    profileRole: 'Manajer Operasi',
    profileCompany: 'BNS · Bosowa',
    editProfile: 'Edit profil',

    preferencesTitle: 'Preferensi',
    languageLabel: 'Bahasa',
    dashboardDensityLabel: 'Kepadatan dasbor',
    themeLabel: 'Tema',
    bahasa: 'Bahasa',
    english: 'English',
    comfortable: 'Nyaman',
    compact: 'Ringkas',
    light: 'Terang',
    dark: 'Gelap',
  },
} satisfies Record<Locale, Record<string, string>>
