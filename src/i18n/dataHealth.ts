import type { Locale } from './types'

export type SourceStatus = 'healthy' | 'delayed'

export type DataSourceRow = {
  key: string
  status: SourceStatus
  minutesAgo: number
  percent: number
}

export const dataSourceRows: DataSourceRow[] = [
  { key: 'erpSales', status: 'healthy', minutesAgo: 2, percent: 95 },
  { key: 'gpsFleet', status: 'healthy', minutesAgo: 1, percent: 92 },
  { key: 'fleetTelemetry', status: 'healthy', minutesAgo: 4, percent: 90 },
  { key: 'maintenanceSystem', status: 'delayed', minutesAgo: 42, percent: 35 },
  { key: 'customerSalesforce', status: 'healthy', minutesAgo: 8, percent: 88 },
]

export type IssueTone = 'warning' | 'attention' | 'review'

export type DataIssueRow = {
  key: string
  tone: IssueTone
}

export const dataIssueRows: DataIssueRow[] = [
  { key: 'maintenanceFeedDelayed', tone: 'warning' },
  { key: 'missingTelemetry', tone: 'attention' },
  { key: 'staleSalesData', tone: 'review' },
]

export const dataHealthCopy = {
  en: {
    title: 'Data Health & Data Management',
    subtitle: 'Monitor source freshness, completeness, connection health, and prediction readiness.',

    connectedSourcesTitle: 'Connected data sources',
    erpSales: 'ERP / Sales',
    gpsFleet: 'GPS / Fleet',
    fleetTelemetry: 'Fleet Telemetry',
    maintenanceSystem: 'Maintenance System',
    customerSalesforce: 'Customer / Salesforce',
    healthy: 'Healthy',
    delayed: 'Delayed',
    minAgo: 'min ago',

    readinessTitle: 'Prediction readiness',
    readinessReady: 'Ready',
    refreshStatus: 'Refresh status',

    issuesTitle: 'Open data issues',
    maintenanceFeedDelayed: 'Maintenance feed delayed',
    missingTelemetry: '12 missing telemetry values',
    staleSalesData: 'One region has stale sales data',
    tagWarning: 'Warning',
    tagAttention: 'Attention',
    tagReview: 'Review',
    openWorkflow: 'Open data quality workflow',
  },
  id: {
    title: 'Kesehatan & Manajemen Data',
    subtitle: 'Pantau kesegaran sumber, kelengkapan, kesehatan koneksi, dan kesiapan prediksi.',

    connectedSourcesTitle: 'Sumber Data Terhubung',
    erpSales: 'ERP / Penjualan',
    gpsFleet: 'GPS / Armada',
    fleetTelemetry: 'Telemetri Armada',
    maintenanceSystem: 'Sistem Pemeliharaan',
    customerSalesforce: 'Pelanggan / Salesforce',
    healthy: 'Sehat',
    delayed: 'Tertunda',
    minAgo: 'menit lalu',

    readinessTitle: 'Kesiapan Prediksi',
    readinessReady: 'Siap',
    refreshStatus: 'Segarkan Status',

    issuesTitle: 'Masalah Data Terbuka',
    maintenanceFeedDelayed: 'Feed pemeliharaan tertunda',
    missingTelemetry: '12 nilai telemetri hilang',
    staleSalesData: 'Satu wilayah memiliki data penjualan usang',
    tagWarning: 'Peringatan',
    tagAttention: 'Perhatian',
    tagReview: 'Tinjau',
    openWorkflow: 'Buka Alur Kerja Kualitas Data',
  },
} satisfies Record<Locale, Record<string, string>>
