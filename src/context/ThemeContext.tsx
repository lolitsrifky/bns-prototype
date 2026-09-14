import { createContext, useContext } from 'react'

export type ThemeMode = 'light' | 'low-light' | 'dark'

export type ThemeContextValue = {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return value
}
