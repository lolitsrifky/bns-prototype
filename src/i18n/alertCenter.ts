import type { Locale } from './types'

export type AlertSeverity = 'critical' | 'warning' | 'opportunity'

export type AlertItem = {
  key: string
  severity: AlertSeverity
}

export const alertItems: AlertItem[] = [
  { key: 'engineFailure', severity: 'critical' },
  { key: 'regionForecast', severity: 'warning' },
  { key: 'coverageOpportunity', severity: 'opportunity' },
  { key: 'dataFeedDelay', severity: 'warning' },
]

export const alertCenterCopy = {
  en: {
    title: 'Alert Center',
    subtitle: 'Review operational risks, opportunities, ownership, and resolution status in one place.',

    filterOpportunity: 'Opportunity',
    filterWarning: 'Warning',
    filterCritical: 'Critical',
    filterAll: 'All',

    activeAlertsTitle: 'Active alerts',
    selectedAlertTitle: 'Selected alert',

    badgeCritical: 'Critical',
    badgeWarning: 'Warning',
    badgeOpportunity: 'Opportunity',

    reviewBtn: 'Review',
    takeAction: 'Take action',
    assignOwner: 'Assign owner',
    dismiss: 'Dismiss',

    alertEngineFailureList: 'BNS-021 · Failure probability 72%',
    alertEngineFailureSource: 'Predictive Maintenance',
    alertEngineFailureDesc: 'Review within 48 hours',
    alertEngineFailureDetailTitle: 'Truck BNS-021',
    alertEngineFailureDetailDesc: 'Engine temperature trend +18% and reduced fuel efficiency',
    alertEngineFailureRecommendation: 'Schedule inspection within 48 hours.',

    alertRegionForecastList: 'South region sales forecast down 12%',
    alertRegionForecastSource: 'Regional Sales',
    alertRegionForecastDesc: 'Review territory and truck allocation',
    alertRegionForecastDetailTitle: 'South Region Sales Forecast',
    alertRegionForecastDetailDesc:
      'Predicted volume is down 12% versus last month, driven by fewer repeat orders from three key accounts.',
    alertRegionForecastRecommendation: 'Reassign coverage and confirm pricing with top accounts this week.',

    alertCoverageOpportunityList: '12 high-potential customers uncovered',
    alertCoverageOpportunitySource: 'Route & Coverage',
    alertCoverageOpportunityDesc: 'Optimize field coverage',
    alertCoverageOpportunityDetailTitle: 'Uncovered High-Potential Customers',
    alertCoverageOpportunityDetailDesc:
      '12 customers with strong order history fall outside current route coverage, an estimated Rp 450M monthly opportunity.',
    alertCoverageOpportunityRecommendation: 'Add these accounts to the next route optimization cycle.',

    alertDataFeedDelayList: 'Maintenance data feed delayed',
    alertDataFeedDelaySource: 'Data Health',
    alertDataFeedDelayDesc: 'Last successful sync 42 minutes ago',
    alertDataFeedDelayDetailTitle: 'Maintenance Data Feed',
    alertDataFeedDelayDetailDesc:
      'Telemetry sync from the Maintenance System has slowed, delaying failure-probability updates for the fleet.',
    alertDataFeedDelayRecommendation: 'Check the Maintenance System connector in Data Integrations.',
  },
  id: {
    title: 'Pusat Peringatan',
    subtitle: 'Tinjau risiko operasional, peluang, kepemilikan, dan status penyelesaian dalam satu tempat.',

    filterOpportunity: 'Peluang',
    filterWarning: 'Peringatan',
    filterCritical: 'Kritis',
    filterAll: 'Semua',

    activeAlertsTitle: 'Peringatan Aktif',
    selectedAlertTitle: 'Peringatan Terpilih',

    badgeCritical: 'Kritis',
    badgeWarning: 'Peringatan',
    badgeOpportunity: 'Peluang',

    reviewBtn: 'Tinjau',
    takeAction: 'Ambil Tindakan',
    assignOwner: 'Tetapkan Pemilik',
    dismiss: 'Abaikan',

    alertEngineFailureList: 'BNS-021 · Probabilitas kegagalan 72%',
    alertEngineFailureSource: 'Pemeliharaan Prediktif',
    alertEngineFailureDesc: 'Tinjau dalam 48 jam',
    alertEngineFailureDetailTitle: 'Truk BNS-021',
    alertEngineFailureDetailDesc: 'Tren suhu mesin +18% dan efisiensi bahan bakar menurun',
    alertEngineFailureRecommendation: 'Jadwalkan inspeksi dalam 48 jam.',

    alertRegionForecastList: 'Prediksi penjualan region Selatan turun 12%',
    alertRegionForecastSource: 'Penjualan Regional',
    alertRegionForecastDesc: 'Tinjau wilayah dan alokasi truk',
    alertRegionForecastDetailTitle: 'Prediksi Penjualan Region Selatan',
    alertRegionForecastDetailDesc:
      'Volume prediksi turun 12% dibanding bulan lalu, dipicu berkurangnya pesanan berulang dari tiga akun utama.',
    alertRegionForecastRecommendation: 'Alihkan cakupan dan konfirmasi harga dengan akun utama minggu ini.',

    alertCoverageOpportunityList: '12 pelanggan berpotensi tinggi belum tercakup',
    alertCoverageOpportunitySource: 'Rute & Cakupan',
    alertCoverageOpportunityDesc: 'Optimalkan cakupan lapangan',
    alertCoverageOpportunityDetailTitle: 'Pelanggan Berpotensi Tinggi yang Belum Tercakup',
    alertCoverageOpportunityDetailDesc:
      '12 pelanggan dengan riwayat pesanan kuat berada di luar cakupan rute saat ini, estimasi peluang Rp 450 Jt per bulan.',
    alertCoverageOpportunityRecommendation: 'Tambahkan akun ini ke siklus optimasi rute berikutnya.',

    alertDataFeedDelayList: 'Feed data pemeliharaan tertunda',
    alertDataFeedDelaySource: 'Kesehatan Data',
    alertDataFeedDelayDesc: 'Sinkronisasi terakhir berhasil 42 menit lalu',
    alertDataFeedDelayDetailTitle: 'Feed Data Pemeliharaan',
    alertDataFeedDelayDetailDesc:
      'Sinkronisasi telemetri dari Sistem Pemeliharaan melambat, menunda pembaruan probabilitas kegagalan armada.',
    alertDataFeedDelayRecommendation: 'Periksa konektor Sistem Pemeliharaan di Integrasi Data.',
  },
} satisfies Record<Locale, Record<string, string>>
