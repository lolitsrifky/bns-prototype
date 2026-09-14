import { mapPoints, regionalCopy, regionalPerformanceRows } from '../../i18n/regional'
import { useLocale } from '../../context/LocaleContext'
import styles from './RegionalSales.module.css'

function KpiBadge({ letter, tone }: { letter: string; tone: 'up' | 'down' | 'neutral' }) {
  return (
    <span
      className={`${styles.kpiBadge} ${
        tone === 'up' ? styles.badgeUp : tone === 'down' ? styles.badgeDown : styles.badgeNeutral
      }`}
      aria-hidden
    >
      {letter}
    </span>
  )
}

function RegionalMap({ sulawesiLabel, indonesiaLabel }: { sulawesiLabel: string; indonesiaLabel: string }) {
  const toneColor: Record<(typeof mapPoints)[number]['tone'], string> = {
    healthy: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444',
    neutral: '#2563eb',
  }

  return (
    <svg viewBox="0 0 600 340" className={styles.map} role="img" aria-label="Regional intelligence map">
      <polygon
        points="300,90 420,150 450,230 360,300 250,300 165,240 175,150"
        fill="#e2e8f0"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />
      {mapPoints.map((point, index) => (
        <circle key={index} cx={point.x} cy={point.y} r="6" fill={toneColor[point.tone]} />
      ))}
      <text x="360" y="80" className={styles.mapLabel}>
        {sulawesiLabel}
      </text>
      <text x="150" y="330" className={styles.mapLabel}>
        {indonesiaLabel}
      </text>
    </svg>
  )
}

export default function RegionalSales() {
  const { locale } = useLocale()
  const t = regionalCopy[locale]

  const kpis = [
    { label: t.predictedSales, value: t.predictedSalesValue, sub: t.predictedSalesUnit, tone: 'neutral' as const, letter: 'P' },
    { label: t.fastestGrowth, value: t.fastestGrowthValue, sub: t.fastestGrowthSub, tone: 'up' as const, letter: 'F' },
    { label: t.highestRisk, value: t.highestRiskValue, sub: t.highestRiskSub, tone: 'down' as const, letter: 'H' },
    { label: t.opportunity, value: t.opportunityValue, sub: t.opportunitySub, tone: 'up' as const, letter: 'O' },
  ]

  const drivers = [t.driver1, t.driver2, t.driver3]

  function formatTons(value: number) {
    const formatted = new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US').format(value)
    return formatted
  }

  function formatChange(value: number) {
    const sign = value > 0 ? '+' : ''
    const formatted = new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value)
    return `${sign}${formatted}%`
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
        <div className={styles.headerActions}>
          <button type="button" className={styles.primaryBtn}>
            {t.exportForecast}
          </button>
          <button type="button" className={styles.secondaryBtn}>
            {t.next30Days}
          </button>
        </div>
      </div>

      <section className={styles.kpiGrid}>
        {kpis.map((kpi) => (
          <article key={kpi.label} className={styles.kpiCard}>
            <div className={styles.kpiTop}>
              <p className={styles.kpiLabel}>{kpi.label}</p>
              <KpiBadge letter={kpi.letter} tone={kpi.tone} />
            </div>
            <p className={styles.kpiValue}>{kpi.value}</p>
            <p
              className={`${styles.kpiSub} ${
                kpi.tone === 'up' ? styles.tonePositive : kpi.tone === 'down' ? styles.toneNegative : styles.toneNeutral
              }`}
            >
              {kpi.sub}
            </p>
          </article>
        ))}
      </section>

      <section className={styles.midGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>{t.mapTitle}</h2>
            <p className={styles.panelSub}>{t.mapSub}</p>
          </div>
          <div className={styles.mapWrap}>
            <RegionalMap sulawesiLabel={t.mapLabelSulawesi} indonesiaLabel={t.mapLabelIndonesia} />
          </div>
        </article>

        <article className={styles.panel}>
          <div className={styles.panelHeaderRow}>
            <div>
              <h2 className={styles.panelTitle}>{t.selectedRegionTitle}</h2>
              <p className={styles.panelSub}>{t.selectedRegionName}</p>
            </div>
            <span className={styles.riskBadge}>{t.highRiskBadge}</span>
          </div>

          <p className={styles.selectedLabel}>{t.selectedPredictedSales}</p>
          <p className={styles.selectedValue}>{t.selectedSalesValue}</p>
          <p className={styles.toneNegative}>{t.selectedSalesDelta}</p>

          <p className={styles.driversHeading}>{t.driversTitle}</p>
          <ul className={styles.driverList}>
            {drivers.map((driver) => (
              <li key={driver}>{driver}</li>
            ))}
          </ul>

          <div className={styles.aiBox}>
            <p className={styles.aiLabel}>{t.aiRecommendationLabel}</p>
            <p className={styles.aiText}>{t.aiRecommendationText}</p>
          </div>
        </article>
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{t.performanceTitle}</h2>
          <p className={styles.panelSub}>{t.performanceSub}</p>
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
                <th>{t.colAction}</th>
              </tr>
            </thead>
            <tbody>
              {regionalPerformanceRows.map((row) => (
                <tr key={row.region}>
                  <td className={styles.regionCell}>{row.region}</td>
                  <td>{formatTons(row.current)}</td>
                  <td>{formatTons(row.forecast)}</td>
                  <td className={row.change >= 0 ? styles.tonePositive : styles.toneNegative}>
                    {formatChange(row.change)}
                  </td>
                  <td>{row.confidence}%</td>
                  <td className={row.risk === 'low' ? styles.tonePositive : styles.toneNegative}>
                    {row.risk === 'low' ? t.riskLow : t.riskHigh}
                  </td>
                  <td>
                    <a className={styles.actionLink} href={`#${row.region}`}>
                      {row.risk === 'low' ? t.actionView : t.actionReview}
                    </a>
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
