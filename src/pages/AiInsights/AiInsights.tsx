import { useState } from 'react'
import { insightsCopy } from '../../i18n/insights'
import { useLocale } from '../../context/LocaleContext'
import styles from './AiInsights.module.css'

type FilterKey = 'opportunity' | 'warning' | 'critical' | 'all'

export default function AiInsights() {
  const { locale } = useLocale()
  const t = insightsCopy[locale]
  const [filter, setFilter] = useState<FilterKey>('all')

  const filters: Array<{ key: FilterKey; label: string }> = [
    { key: 'opportunity', label: t.filterOpportunity },
    { key: 'warning', label: t.filterWarning },
    { key: 'critical', label: t.filterCritical },
    { key: 'all', label: t.filterAll },
  ]

  const cards = [
    {
      key: 'critical' as const,
      badge: t.card1Badge,
      title: t.card1Title,
      source: t.card1Source,
      action: t.card1Action,
      button: t.card1Button,
    },
    {
      key: 'warning' as const,
      badge: t.card2Badge,
      title: t.card2Title,
      source: t.card2Source,
      action: t.card2Action,
      button: t.card2Button,
    },
    {
      key: 'opportunity' as const,
      badge: t.card3Badge,
      title: t.card3Title,
      source: t.card3Source,
      action: t.card3Action,
      button: t.card3Button,
    },
  ]

  const visibleCards = filter === 'all' ? cards : cards.filter((card) => card.key === filter)

  const timeline = [
    { text: t.timeline1, badge: t.timeline1Badge, tone: 'critical' as const },
    { text: t.timeline2, badge: t.timeline2Badge, tone: 'warning' as const },
    { text: t.timeline3, badge: t.timeline3Badge, tone: 'opportunity' as const },
    { text: t.timeline4, badge: t.timeline4Badge, tone: 'investigate' as const },
  ]

  function badgeClass(tone: 'critical' | 'warning' | 'opportunity') {
    if (tone === 'critical') return styles.badgeCritical
    if (tone === 'warning') return styles.badgeWarning
    return styles.badgeOpportunity
  }

  function timelineBadgeClass(tone: 'critical' | 'warning' | 'opportunity' | 'investigate') {
    if (tone === 'critical') return styles.badgeCritical
    if (tone === 'warning') return styles.badgeWarning
    if (tone === 'opportunity') return styles.badgeOpportunity
    return styles.badgeInvestigate
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
        <div className={styles.segmentGroup} role="group" aria-label="Insight filter">
          {filters.map((option) => (
            <button
              key={option.key}
              type="button"
              className={`${styles.segmentBtn} ${filter === option.key ? styles.segmentBtnActive : ''}`}
              onClick={() => setFilter(option.key)}
              aria-pressed={filter === option.key}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <section className={styles.cardGrid}>
        {visibleCards.map((card) => (
          <article key={card.key} className={styles.card}>
            <span className={`${styles.badge} ${badgeClass(card.key)}`}>{card.badge}</span>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardSource}>{card.source}</p>
            <p className={styles.actionLabel}>{t.recommendedAction}</p>
            <p className={styles.actionText}>{card.action}</p>
            <button type="button" className={styles.actionBtn}>
              {card.button}
            </button>
          </article>
        ))}
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{t.timelineTitle}</h2>
          <p className={styles.panelSub}>{t.timelineSub}</p>
        </div>
        <ul className={styles.timelineList}>
          {timeline.map((item) => (
            <li key={item.text} className={styles.timelineItem}>
              <span className={styles.timelineText}>{item.text}</span>
              <span className={`${styles.badge} ${timelineBadgeClass(item.tone)}`}>{item.badge}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
