import {
  lifecycleSteps,
  modelRegistryRows,
  monitoringCopy,
  type DriftLevel,
  type ModelStatus,
} from '../../i18n/monitoring'
import { useLocale } from '../../context/LocaleContext'
import styles from './ModelMonitoring.module.css'

type SummaryCard = {
  key: string
  label: string
  value: string
  status: ModelStatus
  letter: string
}

function StatusBadgeLetter({ letter, status }: { letter: string; status: ModelStatus }) {
  return (
    <span
      className={`${styles.badge} ${status === 'drift' ? styles.badgeWarning : styles.badgeHealthy}`}
      aria-hidden
    >
      {letter}
    </span>
  )
}

function driftLabel(t: (typeof monitoringCopy)['en'], drift: DriftLevel) {
  if (drift === 'medium') return t.driftMedium
  if (drift === 'high') return t.driftHigh
  return t.driftLow
}

function statusLabel(t: (typeof monitoringCopy)['en'], status: ModelStatus) {
  if (status === 'investigate') return t.investigate
  if (status === 'drift') return t.driftDetected
  return t.healthy
}

function modelName(t: (typeof monitoringCopy)['en'], key: string) {
  const map: Record<string, string> = {
    revenuePrediction: t.revenuePrediction,
    regionalSales: t.regionalSales,
    predictiveMaintenance: t.predictiveMaintenance,
    routeOptimizer: t.routeOptimizer,
  }
  return map[key] ?? key
}

export default function ModelMonitoring() {
  const { locale } = useLocale()
  const t = monitoringCopy[locale]

  const summaryCards: SummaryCard[] = [
    { key: 'revenue', label: t.revenueModel, value: '91.8%', status: 'healthy', letter: 'R' },
    { key: 'regional', label: t.regionalSalesModel, value: '89.6%', status: 'healthy', letter: 'R' },
    { key: 'maintenance', label: t.maintenanceModel, value: '84.2%', status: 'drift', letter: 'M' },
    { key: 'route', label: t.routeOptimizerModel, value: '96.1%', status: 'healthy', letter: 'R' },
  ]

  const activeStepIndex = 5 // "Monitoring" (0-based) is the current lifecycle stage
  const nextStepIndex = 6 // "Retraining" is up next

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
        <div className={styles.headerActions}>
          <button type="button" className={styles.primaryBtn}>
            {t.runValidation}
          </button>
        </div>
      </div>

      <section className={styles.summaryGrid}>
        {summaryCards.map((card) => (
          <article key={card.key} className={styles.summaryCard}>
            <div className={styles.summaryTop}>
              <p className={styles.summaryLabel}>{card.label}</p>
              <StatusBadgeLetter letter={card.letter} status={card.status} />
            </div>
            <p className={styles.summaryValue}>{card.value}</p>
            <p className={`${styles.summaryStatus} ${card.status === 'drift' ? styles.toneWarning : styles.tonePositive}`}>
              {statusLabel(t, card.status)}
            </p>
          </article>
        ))}
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{t.registryTitle}</h2>
          <p className={styles.panelSub}>{t.registrySub}</p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t.colModel}</th>
                <th>{t.colPerformance}</th>
                <th>{t.colDataDrift}</th>
                <th>{t.colLastRetrain}</th>
                <th>{t.colVersion}</th>
                <th>{t.colStatus}</th>
              </tr>
            </thead>
            <tbody>
              {modelRegistryRows.map((row) => (
                <tr key={row.key}>
                  <td className={styles.modelCell}>{modelName(t, row.key)}</td>
                  <td>{row.performance.toFixed(1)}%</td>
                  <td>{driftLabel(t, row.drift)}</td>
                  <td>{row.lastRetrain}</td>
                  <td className={styles.versionCell}>{row.version}</td>
                  <td className={row.status === 'investigate' ? styles.toneWarning : styles.tonePositive}>
                    {statusLabel(t, row.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{t.lifecycleTitle}</h2>
          <p className={styles.panelSub}>{t.lifecycleSub}</p>
        </div>
        <div className={styles.lifecycle}>
          {lifecycleSteps.map((stepKey, index) => (
            <div key={stepKey} className={styles.lifecycleStep}>
              <div className={styles.lifecycleRow}>
                <span
                  className={`${styles.stepCircle} ${
                    index === activeStepIndex
                      ? styles.stepCurrent
                      : index === nextStepIndex
                        ? styles.stepNext
                        : styles.stepDone
                  }`}
                >
                  {index + 1}
                </span>
                {index < lifecycleSteps.length - 1 && <span className={styles.stepConnector} />}
              </div>
              <p className={styles.stepLabel}>{t[stepKey]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
