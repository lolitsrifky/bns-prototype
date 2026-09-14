import { dataHealthCopy, dataIssueRows, dataSourceRows, type IssueTone, type SourceStatus } from '../../i18n/dataHealth'
import { useLocale } from '../../context/LocaleContext'
import styles from './DataHealth.module.css'

function sourceName(t: (typeof dataHealthCopy)['en'], key: string) {
  const map: Record<string, string> = {
    erpSales: t.erpSales,
    gpsFleet: t.gpsFleet,
    fleetTelemetry: t.fleetTelemetry,
    maintenanceSystem: t.maintenanceSystem,
    customerSalesforce: t.customerSalesforce,
  }
  return map[key] ?? key
}

function issueLabel(t: (typeof dataHealthCopy)['en'], key: string) {
  const map: Record<string, string> = {
    maintenanceFeedDelayed: t.maintenanceFeedDelayed,
    missingTelemetry: t.missingTelemetry,
    staleSalesData: t.staleSalesData,
  }
  return map[key] ?? key
}

function issueTagLabel(t: (typeof dataHealthCopy)['en'], tone: IssueTone) {
  if (tone === 'attention') return t.tagAttention
  if (tone === 'review') return t.tagReview
  return t.tagWarning
}

function statusClass(styles: Record<string, string>, status: SourceStatus) {
  return status === 'delayed' ? styles.badgeDelayed : styles.badgeHealthy
}

function issueToneClass(styles: Record<string, string>, tone: IssueTone) {
  if (tone === 'attention') return styles.tagAttention
  if (tone === 'review') return styles.tagReview
  return styles.tagWarning
}

export default function DataHealth() {
  const { locale } = useLocale()
  const t = dataHealthCopy[locale]

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
      </div>

      <div className={styles.layout}>
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>{t.connectedSourcesTitle}</h2>
          <ul className={styles.sourceList}>
            {dataSourceRows.map((row) => (
              <li key={row.key} className={styles.sourceRow}>
                <span className={styles.sourceName}>{sourceName(t, row.key)}</span>
                <span className={`${styles.badge} ${statusClass(styles, row.status)}`}>
                  {row.status === 'delayed' ? t.delayed : t.healthy}
                </span>
                <span className={styles.sourceTime}>
                  {row.minutesAgo} {t.minAgo}
                </span>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${row.status === 'delayed' ? styles.barDelayed : styles.barHealthy}`}
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.sideCol}>
          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>{t.readinessTitle}</h2>
            <p className={styles.readyText}>{t.readinessReady}</p>
            <div className={styles.statRow}>
              <span className={styles.statValue}>98%</span>
              <span className={styles.statValue}>97.4%</span>
              <span className={styles.statValue}>{locale === 'id' ? 'Rendah' : 'Low'}</span>
            </div>
            <button type="button" className={styles.primaryBtn}>
              {t.refreshStatus}
            </button>
          </section>

          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>{t.issuesTitle}</h2>
            <ul className={styles.issueList}>
              {dataIssueRows.map((row) => (
                <li key={row.key} className={styles.issueRow}>
                  <span className={styles.issueLabel}>{issueLabel(t, row.key)}</span>
                  <span className={`${styles.tag} ${issueToneClass(styles, row.tone)}`}>
                    {issueTagLabel(t, row.tone)}
                  </span>
                </li>
              ))}
            </ul>
            <button type="button" className={styles.primaryBtn}>
              {t.openWorkflow}
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}
