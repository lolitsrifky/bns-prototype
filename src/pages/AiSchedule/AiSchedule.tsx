import { useState } from 'react'
import { scheduleCells, scheduleCopy } from '../../i18n/schedule'
import type { ScheduleCell } from '../../i18n/schedule'
import { useLocale } from '../../context/LocaleContext'
import styles from './AiSchedule.module.css'

const days: Array<ScheduleCell['day']> = ['mon', 'tue', 'wed', 'thu', 'fri']
const times: Array<ScheduleCell['time']> = ['08:00', '10:00', '12:00', '14:00']

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

export default function AiSchedule() {
  const { locale } = useLocale()
  const t = scheduleCopy[locale]
  const [view, setView] = useState<'month' | 'week' | 'day'>('week')

  const dayLabels: Record<ScheduleCell['day'], string> = {
    mon: t.dayMon,
    tue: t.dayTue,
    wed: t.dayWed,
    thu: t.dayThu,
    fri: t.dayFri,
  }

  const kpis = [
    {
      label: t.scheduledDeliveries,
      value: t.scheduledDeliveriesValue,
      sub: t.scheduledDeliveriesSub,
      tone: 'neutral' as const,
      letter: 'S',
    },
    {
      label: t.resourceConflicts,
      value: t.resourceConflictsValue,
      sub: t.resourceConflictsSub,
      tone: 'down' as const,
      letter: 'R',
    },
    {
      label: t.scheduleEfficiency,
      value: t.scheduleEfficiencyValue,
      sub: t.scheduleEfficiencySub,
      tone: 'up' as const,
      letter: 'S',
    },
  ]

  const detectedConflicts = [t.conflictResource, t.conflictMaintenance, t.conflictDriverHours, t.conflictDeliveryPriority]

  function findCell(day: ScheduleCell['day'], time: ScheduleCell['time']) {
    return scheduleCells.find((cell) => cell.day === day && cell.time === time)
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
            {t.generateSchedule}
          </button>
          <div className={styles.segmentGroup} role="group" aria-label="Calendar view">
            {(
              [
                { key: 'month' as const, label: t.viewMonth },
                { key: 'week' as const, label: t.viewWeek },
                { key: 'day' as const, label: t.viewDay },
              ]
            ).map((option) => (
              <button
                key={option.key}
                type="button"
                className={`${styles.segmentBtn} ${view === option.key ? styles.segmentBtnActive : ''}`}
                onClick={() => setView(option.key)}
                aria-pressed={view === option.key}
              >
                {option.label}
              </button>
            ))}
          </div>
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
            <h2 className={styles.panelTitle}>{t.operationalScheduleTitle}</h2>
            <p className={styles.panelSub}>{t.operationalScheduleSub}</p>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t.colTime}</th>
                  {days.map((day) => (
                    <th key={day}>{dayLabels[day]}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {times.map((time) => (
                  <tr key={time}>
                    <td className={styles.timeCell}>{time}</td>
                    {days.map((day) => {
                      const cell = findCell(day, time)
                      return (
                        <td key={day} className={styles.gridCell}>
                          {cell ? (
                            <span
                              className={`${styles.chip} ${
                                cell.tone === 'delivery'
                                  ? styles.chipDelivery
                                  : cell.tone === 'deliveryAlt'
                                    ? styles.chipDeliveryAlt
                                    : cell.tone === 'maintenance'
                                      ? styles.chipMaintenance
                                      : styles.chipConflict
                              }`}
                            >
                              {cell.tone === 'conflict' ? t.cellConflict : cell.label}
                            </span>
                          ) : null}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <div className={styles.sideCol}>
          <article className={styles.panel}>
            <div className={styles.aiHeaderRow}>
              <h2 className={styles.panelTitle}>{t.aiRecommendationTitle}</h2>
              <span className={styles.aiBadge}>AI</span>
            </div>

            <div className={styles.conflictBox}>
              <div className={styles.conflictTop}>
                <p className={styles.conflictTitle}>{t.schedulingConflict}</p>
                <span className={styles.attentionBadge}>{t.attentionBadge}</span>
              </div>
              <p className={styles.conflictText}>{t.schedulingConflictText}</p>
            </div>

            <p className={styles.recommendationText}>{t.recommendationText}</p>
            <button type="button" className={styles.applyBtn}>
              {t.applyRecommendation}
            </button>
          </article>

          <article className={styles.panel}>
            <h2 className={styles.panelTitle}>{t.detectedConflictsTitle}</h2>
            <ul className={styles.conflictList}>
              {detectedConflicts.map((conflict) => (
                <li key={conflict}>{conflict}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  )
}
