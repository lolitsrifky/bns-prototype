import { dashboardCopy, regionalRows } from '../../i18n/dashboard'
import { useLocale } from '../../context/LocaleContext'
import styles from './Dashboard.module.css'

function formatTons(value: number, locale: string, tonsLabel: string) {
  const formatted = new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US').format(value)
  return `${formatted} ${tonsLabel}`
}

function formatChange(value: number, locale: string) {
  const sign = value > 0 ? '+' : ''
  const formatted = new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value)
  return `${sign}${formatted}%`
}

function KpiIcon({ kind }: { kind: 'revenue' | 'sales' | 'fleet' | 'route' }) {
  const paths = {
    revenue: 'M7 17 17 7M10 7h7v7',
    sales: 'M12 3a9 9 0 1 0 9 9h-9V3Z',
    fleet: 'M9 12l2 2 4-4m-7 9h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8l-4 4v8a2 2 0 0 0 2 2Z',
    route: 'M13 3v8h8M13 3a9 9 0 1 0 8 8',
  }

  return (
    <span className={styles.kpiIcon} aria-hidden>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d={paths[kind]}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

function RevenueChart({
  actualLabel,
  predictionLabel,
  targetLabel,
}: {
  actualLabel: string
  predictionLabel: string
  targetLabel: string
}) {
  const actual = [42, 48, 45, 58, 62, 70, 78]
  const prediction = [40, 46, 52, 56, 64, 72, 80]
  const target = [44, 50, 54, 60, 66, 74, 82]
  const width = 560
  const height = 240
  const pad = 24

  function toPoints(values: number[]) {
    const max = 90
    const min = 30
    return values
      .map((value, index) => {
        const x = pad + (index * (width - pad * 2)) / (values.length - 1)
        const y = height - pad - ((value - min) / (max - min)) * (height - pad * 2)
        return `${x},${y}`
      })
      .join(' ')
  }

  return (
    <div className={styles.chartWrap}>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.chart} role="img" aria-label="Revenue forecast chart">
        {[0, 1, 2, 3].map((i) => {
          const y = pad + i * ((height - pad * 2) / 3)
          return <line key={i} x1={pad} x2={width - pad} y1={y} y2={y} stroke="#e2e8f0" strokeWidth="1" />
        })}
        <polyline fill="none" stroke="#2563eb" strokeWidth="2.5" points={toPoints(actual)} />
        <polyline fill="none" stroke="#10b981" strokeWidth="2.5" points={toPoints(prediction)} />
        <polyline
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeDasharray="5 5"
          points={toPoints(target)}
        />
      </svg>
      <div className={styles.legend}>
        <span>
          <i className={styles.dotActual} /> {actualLabel}
        </span>
        <span>
          <i className={styles.dotPrediction} /> {predictionLabel}
        </span>
        <span>
          <i className={styles.dotTarget} /> {targetLabel}
        </span>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { locale } = useLocale()
  const t = dashboardCopy[locale]

  const kpis = [
    {
      label: t.predictedRevenue,
      value: t.revenueValue,
      delta: t.revenueDelta,
      tone: 'up' as const,
      kind: 'revenue' as const,
    },
    {
      label: t.salesForecast,
      value: t.salesValue,
      delta: t.salesDelta,
      tone: 'up' as const,
      kind: 'sales' as const,
    },
    {
      label: t.fleetHealth,
      value: t.fleetValue,
      delta: t.fleetDelta,
      tone: 'neutral' as const,
      kind: 'fleet' as const,
    },
    {
      label: t.routeEfficiency,
      value: t.routeValue,
      delta: t.routeDelta,
      tone: 'up' as const,
      kind: 'route' as const,
    },
  ]

  const attention = [
    {
      level: 'critical' as const,
      levelLabel: t.critical,
      text: t.attentionCritical,
      tag: t.tagFleet,
      action: t.reviewFleet,
    },
    {
      level: 'warning' as const,
      levelLabel: t.warning,
      text: t.attentionWarning,
      tag: t.tagSales,
      action: t.reviewRegion,
    },
    {
      level: 'opportunity' as const,
      levelLabel: t.opportunity,
      text: t.attentionOpportunity,
      tag: t.tagCoverage,
      action: t.optimize,
    },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.greeting}>{t.greeting}</h1>
          <p className={styles.meta}>{t.overviewMeta}</p>
        </div>
        <button type="button" className={styles.exportBtn}>
          {t.export}
        </button>
      </div>

      <section className={styles.kpiGrid}>
        {kpis.map((kpi) => (
          <article key={kpi.label} className={styles.kpiCard}>
            <div className={styles.kpiTop}>
              <p className={styles.kpiLabel}>{kpi.label}</p>
              <KpiIcon kind={kpi.kind} />
            </div>
            <p className={styles.kpiValue}>{kpi.value}</p>
            <p className={`${styles.kpiDelta} ${kpi.tone === 'up' ? styles.deltaUp : styles.deltaNeutral}`}>
              {kpi.delta}
            </p>
          </article>
        ))}
      </section>

      <section className={styles.midGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>{t.revenueForecastTitle}</h2>
              <p className={styles.panelSub}>{t.revenueForecastSub}</p>
            </div>
          </div>
          <RevenueChart
            actualLabel={t.legendActual}
            predictionLabel={t.legendPrediction}
            targetLabel={t.legendTarget}
          />
        </article>

        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>{t.attentionTitle}</h2>
              <p className={styles.panelSub}>{t.attentionSub}</p>
            </div>
          </div>
          <ul className={styles.attentionList}>
            {attention.map((item) => (
              <li key={item.text} className={`${styles.attentionItem} ${styles[item.level]}`}>
                <div className={styles.attentionMeta}>
                  <span className={styles.levelBadge}>{item.levelLabel}</span>
                  <span className={styles.tag}>{item.tag}</span>
                </div>
                <p className={styles.attentionText}>{item.text}</p>
                <a className={styles.attentionLink} href={`#${item.level}`}>
                  {item.action}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <div>
            <h2 className={styles.panelTitle}>{t.regionalTitle}</h2>
            <p className={styles.panelSub}>{t.regionalSub}</p>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t.colRegion}</th>
                <th>{t.colCurrent}</th>
                <th>{t.colForecast}</th>
                <th>{t.colChange}</th>
                <th>{t.colConfidence}</th>
                <th>{t.colRisk}</th>
              </tr>
            </thead>
            <tbody>
              {regionalRows.map((row) => (
                <tr key={row.region}>
                  <td className={styles.regionCell}>{row.region}</td>
                  <td>{formatTons(row.current, locale, t.tons)}</td>
                  <td>{formatTons(row.forecast, locale, t.tons)}</td>
                  <td className={row.change >= 0 ? styles.positive : styles.negative}>
                    {formatChange(row.change, locale)}
                  </td>
                  <td>{row.confidence}%</td>
                  <td className={row.risk === 'healthy' ? styles.healthy : styles.review}>
                    {row.risk === 'healthy' ? t.riskHealthy : t.riskReview}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
