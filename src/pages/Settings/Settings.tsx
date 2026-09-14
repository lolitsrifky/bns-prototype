import { settingsCopy } from '../../i18n/settings'
import { useLocale } from '../../context/LocaleContext'
import { useTheme, type ThemeMode } from '../../context/ThemeContext'
import styles from './Settings.module.css'

type ThemeOption = {
  mode: ThemeMode
  name: string
  desc: string
  swatchClass: string
}

export default function Settings() {
  const { locale } = useLocale()
  const t = settingsCopy[locale]
  const { theme, setTheme } = useTheme()

  const themeOptions: ThemeOption[] = [
    { mode: 'light', name: t.themeLightName, desc: t.themeLightDesc, swatchClass: styles.swatchLight },
    { mode: 'low-light', name: t.themeLowLightName, desc: t.themeLowLightDesc, swatchClass: styles.swatchLowLight },
    { mode: 'dark', name: t.themeDarkName, desc: t.themeDarkDesc, swatchClass: styles.swatchDark },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
      </div>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{t.appearanceTitle}</h2>
          <p className={styles.panelSub}>{t.appearanceSub}</p>
        </div>

        <div className={styles.optionGrid}>
          {themeOptions.map((option) => {
            const isActive = theme === option.mode
            return (
              <button
                key={option.mode}
                type="button"
                className={`${styles.optionCard} ${isActive ? styles.optionCardActive : ''}`}
                onClick={() => setTheme(option.mode)}
                aria-pressed={isActive}
              >
                <div className={`${styles.swatch} ${option.swatchClass}`}>
                  <span className={styles.swatchBar} />
                  <span className={styles.swatchDot} />
                </div>
                <div className={styles.optionBody}>
                  <div className={styles.optionTop}>
                    <p className={styles.optionName}>{option.name}</p>
                    {isActive && <span className={styles.activeBadge}>{t.selectedBadge}</span>}
                  </div>
                  <p className={styles.optionDesc}>{option.desc}</p>
                  {!isActive && <span className={styles.selectAction}>{t.selectAction}</span>}
                </div>
              </button>
            )
          })}
        </div>

        <div className={styles.previewWrap}>
          <p className={styles.previewLabel}>{t.previewLabel}</p>
          <div className={styles.previewCard}>
            <p className={styles.previewCardTitle}>{t.previewCardTitle}</p>
            <p className={styles.previewCardValue}>{t.previewCardValue}</p>
            <p className={styles.previewCardSub}>{t.previewCardSub}</p>
          </div>
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>{t.otherSectionTitle}</h2>
          <p className={styles.panelSub}>{t.otherSectionSub}</p>
        </div>
      </section>
    </div>
  )
}
