import { useNavigate } from 'react-router-dom'
import { administrationCopy, configRows, type PillTone } from '../../i18n/administration'
import { useLocale } from '../../context/LocaleContext'
import styles from './Administration.module.css'

function Pill({ tone, children }: { tone: PillTone; children: string }) {
  const toneClass =
    tone === 'green'
      ? styles.pillGreen
      : tone === 'red'
        ? styles.pillRed
        : tone === 'yellow'
          ? styles.pillYellow
          : styles.pillBlue

  return <span className={`${styles.pill} ${toneClass}`}>{children}</span>
}

function configLabel(t: (typeof administrationCopy)['en'], key: string) {
  const labels: Record<string, string> = {
    refreshCadence: t.refreshCadence,
    validationThreshold: t.validationThreshold,
    criticalEscalation: t.criticalEscalation,
    dataFreshness: t.dataFreshness,
  }
  return labels[key] ?? key
}

function configValue(t: (typeof administrationCopy)['en'], key: string) {
  const values: Record<string, string> = {
    refreshCadence: t.refreshCadenceValue,
    validationThreshold: t.validationThresholdValue,
    criticalEscalation: t.criticalEscalationValue,
    dataFreshness: t.dataFreshnessValue,
  }
  return values[key] ?? ''
}

function pillLabel(t: (typeof administrationCopy)['en'], tone: PillTone) {
  if (tone === 'green') return t.pillGreen
  if (tone === 'red') return t.pillRed
  if (tone === 'yellow') return t.pillYellow
  return t.pillBlue
}

export default function Administration() {
  const { locale } = useLocale()
  const t = administrationCopy[locale]
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
      </div>

      <section className={styles.cardGrid}>
        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>{t.usersTitle}</h2>
              <p className={styles.cardSubtitle}>{t.usersSubtitle}</p>
            </div>
          </div>
          <p className={styles.cardBody}>{t.usersBody}</p>
          <button type="button" className={styles.primaryBtn}>
            {t.manageUsers}
          </button>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>{t.integrationsTitle}</h2>
              <p className={styles.cardSubtitle}>{t.integrationsSubtitle}</p>
            </div>
            <span className={`${styles.statusPill} ${styles.pillGreen}`}>{t.integrationsHealthy}</span>
          </div>
          <p className={styles.cardBody}>{t.integrationsBody}</p>
          <div className={styles.pillRow}>
            <Pill tone="green">{t.erpConnected}</Pill>
            <Pill tone="green">{t.gpsConnected}</Pill>
            <Pill tone="yellow">{t.maintenanceDelayed}</Pill>
          </div>
          <button type="button" className={styles.primaryBtn} onClick={() => navigate('/data-health')}>
            {t.openDataHealth}
          </button>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <h2 className={styles.cardTitle}>{t.notificationsTitle}</h2>
              <p className={styles.cardSubtitle}>{t.notificationsSubtitle}</p>
            </div>
          </div>
          <p className={styles.cardBody}>{t.notificationsBody}</p>
          <div className={styles.pillRow}>
            <Pill tone="blue">{t.inAppAlerts}</Pill>
            <Pill tone="blue">{t.emailAlerts}</Pill>
            <Pill tone="red">{t.critical}</Pill>
          </div>
          <button type="button" className={styles.primaryBtn} onClick={() => navigate('/notifications')}>
            {t.notificationSettings}
          </button>
        </article>
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{t.configTitle}</h2>
          <p className={styles.panelSub}>{t.configSubtitle}</p>
        </div>
        <ul className={styles.configList}>
          {configRows.map((row) => (
            <li key={row.key} className={styles.configRow}>
              <span className={styles.configLabel}>{configLabel(t, row.key)}</span>
              <span className={styles.configValue}>{configValue(t, row.key)}</span>
              <Pill tone={row.tone}>{pillLabel(t, row.tone)}</Pill>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
