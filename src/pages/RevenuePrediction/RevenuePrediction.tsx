import { revenueCopy, revenueDrivers, whatIfSliders } from '../../i18n/revenue'
import { useLocale } from '../../context/LocaleContext'
import styles from './RevenuePrediction.module.css'

function KpiBadge({ letter }: { letter: string }) {
  return (
    <span className={styles.kpiBadge} aria-hidden>
      {letter}
    </span>
  )
}

function ForecastChart({ actualLabel, predictionLabel }: { actualLabel: string; predictionLabel: string }) {
  const actual = [38, 44, 41, 52, 58, 63]
  const prediction = [63, 68, 66, 74, 80, 86]
  const width = 560
  const height = 220
  const pad = 24

  function toPoints(values: number[], offset: number) {
    const max = 90
    const min = 30
    const span = width - pad * 2
    const segment = span / 5
    return values
      .map((value, index) => {
        const x = pad + offset * segment + index * segment
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
        <polyline fill="none" stroke="#0b2a4a" strokeWidth="2.5" points={toPoints(actual, 0)} />
        <polyline fill="none" stroke="#10b981" strokeWidth="2.5" points={toPoints(prediction, 5)} />
      </svg>
      <div className={styles.legend}>
        <span>
          <i className={styles.dotActual} /> {actualLabel}
        </span>
        <span>
          <i className={styles.dotPrediction} /> {predictionLabel}
        </span>
      </div>
    </div>
  )
}

export default function RevenuePrediction() {
  const { locale } = useLocale()
  const t = revenueCopy[locale]

  const kpis = [
    { label: t.predictedRevenue, value: t.predictedRevenueValue, sub: t.predictedRevenueDelta, tone: 'up' as const, letter: 'P' },
    { label: t.revenueTarget, value: t.revenueTargetValue, sub: t.revenueTargetSub, tone: 'neutral' as const, letter: 'R' },
    { label: t.predictionGap, value: t.predictionGapValue, sub: t.predictionGapSub, tone: 'down' as const, letter: 'P' },
    { label: t.confidence, value: t.confidenceValue, sub: t.confidenceSub, tone: 'up' as const, letter: 'C' },
  ]

  const driverLabels: Record<(typeof revenueDrivers)[number]['key'], string> = {
    salesVolume: t.driverSalesVolume,
    highDemand: t.driverHighDemand,
    maintenance: t.driverMaintenance,
    delays: t.driverDelays,
  }

  const sliderLabels: Record<(typeof whatIfSliders)[number]['key'], string> = {
    salesVolume: t.whatIfSalesVolume,
    truckAvailability: t.whatIfTruckAvailability,
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
        <div className={styles.headerActions}>
          <button type="button" className={styles.secondaryBtn}>
            {t.export}
          </button>
          <button type="button" className={styles.secondaryBtn}>
            {t.allRegions}
          </button>
          <button type="button" className={styles.secondaryBtn}>
            {t.periodLabel}
          </button>
        </div>
      </div>

      <section className={styles.kpiGrid}>
        {kpis.map((kpi) => (
          <article key={kpi.label} className={styles.kpiCard}>
            <div className={styles.kpiTop}>
              <p className={styles.kpiLabel}>{kpi.label}</p>
              <KpiBadge letter={kpi.letter} />
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
            <h2 className={styles.panelTitle}>{t.forecastTitle}</h2>
            <p className={styles.panelSub}>{t.forecastSub}</p>
          </div>
          <ForecastChart actualLabel={t.legendActual} predictionLabel={t.legendPrediction} />
        </article>

        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>{t.driversTitle}</h2>
            <p className={styles.panelSub}>{t.driversSub}</p>
          </div>
          <ul className={styles.driverList}>
            {revenueDrivers.map((driver) => (
              <li key={driver.key} className={styles.driverItem}>
                <div className={styles.driverTop}>
                  <span className={styles.driverLabel}>{driverLabels[driver.key]}</span>
                  <span className={driver.tone === 'positive' ? styles.tonePositive : styles.toneNegative}>
                    {driver.amount}
                  </span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${driver.tone === 'positive' ? styles.barPositive : styles.barNegative}`}
                    style={{ width: `${driver.percent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.midGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>{t.whatIfTitle}</h2>
          </div>
          <ul className={styles.sliderList}>
            {whatIfSliders.map((slider) => (
              <li key={slider.key} className={styles.sliderItem}>
                <div className={styles.driverTop}>
                  <span className={styles.driverLabel}>{sliderLabels[slider.key]}</span>
                  <span className={styles.tonePositive}>{slider.value}</span>
                </div>
                <div className={styles.barTrack}>
                  <div className={`${styles.barFill} ${styles.barPositive}`} style={{ width: `${slider.percent}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <button type="button" className={styles.primaryBtn}>
            {t.runSimulation}
          </button>
        </article>

        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.aiHeaderRow}>
              <h2 className={styles.panelTitle}>{t.aiRecommendationTitle}</h2>
              <span className={styles.aiBadge}>AI</span>
            </div>
          </div>
          <p className={styles.aiText}>{t.aiRecommendationText}</p>
          <div className={styles.aiHighlight}>{t.expectedImprovement}</div>
          <button type="button" className={styles.primaryBtn}>
            {t.createActionPlan}
          </button>
        </article>
      </section>
    </div>
  )
}
