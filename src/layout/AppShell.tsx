import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { dashboardCopy } from '../i18n/dashboard'
import { useLocale } from '../context/LocaleContext'
import styles from './AppShell.module.css'

type AppShellProps = {
  children: ReactNode
}

function Icon({ path, size = 18 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const icons = {
  dashboard: 'M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z',
  revenue: 'M4 19V5m0 14h16M8 15V9m4 6V7m4 8v-4',
  regional: 'M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  schedule: 'M8 3v3M16 3v3M4.5 9h15M6 6h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z',
  maintenance: 'M14.7 6.3a4 4 0 0 0-5.6 5.6L4 17v3h3l5.1-5.1a4 4 0 0 0 5.6-5.6l-2.2 2.2-2.8-2.8 2.2-2.2Z',
  route: 'M4 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm10-10a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM10 17h4m0-10H10m0 0v10',
  insights: 'M12 3v3M12 18v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M3 12h3M18 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z',
  monitoring: 'M4 19h16M6 16V9m4 7V5m4 11v-6m4 6v-3',
  admin: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7.5 8a7.5 7.5 0 0 1 15 0',
  settings:
    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-3a6.6 6.6 0 0 0-.13-1.33l1.62-1.27-1.5-2.6-1.92.63a6.7 6.7 0 0 0-2.32-1.34L15.4 3H12.6l-.35 2.09a6.7 6.7 0 0 0-2.32 1.34l-1.92-.63-1.5 2.6L8.13 9.67C8.05 10.1 8 10.55 8 11s.05.9.13 1.33l-1.62 1.27 1.5 2.6 1.92-.63c.68.57 1.47 1.02 2.32 1.34l.35 2.09h2.8l.35-2.09a6.7 6.7 0 0 0 2.32-1.34l1.92.63 1.5-2.6-1.62-1.27c.08-.43.13-.88.13-1.33Z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.3-4.3',
  help: 'M12 17h.01M9.1 9a3 3 0 1 1 4.7 2.5c-.8.6-1.8 1.2-1.8 2.5M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
  bell: 'M6 9a6 6 0 1 1 12 0c0 7 3 7 3 7H3s3 0 3-7Zm4 11a2 2 0 0 0 4 0',
}

export default function AppShell({ children }: AppShellProps) {
  const { locale, setLocale } = useLocale()
  const t = dashboardCopy[locale]

  const navGroups = [
    {
      label: t.navWorkspace,
      items: [{ to: '/dashboard', label: t.dashboard, icon: icons.dashboard }],
    },
    {
      label: t.navPredictive,
      items: [
        { to: '/revenue', label: t.revenuePrediction, icon: icons.revenue },
        { to: '/regional', label: t.regionalSales, icon: icons.regional },
      ],
    },
    {
      label: t.navOperations,
      items: [
        { to: '/schedule', label: t.aiSchedule, icon: icons.schedule },
        { to: '/maintenance', label: t.predictiveMaintenance, icon: icons.maintenance },
        { to: '/routes', label: t.routeCoverage, icon: icons.route },
      ],
    },
    {
      label: t.navGovernance,
      items: [
        { to: '/insights', label: t.aiInsights, icon: icons.insights },
        { to: '/monitoring', label: t.modelMonitoring, icon: icons.monitoring },
        { to: '/admin', label: t.administration, icon: icons.admin },
        { to: '/settings', label: t.settings, icon: icons.settings },
      ],
    },
  ]

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <p className={styles.brandTitle}>{t.brandTitle}</p>
          <p className={styles.brandSubtitle}>{t.brandSubtitle}</p>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          {navGroups.map((group) => (
            <div key={group.label} className={styles.navGroup}>
              <p className={styles.navLabel}>{group.label}</p>
              <ul className={styles.navList}>
                {group.items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                      }
                    >
                      <span className={styles.navIcon}>
                        <Icon path={item.icon} />
                      </span>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.userCard}>
          <div className={styles.avatar} aria-hidden>
            NJ
          </div>
          <div>
            <p className={styles.userName}>{t.userName}</p>
            <p className={styles.userRole}>{t.userRole}</p>
          </div>
        </div>
      </aside>

      <div className={styles.main}>
        <header className={styles.topbar}>
          <label className={styles.search}>
            <Icon path={icons.search} />
            <input type="search" placeholder={t.searchPlaceholder} />
          </label>

          <div className={styles.topActions}>
            <div className={styles.langSwitch} role="group" aria-label="Language">
              <button
                type="button"
                className={`${styles.langBtn} ${locale === 'en' ? styles.langBtnActive : ''}`}
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
              >
                {t.langEnglish}
              </button>
              <button
                type="button"
                className={`${styles.langBtn} ${locale === 'id' ? styles.langBtnActive : ''}`}
                onClick={() => setLocale('id')}
                aria-pressed={locale === 'id'}
              >
                {t.langBahasa}
              </button>
            </div>

            <button type="button" className={styles.iconBtn} aria-label="Help">
              <Icon path={icons.help} />
            </button>
            <button type="button" className={styles.iconBtn} aria-label="Notifications">
              <Icon path={icons.bell} />
              <span className={styles.notifDot} />
            </button>
            <div className={styles.topAvatar} aria-hidden>
              NJ
            </div>
          </div>
        </header>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
