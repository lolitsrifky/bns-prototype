import { useState } from 'react'
import {
  routeCopy,
  currentRouteRows,
  optimizedRouteRows,
  droppedRouteRows,
  addedRouteRows,
  type RouteStopRow,
} from '../../i18n/route'
import { useLocale } from '../../context/LocaleContext'
import MapView, { type MapStop } from './MapView'
import styles from './RouteCoverage.module.css'

type RouteTab = 'original' | 'optimized' | 'side'

type DonutSegment = { value: number; color: string }

const routePresets = ['SF081 · Mar 2025', 'SF104 · Jun 2026', 'SF104 · Jul 2025']

const devChips = [
  'SF081',
  '2025-03-01',
  'KABUPATEN POLEWALI MANDAR',
  '45 → 40 Stops',
  'Drop 8 · Add 3',
  'Hit 33/45 → 33/40 This Month',
  'Order 33 → 35',
  'Mean Score 0.19 → 0.31',
  'Path 77.6 → 65.9 Km',
]

const originalDonut: DonutSegment[] = [
  { value: 33, color: '#10b981' }, // bought this month
  { value: 4, color: '#f59e0b' }, // kept, no sale
  { value: 8, color: '#ef4444' }, // never-buyers, dropped
]

const optimizedDonut: DonutSegment[] = [
  { value: 33, color: '#10b981' }, // bought this month
  { value: 7, color: '#f59e0b' }, // kept, no sale
]

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={`${styles.toggle} ${checked ? styles.toggleOn : ''}`}
      onClick={onChange}
    >
      <span className={styles.toggleKnob} />
    </button>
  )
}

function DonutChart({ segments, size = 168 }: { segments: DonutSegment[]; size?: number }) {
  const total = segments.reduce((sum, seg) => sum + seg.value, 0)
  const strokeWidth = 24
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  let offsetAcc = 0

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} role="img" aria-label="Route hit rate donut chart">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#f1f5f9" strokeWidth={strokeWidth} />
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {segments.map((seg, index) => {
          const fraction = total ? seg.value / total : 0
          const dash = fraction * circumference
          const gap = circumference - dash
          const circle = (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offsetAcc}
              strokeLinecap="butt"
            />
          )
          offsetAcc += dash
          return circle
        })}
      </g>
    </svg>
  )
}

type RouteTableColumns = {
  no: string
  shop: string
  kecamatan: string
  status: string
  visits: string
  orders: string
  km: string
  score: string
  soldNext: string
}

function RouteTable({
  title,
  rows,
  columns,
}: {
  title: string
  rows: RouteStopRow[]
  columns: RouteTableColumns
}) {
  return (
    <div className={styles.tableCard}>
      <div className={styles.tableCardHeader}>
        <h3 className={styles.tableCardTitle}>{title}</h3>
        <span className={styles.tableCardCount}>{rows.length}</span>
      </div>
      <div className={styles.tableScroll}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>{columns.no}</th>
              <th>{columns.shop}</th>
              <th>{columns.kecamatan}</th>
              <th>{columns.status}</th>
              <th>{columns.visits}</th>
              <th>{columns.orders}</th>
              <th>{columns.km}</th>
              <th>{columns.score}</th>
              <th>{columns.soldNext}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.shop}-${index}`}>
                <td>{index + 1}</td>
                <td>{row.shop}</td>
                <td>{row.kecamatan}</td>
                <td>{row.status}</td>
                <td>{row.visits}</td>
                <td>{row.orders12m}</td>
                <td>{row.km.toFixed(1)}</td>
                <td className={row.score >= 0 ? styles.scorePositive : styles.scoreNegative}>{row.score.toFixed(2)}</td>
                <td>{row.soldNext}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function RouteCoverage() {
  const { locale } = useLocale()
  const t = routeCopy[locale]

  const [tab, setTab] = useState<RouteTab>('side')
  const [devMode, setDevMode] = useState(false)

  const showOriginal = tab !== 'optimized'
  const showOptimized = tab !== 'original'

  const droppedShopIds = new Set(droppedRouteRows.map((row) => row.shop))
  const addedShopIds = new Set(addedRouteRows.map((row) => row.shop))

  const originalStops: MapStop[] = currentRouteRows.map((row) => ({
    ...row,
    tone: droppedShopIds.has(row.shop) ? 'dropped' : 'kept',
  }))

  const optimizedStops: MapStop[] = optimizedRouteRows.map((row) => ({
    ...row,
    tone: addedShopIds.has(row.shop) ? 'added' : 'kept',
  }))

  const legendItems = [
    { key: 'kept', label: t.legendKept, swatch: <span className={`${styles.legendDot} ${styles.dotGreen}`} /> },
    { key: 'dropped', label: t.legendDropped, swatch: <span className={`${styles.legendDot} ${styles.dotRed}`} /> },
    { key: 'added', label: t.legendAdded, swatch: <span className={`${styles.legendDot} ${styles.dotBlue}`} /> },
    { key: 'originalPath', label: t.legendOriginalPath, swatch: <span className={`${styles.legendLine} ${styles.lineDashed}`} /> },
    { key: 'optimizedPath', label: t.legendOptimizedPath, swatch: <span className={`${styles.legendLine} ${styles.lineSolid}`} /> },
  ]

  const tableColumns: RouteTableColumns = {
    no: t.colNo,
    shop: t.colShop,
    kecamatan: t.colKecamatan,
    status: t.colStatus,
    visits: t.colVisits,
    orders: t.colOrders,
    km: t.colKm,
    score: t.colScore,
    soldNext: t.colSoldNext,
  }

  const donutLegendItems = [
    { key: 'bought', label: t.legendBought, tone: styles.dotGreen },
    { key: 'keptNoSale', label: t.legendKeptNoSale, tone: styles.dotOrange },
    { key: 'neverBuyers', label: t.legendNeverBuyers, tone: styles.dotRed },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
      </div>

      <section className={styles.filterBar}>
        <div className={styles.filterField}>
          <label className={styles.filterLabel}>{t.monthLabel}</label>
          <select className={styles.filterSelect} defaultValue="2025-03">
            <option value="2025-03">2025-03-01</option>
          </select>
        </div>
        <div className={styles.filterField}>
          <label className={styles.filterLabel}>{t.salesmanLabel}</label>
          <select className={styles.filterSelect} defaultValue="SF081">
            <option value="SF081">SF081</option>
          </select>
        </div>
        <button type="button" className={styles.scoreRouteBtn}>
          <span className={styles.scoreIcon} aria-hidden>
            ◎
          </span>
          {t.scoreRoute}
        </button>
        <div className={styles.presetChips}>
          {routePresets.map((preset) => (
            <button key={preset} type="button" className={styles.presetChip}>
              {preset}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.devModeRow}>
        <Toggle checked={devMode} onChange={() => setDevMode((value) => !value)} label={t.devModeLabel} />
        <div className={styles.devModeText}>
          <span className={styles.devModeLabel}>{t.devModeLabel}</span>
          <span className={styles.devModeHint}>{t.devModeHint}</span>
        </div>
        {devMode && (
          <div className={styles.devChips}>
            {devChips.map((chip) => (
              <span key={chip} className={styles.devChip}>
                {chip}
              </span>
            ))}
          </div>
        )}
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeaderRow}>
          <h2 className={styles.panelTitle}>{t.swapTitle}</h2>
        </div>

        <div className={styles.tabRow} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'original'}
            className={`${styles.tabBtn} ${tab === 'original' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('original')}
          >
            {t.tabOriginal}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'optimized'}
            className={`${styles.tabBtn} ${tab === 'optimized' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('optimized')}
          >
            {t.tabOptimized}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'side'}
            className={`${styles.tabBtn} ${tab === 'side' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('side')}
          >
            {t.tabSide}
          </button>
        </div>

        <div className={styles.legendRow}>
          {legendItems.map((item) => (
            <span key={item.key} className={styles.legendItem}>
              {item.swatch}
              {item.label}
            </span>
          ))}
        </div>

        <div className={styles.mapsGrid} data-mode={tab}>
          {showOriginal && (
            <div className={styles.mapCol}>
              <h3 className={styles.mapColTitle}>{t.originalRouteTitle}</h3>
              <p className={styles.mapColStats}>{t.originalRouteStats}</p>
              <MapView stops={originalStops} pathStyle="dashed" emptyLabel={t.mapPlaceholderText} />
            </div>
          )}
          {showOptimized && (
            <div className={styles.mapCol}>
              <h3 className={styles.mapColTitle}>{t.optimizedRouteTitle}</h3>
              <p className={styles.mapColStats}>{t.optimizedRouteStats}</p>
              <MapView stops={optimizedStops} pathStyle="solid" emptyLabel={t.mapPlaceholderText} />
            </div>
          )}
        </div>

        {devMode && (
          <p className={styles.devModeFootnote}>{t.devModeHint} — {t.mapPlaceholderText}</p>
        )}
      </section>

      <section className={styles.panel}>
        <h2 className={styles.panelTitle}>{t.whySkipTitle}</h2>
        <p className={styles.whySkipDesc}>{t.whySkipDesc}</p>

        <div className={styles.donutGrid}>
          <div className={styles.donutCol}>
            <h3 className={styles.donutColTitle}>{t.donutOriginalLabel}</h3>
            <DonutChart segments={originalDonut} />
            <p className={styles.donutCaption}>{t.donutOriginalCaption}</p>
          </div>

          <div className={styles.donutCol}>
            <h3 className={styles.donutColTitle}>{t.donutOptimizedLabel}</h3>
            <DonutChart segments={optimizedDonut} />
            <p className={styles.donutCaption}>{t.donutOptimizedCaption}</p>
          </div>

          <div className={styles.statCol}>
            <div className={styles.statCard}>
              <p className={styles.statBig}>{t.stat1Value}</p>
              <p className={styles.statCaption}>{t.stat1Caption}</p>
            </div>
            <div className={`${styles.statCard} ${styles.statCardHighlight}`}>
              <p className={styles.statBig}>{t.stat2Value}</p>
              <p className={styles.statCaption}>{t.stat2Caption}</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statBig}>{t.stat3Value}</p>
              <p className={styles.statCaption}>{t.stat3Caption}</p>
            </div>

            <div className={styles.donutLegend}>
              {donutLegendItems.map((item) => (
                <span key={item.key} className={styles.legendItem}>
                  <span className={`${styles.legendDot} ${item.tone}`} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {devMode && (
        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>{t.rawDataTitle}</h2>
            <p className={styles.panelSub}>{t.rawDataSub}</p>
          </div>

          <div className={styles.tableGrid}>
            <RouteTable
              title={`${t.tableCurrentRoute} (45)`}
              rows={currentRouteRows}
              columns={tableColumns}
            />
            <RouteTable
              title={`${t.tableOptimizedRoute} (40)`}
              rows={optimizedRouteRows}
              columns={tableColumns}
            />
          </div>

          <div className={styles.tableGrid}>
            <RouteTable title={`${t.tableDropped} (8)`} rows={droppedRouteRows} columns={tableColumns} />
            <RouteTable title={`${t.tableAdded} (3)`} rows={addedRouteRows} columns={tableColumns} />
          </div>

          <p className={styles.devModeFootnote}>{t.tableTruncatedNote}</p>
        </section>
      )}
    </div>
  )
}
