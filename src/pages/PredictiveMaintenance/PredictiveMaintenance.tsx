import { useNavigate } from 'react-router-dom'
import { fleetHealthRows, maintenanceCopy, selectedTruckFactors } from '../../i18n/maintenance'
import type { FleetRisk } from '../../i18n/maintenance'
import { useLocale } from '../../context/LocaleContext'
import styles from './PredictiveMaintenance.module.css'

function KpiBadge({ letter, tone }: { letter: string; tone: 'up' | 'down' | 'warning' | 'neutral' }) {
  return (
    <span
      className={`${styles.kpiBadge} ${
        tone === 'up'
          ? styles.badgeUp
          : tone === 'down'
            ? styles.badgeDown
            : tone === 'warning'
              ? styles.badgeWarning
              : styles.badgeNeutral
      }`}
      aria-hidden
    >
      {letter}
    </span>
  )
}

export default function PredictiveMaintenance() {
  const { locale } = useLocale()
  const t = maintenanceCopy[locale]
  const navigate = useNavigate()

  const kpis = [
    { label: t.totalFleet, value: t.totalFleetValue, sub: t.totalFleetSub, tone: 'neutral' as const, letter: 'T' },
    { label: t.healthy, value: t.healthyValue, sub: t.healthySub, tone: 'up' as const, letter: 'H' },
    { label: t.attention, value: t.attentionValue, sub: t.attentionSub, tone: 'warning' as const, letter: 'A' },
    { label: t.critical, value: t.criticalValue, sub: t.criticalSub, tone: 'down' as const, letter: 'C' },
  ]

  const factorLabels: Record<(typeof selectedTruckFactors)[number]['key'], string> = {
    temperature: t.temperature,
    fuelEfficiency: t.fuelEfficiency,
    engineHours: t.engineHours,
  }

  function riskClass(risk: FleetRisk) {
    if (risk === 'healthy') return styles.tonePositive
    if (risk === 'attention') return styles.toneWarning
    return styles.toneNegative
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
            {t.createWorkOrder}
          </button>
          <button type="button" className={styles.secondaryBtn}>
            {t.allRisk}
          </button>
          <button type="button" className={styles.secondaryBtn}>
            {t.allFleet}
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
                kpi.tone === 'up'
                  ? styles.tonePositive
                  : kpi.tone === 'down'
                    ? styles.toneNegative
                    : kpi.tone === 'warning'
                      ? styles.toneWarning
                      : styles.toneNeutral
              }`}
            >
              {kpi.sub}
            </p>
          </article>
        ))}
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{t.fleetHealthTitle}</h2>
          <p className={styles.panelSub}>{t.fleetHealthSub}</p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t.colTruckId}</th>
                <th>{t.colHealth}</th>
                <th>{t.colFailureProbability}</th>
                <th>{t.colPredictedIssue}</th>
                <th>{t.colFailureWindow}</th>
                <th>{t.colLastService}</th>
                <th>{t.colAction}</th>
              </tr>
            </thead>
            <tbody>
              {fleetHealthRows.map((row) => (
                <tr key={row.truckId}>
                  <td className={styles.truckCell}>{row.truckId}</td>
                  <td>{row.health} / 100</td>
                  <td className={riskClass(row.risk)}>{row.failureProbability}%</td>
                  <td>{row.predictedIssue}</td>
                  <td>{row.failureWindow}</td>
                  <td>{row.lastService}</td>
                  <td>
                    <a className={styles.actionLink} href={`#${row.truckId}`}>
                      {t.actionView}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.midGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeaderRow}>
            <h2 className={styles.panelTitle}>{t.selectedTruckTitle}</h2>
            <span className={styles.attentionBadge}>{t.attentionBadge}</span>
          </div>

          <div className={styles.truckSummary}>
            <div className={styles.healthCircle}>68</div>
            <div>
              <p className={styles.failureLabel}>{t.failureProbabilityLabel}</p>
              <p className={styles.failureValue}>72%</p>
              <p className={styles.toneNegative}>{t.elevatedRisk}</p>
            </div>
          </div>

          <ul className={styles.factorList}>
            {selectedTruckFactors.map((factor) => (
              <li key={factor.key} className={styles.factorItem}>
                <div className={styles.factorTop}>
                  <span className={styles.factorLabel}>{factorLabels[factor.key]}</span>
                  <span className={factor.tone === 'negative' ? styles.toneNegative : styles.toneWarning}>
                    {factor.key === 'engineHours' ? t.engineHoursValue : factor.value}
                  </span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${factor.tone === 'negative' ? styles.barNegative : styles.barWarning}`}
                    style={{ width: `${factor.percent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.cardFooter}>
            <button type="button" className={styles.alertBtn} onClick={() => navigate('/alerts')}>
              {t.alertCenter}
            </button>
          </div>
        </article>

        <article className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>{t.aiRecommendationTitle}</h2>
          </div>

          <div className={styles.actionBox}>
            <p className={styles.actionLabel}>{t.actionRequired}</p>
            <p className={styles.actionText}>{t.actionRequiredText}</p>
            <p className={styles.actionSub}>{t.actionRequiredSub}</p>
          </div>

          <div className={styles.buttonRow}>
            <button type="button" className={styles.primaryBtn}>
              {t.scheduleMaintenance}
            </button>
            <button type="button" className={styles.secondaryBtn}>
              {t.assignTechnician}
            </button>
            <button type="button" className={styles.secondaryBtn}>
              {t.markReviewed}
            </button>
          </div>
        </article>
      </section>
    </div>
  )
}
