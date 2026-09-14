import type { Locale } from './types'

export const routeCopy = {
  en: {
    title: 'Route & Coverage Optimizer',
    subtitle: 'Optimize sales routes and protect valuable customer coverage.',
    optimizeRoute: 'Optimize Route',
    allSalesReps: 'All Sales Representatives',
    dateLabel: '20 August 2026',
    coverage: 'Coverage',
    coverageValue: '85%',
    coverageSub: '210 / 245 customers',
    currentDistance: 'Current Distance',
    currentDistanceValue: '125 km',
    currentDistanceSub: 'Per day',
    optimizedDistance: 'Optimized Distance',
    optimizedDistanceValue: '98 km',
    optimizedDistanceSub: '-27 km',
    timeSaving: 'Time Saving',
    timeSavingValue: '2.4 h',
    timeSavingSub: 'Estimated',
    mapTitle: 'Territory Map',
    mapSub: 'Customer coverage and optimized route',
    mapLabelSulawesi: 'Sulawesi',
    mapLabelUncovered: 'Uncovered',
    coverageOpportunityTitle: 'Coverage Opportunity',
    opportunityBadge: 'Opportunity',
    uncoveredCustomersValue: '35',
    uncoveredCustomersLabel: 'uncovered customers',
    estimatedOpportunityLabel: 'ESTIMATED OPPORTUNITY',
    estimatedOpportunityValue: 'Rp 450M / month',
    territoryLoadTitle: 'Territory Load',
    salesRepA: 'Sales Rep A',
    territoryLoadLabel: 'Territory Load',
    territoryLoadValue: '95%',
    customersLabel: 'Customers',
    customersValue: '52',
    dailyDistanceLabel: 'Daily Distance',
    dailyDistanceValue: '128 km',
    performanceLabel: 'Performance',
    performanceValue: 'High',
    rebalancingTitle: 'AI Territory Rebalancing',
    aiRecommendationBadge: 'AI Recommendation',
    rebalancingText: 'Move 8 customers from Sales Rep A to Sales Rep B.',
    rebalancingSub: 'This reduces route overload while improving territory balance and customer coverage.',
    expectedCoverage: 'Expected Coverage Improvement: +12%',
    applyRebalancing: 'Apply Rebalancing',

    monthLabel: 'Month',
    salesmanLabel: 'Salesman',
    scoreRoute: 'Score Route',
    devModeLabel: 'Developer mode',
    devModeHint: 'Show raw scoring data',
    swapTitle: 'Current vs Swapped Stops',
    tabOriginal: 'Original Route',
    tabOptimized: 'Optimized Route',
    tabSide: 'Side by side',
    legendKept: 'Kept',
    legendDropped: 'Dropped Non-buyers',
    legendAdded: 'Added Active Shops',
    legendOriginalPath: 'Original Path',
    legendOptimizedPath: 'Optimized Path',
    originalRouteTitle: 'Original Route',
    originalRouteStats: '45 stops · 77.6 km · 33 next-month orders',
    optimizedRouteTitle: 'Optimized Route',
    optimizedRouteStats: '40 stops · 65.9 km · 35 next-month orders',
    mapPlaceholderText: 'Map view — pending Leaflet + coordinates from backend',
    whySkipTitle: 'Why Skip The Red Shops',
    whySkipDesc:
      'Success is shops that bought divided by shops visited. The red shops already had 12+ visits and zero Bosowa orders in the last 12 months. Visiting them again spends the day on doors that have never opened.',
    donutOriginalLabel: 'Original Route',
    donutOptimizedLabel: 'Optimized',
    donutOriginalCaption: 'Original 45 · 73% hit',
    donutOptimizedCaption: 'Optimized 40 · 83% hit',
    legendBought: 'Bought this month',
    legendKeptNoSale: 'Kept, no sale this month',
    legendNeverBuyers: 'Never-buyers (12+ visits, 0 orders in 12 months)',
    stat1Value: '33 / 45 · 73%',
    stat1Caption: 'This month on the original route',
    stat2Value: '33 / 40 · 83%',
    stat2Caption: 'This month after dropping never-buyers',
    stat3Value: '28 / 37 · 76%',
    stat3Caption: 'Kept shops that bought in the last 12 months',

    rawDataTitle: 'Raw Stop Data',
    rawDataSub: 'Shop-level detail behind the summary above. Visible only in developer mode.',
    tableCurrentRoute: 'Current Route',
    tableOptimizedRoute: 'Optimized Route',
    tableDropped: 'Dropped',
    tableAdded: 'Added',
    colNo: '#',
    colShop: 'Shop',
    colKecamatan: 'Kecamatan',
    colStatus: 'Status',
    colVisits: 'Visits',
    colOrders: 'Orders 12M',
    colKm: 'Km',
    colScore: 'Score',
    colSoldNext: 'Sold Next',
    tableTruncatedNote: 'Showing a sample of rows — connect to the backend endpoint for the full list.',
  },
  id: {
    title: 'Route & Coverage Optimizer',
    subtitle: 'Optimalkan rute penjualan dan lindungi cakupan pelanggan bernilai tinggi.',
    optimizeRoute: 'Optimalkan Rute',
    allSalesReps: 'Semua Sales Representative',
    dateLabel: '20 Agustus 2026',
    coverage: 'Cakupan',
    coverageValue: '85%',
    coverageSub: '210 / 245 pelanggan',
    currentDistance: 'Jarak Saat Ini',
    currentDistanceValue: '125 km',
    currentDistanceSub: 'Per hari',
    optimizedDistance: 'Jarak Teroptimasi',
    optimizedDistanceValue: '98 km',
    optimizedDistanceSub: '-27 km',
    timeSaving: 'Penghematan Waktu',
    timeSavingValue: '2,4 j',
    timeSavingSub: 'Perkiraan',
    mapTitle: 'Peta Wilayah',
    mapSub: 'Cakupan pelanggan dan rute teroptimasi',
    mapLabelSulawesi: 'Sulawesi',
    mapLabelUncovered: 'Belum Tercakup',
    coverageOpportunityTitle: 'Peluang Cakupan',
    opportunityBadge: 'Peluang',
    uncoveredCustomersValue: '35',
    uncoveredCustomersLabel: 'pelanggan belum tercakup',
    estimatedOpportunityLabel: 'PERKIRAAN PELUANG',
    estimatedOpportunityValue: 'Rp 450Jt / bulan',
    territoryLoadTitle: 'Beban Wilayah',
    salesRepA: 'Sales Rep A',
    territoryLoadLabel: 'Beban Wilayah',
    territoryLoadValue: '95%',
    customersLabel: 'Pelanggan',
    customersValue: '52',
    dailyDistanceLabel: 'Jarak Harian',
    dailyDistanceValue: '128 km',
    performanceLabel: 'Performa',
    performanceValue: 'Tinggi',
    rebalancingTitle: 'AI Territory Rebalancing',
    aiRecommendationBadge: 'Rekomendasi AI',
    rebalancingText: 'Pindahkan 8 pelanggan dari Sales Rep A ke Sales Rep B.',
    rebalancingSub: 'Ini mengurangi kelebihan beban rute sekaligus meningkatkan keseimbangan wilayah dan cakupan pelanggan.',
    expectedCoverage: 'Perkiraan Peningkatan Cakupan: +12%',
    applyRebalancing: 'Terapkan Rebalancing',

    monthLabel: 'Bulan',
    salesmanLabel: 'Salesman',
    scoreRoute: 'Skor Rute',
    devModeLabel: 'Mode pengembang',
    devModeHint: 'Tampilkan data skor mentah',
    swapTitle: 'Perbandingan Rute Saat Ini vs Hasil Swap',
    tabOriginal: 'Rute Awal',
    tabOptimized: 'Rute Teroptimasi',
    tabSide: 'Berdampingan',
    legendKept: 'Dipertahankan',
    legendDropped: 'Non-Pembeli Dihapus',
    legendAdded: 'Toko Aktif Ditambahkan',
    legendOriginalPath: 'Jalur Awal',
    legendOptimizedPath: 'Jalur Teroptimasi',
    originalRouteTitle: 'Rute Awal',
    originalRouteStats: '45 titik · 77,6 km · 33 order bulan depan',
    optimizedRouteTitle: 'Rute Teroptimasi',
    optimizedRouteStats: '40 titik · 65,9 km · 35 order bulan depan',
    mapPlaceholderText: 'Tampilan peta — menunggu integrasi Leaflet + koordinat dari backend',
    whySkipTitle: 'Alasan Toko Merah Dilewati',
    whySkipDesc:
      'Keberhasilan dihitung dari jumlah toko yang membeli dibagi jumlah toko yang dikunjungi. Toko merah sudah dikunjungi 12+ kali tanpa order Bosowa selama 12 bulan terakhir. Mengunjunginya lagi hanya menghabiskan hari untuk pintu yang tidak pernah terbuka.',
    donutOriginalLabel: 'Rute Awal',
    donutOptimizedLabel: 'Teroptimasi',
    donutOriginalCaption: 'Awal 45 · 73% hit',
    donutOptimizedCaption: 'Teroptimasi 40 · 83% hit',
    legendBought: 'Beli bulan ini',
    legendKeptNoSale: 'Dipertahankan, belum beli bulan ini',
    legendNeverBuyers: 'Non-pembeli (12+ kunjungan, 0 order dalam 12 bulan)',
    stat1Value: '33 / 45 · 73%',
    stat1Caption: 'Bulan ini pada rute awal',
    stat2Value: '33 / 40 · 83%',
    stat2Caption: 'Bulan ini setelah menghapus non-pembeli',
    stat3Value: '28 / 37 · 76%',
    stat3Caption: 'Toko yang dipertahankan dan membeli dalam 12 bulan terakhir',

    rawDataTitle: 'Data Mentah Titik Kunjungan',
    rawDataSub: 'Detail per toko di balik ringkasan di atas. Hanya terlihat pada mode pengembang.',
    tableCurrentRoute: 'Rute Saat Ini',
    tableOptimizedRoute: 'Rute Teroptimasi',
    tableDropped: 'Dihapus',
    tableAdded: 'Ditambahkan',
    colNo: '#',
    colShop: 'Toko',
    colKecamatan: 'Kecamatan',
    colStatus: 'Status',
    colVisits: 'Kunjungan',
    colOrders: 'Order 12B',
    colKm: 'Km',
    colScore: 'Skor',
    colSoldNext: 'Terjual Berikutnya',
    tableTruncatedNote: 'Menampilkan sampel baris — hubungkan ke endpoint backend untuk daftar lengkap.',
  },
} as const satisfies Record<Locale, Record<string, string>>

export type RouteStopRow = {
  shop: string
  kecamatan: string
  status: string
  visits: number
  orders12m: number
  km: number
  score: number
  soldNext: number
  // DUMMY data — ganti dengan lat/lng asli dari backend saat endpoint sudah tersedia.
  lat: number
  lng: number
}

// Titik tengah kira-kira tiap kecamatan di Kab. Polewali Mandar, Sulawesi Barat.
// Sengaja disederhanakan untuk kebutuhan prototype — bukan sumber koordinat resmi.
const kecamatanCenter: Record<string, { lat: number; lng: number }> = {
  POLEWALI: { lat: -3.3853, lng: 119.3428 },
  LUYO: { lat: -3.4453, lng: 119.2483 },
  CAMPALAGIAN: { lat: -3.4693, lng: 119.2136 },
  BINUANG: { lat: -3.5108, lng: 119.4256 },
  TAPANGO: { lat: -3.3208, lng: 119.4056 },
  WONOMULYO: { lat: -3.4419, lng: 119.2903 },
  TINAMBUNG: { lat: -3.4936, lng: 119.1583 },
  MATAKALI: { lat: -3.3583, lng: 119.3814 },
}

// Offset acak kecil (deterministik per shop id) supaya pin tidak numpuk di satu titik.
function jitteredCoords(shop: string, kecamatan: string) {
  const center = kecamatanCenter[kecamatan] ?? kecamatanCenter.POLEWALI
  let hash = 0
  for (let i = 0; i < shop.length; i++) hash = (hash * 31 + shop.charCodeAt(i)) % 10000
  const jitterLat = ((hash % 100) / 100 - 0.5) * 0.03
  const jitterLng = (((hash * 7) % 100) / 100 - 0.5) * 0.03
  return { lat: center.lat + jitterLat, lng: center.lng + jitterLng }
}

function withCoords(rows: Omit<RouteStopRow, 'lat' | 'lng'>[]): RouteStopRow[] {
  return rows.map((row) => ({ ...row, ...jitteredCoords(row.shop, row.kecamatan) }))
}

export const currentRouteRows: RouteStopRow[] = withCoords([
  { shop: '76020028', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020061', kecamatan: 'POLEWALI', status: 'Aktif', visits: 0, orders12m: 0, km: 0.0, score: 0.14, soldNext: 0 },
  { shop: '76020051', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 3, orders12m: 3, km: 0.0, score: 0.26, soldNext: 1 },
  { shop: '76020048', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 6, orders12m: 6, km: 0.0, score: 0.34, soldNext: 1 },
  { shop: '76020037', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020004', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020011', kecamatan: 'LUYO', status: 'Tutup Sementara', visits: 20, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020021', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020047', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 17, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020013', kecamatan: 'POLEWALI', status: 'Aktif', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020026', kecamatan: 'CAMPALAGIAN', status: 'Aktif', visits: 19, orders12m: 11, km: 0.0, score: 0.41, soldNext: 1 },
])

export const optimizedRouteRows: RouteStopRow[] = withCoords([
  { shop: '76020018', kecamatan: 'BINUANG', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020030', kecamatan: 'BINUANG', status: 'Aktif', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020040', kecamatan: 'BINUANG', status: 'Aktif', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020028', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020061', kecamatan: 'POLEWALI', status: 'Aktif', visits: 0, orders12m: 0, km: 0.0, score: 0.14, soldNext: 0 },
  { shop: '76020051', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 3, orders12m: 3, km: 0.0, score: 0.26, soldNext: 1 },
  { shop: '76020048', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 6, orders12m: 6, km: 0.0, score: 0.34, soldNext: 1 },
  { shop: '76020037', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020004', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
  { shop: '76020021', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 20, orders12m: 12, km: 0.0, score: 0.42, soldNext: 1 },
])

export const droppedRouteRows: RouteStopRow[] = withCoords([
  { shop: '76020011', kecamatan: 'LUYO', status: 'Tutup Sementara', visits: 20, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020047', kecamatan: 'POLEWALI', status: 'Tutup Sementara', visits: 17, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020020', kecamatan: 'POLEWALI', status: 'Tutup Permanen', visits: 20, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020038', kecamatan: 'TAPANGO', status: 'Alih Fungsi', visits: 20, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020010', kecamatan: 'WONOMULYO', status: 'Alih Fungsi', visits: 20, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020019', kecamatan: 'WONOMULYO', status: 'Tidak Jual Semen', visits: 19, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020015', kecamatan: 'LUYO', status: 'Aktif', visits: 20, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
  { shop: '76020033', kecamatan: 'TINAMBUNG', status: 'Tutup Sementara', visits: 20, orders12m: 0, km: 0.0, score: -0.43, soldNext: 0 },
])

export const addedRouteRows: RouteStopRow[] = withCoords([
  { shop: '76020063', kecamatan: 'POLEWALI', status: 'Aktif', visits: 0, orders12m: 0, km: 0.0, score: 0.14, soldNext: 1 },
  { shop: '76020062', kecamatan: 'POLEWALI', status: 'Aktif', visits: 0, orders12m: 0, km: 0.2, score: 0.14, soldNext: 1 },
  { shop: '76020064', kecamatan: 'MATAKALI', status: 'Aktif', visits: 0, orders12m: 0, km: 1.0, score: 0.14, soldNext: 0 },
])

export const territoryMapPoints = [
  { x: 260, y: 130, tone: 'warning' as const },
  { x: 320, y: 175, tone: 'healthy' as const },
  { x: 235, y: 205, tone: 'healthy' as const },
  { x: 355, y: 190, tone: 'neutral' as const },
  { x: 270, y: 235, tone: 'critical' as const },
  { x: 345, y: 260, tone: 'critical' as const },
]

export const routeLines = [
  { points: '235,205 355,90' },
  { points: '75,300 355,235' },
]
