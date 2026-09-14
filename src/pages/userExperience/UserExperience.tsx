import { useState } from 'react'
import { notificationRows, userExperienceCopy, type NotificationTone } from '../../i18n/userExperience'
import { useLocale } from '../../context/LocaleContext'
import styles from './UserExperience.module.css'

type Density = 'comfortable' | 'compact'
type Theme = 'light' | 'dark'

function notificationText(t: (typeof userExperienceCopy)['en'], key: string) {
  const map: Record<string, string> = {
    trucksAttention: t.notifTrucksAttention,
    regionForecast: t.notifRegionForecast,
    routeOptimized: t.notifRouteOptimized,
    maintenanceFeedDelayed: t.notifMaintenanceFeedDelayed,
  }
  return map[key] ?? key
}

function tagLabel(t: (typeof userExperienceCopy)['en'], tone: NotificationTone) {
  if (tone === 'critical') return t.tagCritical
  if (tone === 'success') return t.tagSuccess
  return t.tagWarning
}

function tagClass(styles: Record<string, string>, tone: NotificationTone) {
  if (tone === 'critical') return styles.tagCritical
  if (tone === 'success') return styles.tagSuccess
  return styles.tagWarning
}

export default function UserExperience() {
  const { locale, setLocale } = useLocale()
  const t = userExperienceCopy[locale]
  const [density, setDensity] = useState<Density>('comfortable')
  const [theme, setTheme] = useState<Theme>('light')

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
          <h2 className={styles.panelTitle}>{t.notificationCenterTitle}</h2>
          <ul className={styles.notifList}>
            {notificationRows.map((row) => (
              <li key={row.key} className={styles.notifRow}>
                <span className={`${styles.tag} ${tagClass(styles, row.tone)}`}>{tagLabel(t, row.tone)}</span>
                <span className={styles.notifText}>{notificationText(t, row.key)}</span>
                <span className={styles.notifTime}>{t.timeToday}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.sideCol}>
          <section className={styles.panel}>
            <div className={styles.profileRow}>
              <div className={styles.avatar} aria-hidden>
                NJ
              </div>
              <div className={styles.profileInfo}>
                <p className={styles.profileName}>{t.profileName}</p>
                <p className={styles.profileRole}>{t.profileRole}</p>
                <p className={styles.profileCompany}>{t.profileCompany}</p>
              </div>
              <button type="button" className={styles.editBtn}>
                {t.editProfile}
              </button>
            </div>
          </section>

          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>{t.preferencesTitle}</h2>

            <div className={styles.prefRow}>
              <span className={styles.prefLabel}>{t.languageLabel}</span>
              <div className={styles.toggleGroup} role="group" aria-label="Language">
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${locale === 'id' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setLocale('id')}
                  aria-pressed={locale === 'id'}
                >
                  {t.bahasa}
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${locale === 'en' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setLocale('en')}
                  aria-pressed={locale === 'en'}
                >
                  {t.english}
                </button>
              </div>
            </div>

            <div className={styles.prefRow}>
              <span className={styles.prefLabel}>{t.dashboardDensityLabel}</span>
              <div className={styles.toggleGroup} role="group" aria-label="Dashboard density">
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${density === 'comfortable' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setDensity('comfortable')}
                  aria-pressed={density === 'comfortable'}
                >
                  {t.comfortable}
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${density === 'compact' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setDensity('compact')}
                  aria-pressed={density === 'compact'}
                >
                  {t.compact}
                </button>
              </div>
            </div>

            <div className={styles.prefRow}>
              <span className={styles.prefLabel}>{t.themeLabel}</span>
              <div className={styles.toggleGroup} role="group" aria-label="Theme">
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${theme === 'light' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setTheme('light')}
                  aria-pressed={theme === 'light'}
                >
                  {t.light}
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${theme === 'dark' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setTheme('dark')}
                  aria-pressed={theme === 'dark'}
                >
                  {t.dark}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
