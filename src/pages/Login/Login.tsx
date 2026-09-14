import { useState } from 'react'
import type { FormEvent } from 'react'
import { loginCopy } from '../../i18n/login'
import type { Locale } from '../../i18n/types'
import styles from './Login.module.css'

type LoginProps = {
  onSuccess: (locale: Locale) => void
}

export default function Login({ onSuccess }: LoginProps) {
  const [locale, setLocale] = useState<Locale>('en')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const t = loginCopy[locale]

  function validate() {
    const next: { email?: string; password?: string } = {}
    if (!email.trim()) next.email = t.emailRequired
    if (!password) next.password = t.passwordRequired
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate()) return
    onSuccess(locale)
  }

  function handleSso() {
    onSuccess(locale)
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="BNS brand">
        <div className={styles.heroContent}>
          <h1 className={styles.brandTitle}>{t.brandTitle}</h1>
          <p className={styles.brandSubtitle}>{t.brandSubtitle}</p>
          <h2 className={styles.headline}>{t.heroHeadline}</h2>
          <p className={styles.body}>{t.heroBody}</p>
        </div>
      </section>

      <section className={styles.panel}>
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

        <div className={styles.card}>
          <h2 className={styles.title}>{t.welcome}</h2>
          <p className={styles.subtitle}>{t.welcomeSub}</p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                {t.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="username"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {errors.email ? <p className={styles.error}>{errors.email}</p> : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                {t.passwordLabel}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {errors.password ? <p className={styles.error}>{errors.password}</p> : null}
            </div>

            <div className={styles.row}>
              <label className={styles.remember}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                {t.rememberMe}
              </label>
              <a className={styles.forgot} href="#forgot-password">
                {t.forgotPassword}
              </a>
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.primaryBtn}>
                {t.signIn}
              </button>
              <button type="button" className={styles.secondaryBtn} onClick={handleSso}>
                {t.sso}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
