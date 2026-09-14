import type { Locale } from './types'

export const revenueCopy = {
  en: {
    title: 'Revenue Prediction',
    subtitle: 'Forecast expected revenue and understand the business drivers behind it.',
    export: 'Export',
    allRegions: 'All Regions',
    periodLabel: 'Last 6 Months',
    predictedRevenue: 'Predicted Revenue',
    predictedRevenueValue: 'Rp 12.4 B',
    predictedRevenueDelta: '+8.4%',
    revenueTarget: 'Revenue Target',
    revenueTargetValue: 'Rp 13.2 B',
    revenueTargetSub: 'Target attainment 94%',
    predictionGap: 'Prediction Gap',
    predictionGapValue: 'Rp 800 M',
    predictionGapSub: 'Below target',
    confidence: 'Confidence',
    confidenceValue: '92%',
    confidenceSub: 'High confidence',
    forecastTitle: 'Revenue Forecast',
    forecastSub: 'Historical and predicted revenue',
    legendActual: 'Actual',
    legendPrediction: 'Prediction',
    driversTitle: 'Revenue Drivers',
    driversSub: 'Factors influencing prediction',
    driverSalesVolume: 'Sales Volume',
    driverHighDemand: 'High Demand Region',
    driverMaintenance: 'Maintenance Issues',
    driverDelays: 'Delivery Delays',
    whatIfTitle: 'What-if Simulation',
    whatIfSalesVolume: 'Sales Volume',
    whatIfTruckAvailability: 'Truck Availability',
    runSimulation: 'Run Simulation',
    aiRecommendationTitle: 'AI Recommendation',
    aiRecommendationText:
      'Increase distribution capacity in high-performing regions while reallocating underutilized trucks.',
    expectedImprovement: 'Expected revenue improvement: Rp 650M–Rp 900M',
    createActionPlan: 'Create Action Plan',
  },
  id: {
    title: 'Prediksi Pendapatan',
    subtitle: 'Forecast pendapatan yang diharapkan dan pahami faktor pendorong di baliknya.',
    export: 'Ekspor',
    allRegions: 'Semua Wilayah',
    periodLabel: '6 Bulan Terakhir',
    predictedRevenue: 'Prediksi Pendapatan',
    predictedRevenueValue: 'Rp 12,4 M',
    predictedRevenueDelta: '+8,4%',
    revenueTarget: 'Target Pendapatan',
    revenueTargetValue: 'Rp 13,2 M',
    revenueTargetSub: 'Pencapaian target 94%',
    predictionGap: 'Selisih Prediksi',
    predictionGapValue: 'Rp 800 Jt',
    predictionGapSub: 'Di bawah target',
    confidence: 'Keyakinan',
    confidenceValue: '92%',
    confidenceSub: 'Keyakinan tinggi',
    forecastTitle: 'Forecast Pendapatan',
    forecastSub: 'Pendapatan historis dan prediksi',
    legendActual: 'Aktual',
    legendPrediction: 'Prediksi',
    driversTitle: 'Faktor Pendorong Pendapatan',
    driversSub: 'Faktor yang memengaruhi prediksi',
    driverSalesVolume: 'Volume Penjualan',
    driverHighDemand: 'Wilayah Permintaan Tinggi',
    driverMaintenance: 'Masalah Pemeliharaan',
    driverDelays: 'Keterlambatan Pengiriman',
    whatIfTitle: 'Simulasi What-if',
    whatIfSalesVolume: 'Volume Penjualan',
    whatIfTruckAvailability: 'Ketersediaan Truk',
    runSimulation: 'Jalankan Simulasi',
    aiRecommendationTitle: 'Rekomendasi AI',
    aiRecommendationText:
      'Tingkatkan kapasitas distribusi di wilayah berkinerja tinggi sambil mengalokasikan ulang truk yang kurang termanfaatkan.',
    expectedImprovement: 'Perkiraan peningkatan pendapatan: Rp 650Jt–Rp 900Jt',
    createActionPlan: 'Buat Rencana Aksi',
  },
} as const satisfies Record<Locale, Record<string, string>>

export type RevenueDriver = {
  key: 'salesVolume' | 'highDemand' | 'maintenance' | 'delays'
  amount: string
  percent: number
  tone: 'positive' | 'negative'
}

export const revenueDrivers: RevenueDriver[] = [
  { key: 'salesVolume', amount: '+Rp 1.2B', percent: 85, tone: 'positive' },
  { key: 'highDemand', amount: '+Rp 650M', percent: 55, tone: 'positive' },
  { key: 'maintenance', amount: '-Rp 420M', percent: 35, tone: 'negative' },
  { key: 'delays', amount: '-Rp 250M', percent: 20, tone: 'negative' },
]

export const whatIfSliders = [
  { key: 'salesVolume' as const, value: '+10%', percent: 70 },
  { key: 'truckAvailability' as const, value: '+15%', percent: 80 },
]
