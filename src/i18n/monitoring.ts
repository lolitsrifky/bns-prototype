import type { Locale } from './types'

export type ModelStatus = 'healthy' | 'investigate' | 'drift'
export type DriftLevel = 'low' | 'medium' | 'high'

export type ModelRegistryRow = {
  key: string
  performance: number
  drift: DriftLevel
  lastRetrain: string
  version: string
  status: ModelStatus
}

export const modelRegistryRows: ModelRegistryRow[] = [
  {
    key: 'revenuePrediction',
    performance: 91.8,
    drift: 'low',
    lastRetrain: '10 Aug 2026',
    version: 'rev-v2.5',
    status: 'healthy',
  },
  {
    key: 'regionalSales',
    performance: 89.6,
    drift: 'low',
    lastRetrain: '08 Aug 2026',
    version: 'sales-v3.2',
    status: 'healthy',
  },
  {
    key: 'predictiveMaintenance',
    performance: 84.2,
    drift: 'medium',
    lastRetrain: '05 Aug 2026',
    version: 'maint-v3.4',
    status: 'investigate',
  },
  {
    key: 'routeOptimizer',
    performance: 96.1,
    drift: 'low',
    lastRetrain: '12 Aug 2026',
    version: 'route-v1.8',
    status: 'healthy',
  },
]

export const lifecycleSteps = [
  'stepData',
  'stepTraining',
  'stepValidation',
  'stepDeployment',
  'stepPrediction',
  'stepMonitoring',
  'stepRetraining',
] as const

export const monitoringCopy = {
  en: {
    title: 'Model Monitoring',
    subtitle: 'Monitor prediction quality, drift, data health, and model versions.',
    runValidation: 'Run Validation',

    revenueModel: 'Revenue Model',
    regionalSalesModel: 'Regional Sales',
    maintenanceModel: 'Maintenance',
    routeOptimizerModel: 'Route Optimizer',

    healthy: 'Healthy',
    investigate: 'Investigate',
    driftDetected: 'Drift detected',

    driftLow: 'Low',
    driftMedium: 'Medium',
    driftHigh: 'High',

    registryTitle: 'Model Registry',
    registrySub: 'Model health and deployment status',
    colModel: 'Model',
    colPerformance: 'Performance',
    colDataDrift: 'Data Drift',
    colLastRetrain: 'Last Retrain',
    colVersion: 'Version',
    colStatus: 'Status',

    revenuePrediction: 'Revenue Prediction',
    regionalSales: 'Regional Sales',
    predictiveMaintenance: 'Predictive Maintenance',
    routeOptimizer: 'Route Optimizer',

    lifecycleTitle: 'AI Model Lifecycle',
    lifecycleSub: 'Continuous monitoring and improvement',
    stepData: 'Data',
    stepTraining: 'Training',
    stepValidation: 'Validation',
    stepDeployment: 'Deployment',
    stepPrediction: 'Prediction',
    stepMonitoring: 'Monitoring',
    stepRetraining: 'Retraining',
  },
  id: {
    title: 'Pemantauan Model',
    subtitle: 'Pantau kualitas prediksi, drift, kesehatan data, dan versi model.',
    runValidation: 'Jalankan Validasi',

    revenueModel: 'Model Pendapatan',
    regionalSalesModel: 'Penjualan Regional',
    maintenanceModel: 'Pemeliharaan',
    routeOptimizerModel: 'Optimasi Rute',

    healthy: 'Sehat',
    investigate: 'Perlu Ditinjau',
    driftDetected: 'Drift terdeteksi',

    driftLow: 'Rendah',
    driftMedium: 'Sedang',
    driftHigh: 'Tinggi',

    registryTitle: 'Registri Model',
    registrySub: 'Status kesehatan dan penerapan model',
    colModel: 'Model',
    colPerformance: 'Performa',
    colDataDrift: 'Drift Data',
    colLastRetrain: 'Pelatihan Ulang Terakhir',
    colVersion: 'Versi',
    colStatus: 'Status',

    revenuePrediction: 'Prediksi Pendapatan',
    regionalSales: 'Penjualan Regional',
    predictiveMaintenance: 'Pemeliharaan Prediktif',
    routeOptimizer: 'Optimasi Rute',

    lifecycleTitle: 'Siklus Hidup Model AI',
    lifecycleSub: 'Pemantauan dan peningkatan berkelanjutan',
    stepData: 'Data',
    stepTraining: 'Pelatihan',
    stepValidation: 'Validasi',
    stepDeployment: 'Penerapan',
    stepPrediction: 'Prediksi',
    stepMonitoring: 'Pemantauan',
    stepRetraining: 'Pelatihan Ulang',
  },
} satisfies Record<Locale, Record<string, string>>
