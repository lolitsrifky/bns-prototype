import type { Locale } from './types'

export type PillTone = 'blue' | 'green' | 'red' | 'yellow'

export type ConfigRow = {
  key: string
  tone: PillTone
}

export const configRows: ConfigRow[] = [
  { key: 'refreshCadence', tone: 'blue' },
  { key: 'validationThreshold', tone: 'green' },
  { key: 'criticalEscalation', tone: 'red' },
  { key: 'dataFreshness', tone: 'yellow' },
]

export const administrationCopy = {
  en: {
    title: 'Administration',
    subtitle: 'Manage access, data integrations, notifications, and system configuration.',

    usersTitle: 'Users & Roles',
    usersSubtitle: 'Access management',
    usersBody:
      'Manage permissions for executives, sales managers, operations managers, maintenance teams, and field users.',
    manageUsers: 'Manage Users',

    integrationsTitle: 'Data Integrations',
    integrationsSubtitle: 'Connected systems',
    integrationsBody: 'ERP, GPS, Fleet Telemetry, and Maintenance System data connections.',
    integrationsHealthy: 'Healthy',
    erpConnected: 'ERP Connected',
    gpsConnected: 'GPS Connected',
    maintenanceDelayed: 'Maintenance Delayed',
    openDataHealth: 'Open Data Health',

    notificationsTitle: 'Notifications',
    notificationsSubtitle: 'Alert configuration',
    notificationsBody: 'Configure in-app alerts, email alerts, and critical notifications.',
    inAppAlerts: 'In-app alerts',
    emailAlerts: 'Email alerts',
    critical: 'Critical',
    notificationSettings: 'Notification Settings',

    configTitle: 'System Configuration',
    configSubtitle: 'Operational controls and governance settings',

    refreshCadence: 'Prediction refresh cadence',
    refreshCadenceValue: 'Every 6 hours',
    validationThreshold: 'Model validation threshold',
    validationThresholdValue: '85% minimum accuracy',
    criticalEscalation: 'Critical alert escalation',
    criticalEscalationValue: 'Operations Manager + Maintenance Lead',
    dataFreshness: 'Data freshness SLA',
    dataFreshnessValue: 'Telemetry under 30 minutes',

    pillBlue: 'blue',
    pillGreen: 'green',
    pillRed: 'red',
    pillYellow: 'yellow',
  },
  id: {
    title: 'Administrasi',
    subtitle: 'Kelola akses, integrasi data, notifikasi, dan konfigurasi sistem.',

    usersTitle: 'Pengguna & Peran',
    usersSubtitle: 'Manajemen akses',
    usersBody:
      'Kelola izin untuk eksekutif, manajer penjualan, manajer operasi, tim pemeliharaan, dan pengguna lapangan.',
    manageUsers: 'Kelola Pengguna',

    integrationsTitle: 'Integrasi Data',
    integrationsSubtitle: 'Sistem terhubung',
    integrationsBody: 'Koneksi data ERP, GPS, Telemetri Armada, dan Sistem Pemeliharaan.',
    integrationsHealthy: 'Sehat',
    erpConnected: 'ERP Terhubung',
    gpsConnected: 'GPS Terhubung',
    maintenanceDelayed: 'Pemeliharaan Tertunda',
    openDataHealth: 'Buka Kesehatan Data',

    notificationsTitle: 'Notifikasi',
    notificationsSubtitle: 'Konfigurasi peringatan',
    notificationsBody: 'Atur peringatan dalam aplikasi, email, dan notifikasi kritis.',
    inAppAlerts: 'Peringatan dalam aplikasi',
    emailAlerts: 'Peringatan email',
    critical: 'Kritis',
    notificationSettings: 'Pengaturan Notifikasi',

    configTitle: 'Konfigurasi Sistem',
    configSubtitle: 'Kontrol operasional dan pengaturan tata kelola',

    refreshCadence: 'Jadwal pembaruan prediksi',
    refreshCadenceValue: 'Setiap 6 jam',
    validationThreshold: 'Ambang validasi model',
    validationThresholdValue: 'Akurasi minimum 85%',
    criticalEscalation: 'Eskalasi peringatan kritis',
    criticalEscalationValue: 'Manajer Operasi + Kepala Pemeliharaan',
    dataFreshness: 'SLA kesegaran data',
    dataFreshnessValue: 'Telemetri di bawah 30 menit',

    pillBlue: 'biru',
    pillGreen: 'hijau',
    pillRed: 'merah',
    pillYellow: 'kuning',
  },
} satisfies Record<Locale, Record<string, string>>
