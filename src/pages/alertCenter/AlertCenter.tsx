import { useState } from 'react'
import { alertCenterCopy, alertItems, type AlertSeverity } from '../../i18n/alertCenter'
import { useLocale } from '../../context/LocaleContext'
import styles from './AlertCenter.module.css'

type FilterKey = AlertSeverity | 'all'

type AlertContent = {
  listTitle: string
  source: string
  desc: string
  detailTitle: string
  detailDesc: string
  recommendation: string
}

function severityBadgeClass(styles: Record<string, string>, severity: AlertSeverity) {
  if (severity === 'critical') return styles.badgeCritical
  if (severity === 'warning') return styles.badgeWarning
  return styles.badgeOpportunity
}

export default function AlertCenter() {
  const { locale } = useLocale()
  const t = alertCenterCopy[locale]
  const [filter, setFilter] = useState<FilterKey>('all')
  const [selectedKey, setSelectedKey] = useState<string>(alertItems[0].key)

  const filters: Array<{ key: FilterKey; label: string; tone: FilterKey }> = [
    { key: 'opportunity', label: t.filterOpportunity, tone: 'opportunity' },
    { key: 'warning', label: t.filterWarning, tone: 'warning' },
    { key: 'critical', label: t.filterCritical, tone: 'critical' },
    { key: 'all', label: t.filterAll, tone: 'all' },
  ]

  function content(key: string): AlertContent {
    const map: Record<string, AlertContent> = {
      engineFailure: {
        listTitle: t.alertEngineFailureList,
        source: t.alertEngineFailureSource,
        desc: t.alertEngineFailureDesc,
        detailTitle: t.alertEngineFailureDetailTitle,
        detailDesc: t.alertEngineFailureDetailDesc,
        recommendation: t.alertEngineFailureRecommendation,
      },
      regionForecast: {
        listTitle: t.alertRegionForecastList,
        source: t.alertRegionForecastSource,
        desc: t.alertRegionForecastDesc,
        detailTitle: t.alertRegionForecastDetailTitle,
        detailDesc: t.alertRegionForecastDetailDesc,
        recommendation: t.alertRegionForecastRecommendation,
      },
      coverageOpportunity: {
        listTitle: t.alertCoverageOpportunityList,
        source: t.alertCoverageOpportunitySource,
        desc: t.alertCoverageOpportunityDesc,
        detailTitle: t.alertCoverageOpportunityDetailTitle,
        detailDesc: t.alertCoverageOpportunityDetailDesc,
        recommendation: t.alertCoverageOpportunityRecommendation,
      },
      dataFeedDelay: {
        listTitle: t.alertDataFeedDelayList,
        source: t.alertDataFeedDelaySource,
        desc: t.alertDataFeedDelayDesc,
        detailTitle: t.alertDataFeedDelayDetailTitle,
        detailDesc: t.alertDataFeedDelayDetailDesc,
        recommendation: t.alertDataFeedDelayRecommendation,
      },
    }
    return map[key]
  }

  function severityLabel(severity: AlertSeverity) {
    if (severity === 'critical') return t.badgeCritical
    if (severity === 'warning') return t.badgeWarning
    return t.badgeOpportunity
  }

  const visibleAlerts = filter === 'all' ? alertItems : alertItems.filter((item) => item.severity === filter)
  const selectedItem = alertItems.find((item) => item.key === selectedKey) ?? alertItems[0]
  const selectedContent = content(selectedItem.key)

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
        <div className={styles.filterRow} role="group" aria-label="Alert filter">
          {filters.map((option) => (
            <button
              key={option.key}
              type="button"
              className={`${styles.filterPill} ${
                option.tone === 'all' ? styles.pillAll : severityBadgeClass(styles, option.tone as AlertSeverity)
              } ${filter === option.key ? styles.filterPillActive : ''}`}
              onClick={() => setFilter(option.key)}
              aria-pressed={filter === option.key}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.layout}>
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>{t.activeAlertsTitle}</h2>
          <ul className={styles.alertList}>
            {visibleAlerts.map((item) => {
              const c = content(item.key)
              return (
                <li key={item.key} className={styles.alertRow}>
                  <div className={styles.alertBadgeCol}>
                    <span className={`${styles.badge} ${severityBadgeClass(styles, item.severity)}`}>
                      {severityLabel(item.severity)}
                    </span>
                  </div>
                  <div className={styles.alertBody}>
                    <p className={styles.alertTitle}>{c.listTitle}</p>
                    <p className={styles.alertSource}>{c.source}</p>
                    <p className={styles.alertDesc}>{c.desc}</p>
                  </div>
                  <div className={styles.alertAction}>
                    <button type="button" className={styles.reviewBtn} onClick={() => setSelectedKey(item.key)}>
                      {t.reviewBtn}
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        <section className={styles.panel}>
          <div className={styles.selectedHeader}>
            <h2 className={styles.panelTitle}>{t.selectedAlertTitle}</h2>
            <span className={`${styles.badge} ${severityBadgeClass(styles, selectedItem.severity)}`}>
              {severityLabel(selectedItem.severity)}
            </span>
          </div>

          <p className={styles.selectedTitle}>{selectedContent.detailTitle}</p>
          <p className={styles.selectedDesc}>{selectedContent.detailDesc}</p>
          <p className={styles.selectedRecommendation}>{selectedContent.recommendation}</p>

          <div className={styles.buttonRow}>
            <button type="button" className={styles.primaryBtn}>
              {t.takeAction}
            </button>
            <button type="button" className={styles.secondaryBtn}>
              {t.assignOwner}
            </button>
            <button type="button" className={styles.secondaryBtn}>
              {t.dismiss}
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
