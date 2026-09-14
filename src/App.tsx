import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { LocaleContext, useLocale } from './context/LocaleContext'
import type { Locale } from './i18n/types'
import AppShell from './layout/AppShell'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import RevenuePrediction from './pages/RevenuePrediction/RevenuePrediction'
import RegionalSales from './pages/RegionalSales/RegionalSales'
import AiSchedule from './pages/AiSchedule/AiSchedule'
import PredictiveMaintenance from './pages/PredictiveMaintenance/PredictiveMaintenance'
import RouteCoverage from './pages/RouteCoverage/RouteCoverage'
import AiInsights from './pages/AiInsights/AiInsights'
import ModelMonitoring from './pages/ModelMonitoring/ModelMonitoring'
import Administration from './pages/Administration/Administration'
import AlertCenter from './pages/AlertCenter/AlertCenter'
import DataHealth from './pages/DataHealth/DataHealth'
import UserExperience from './pages/UserExperience/UserExperience'

function LoginPage() {
  const navigate = useNavigate()
  const { setLocale } = useLocale()

  return (
    <Login
      onSuccess={(nextLocale) => {
        setLocale(nextLocale)
        navigate('/dashboard')
      }}
    />
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <AppShell>
            <Dashboard />
          </AppShell>
        }
      />
      <Route
        path="/revenue"
        element={
          <AppShell>
            <RevenuePrediction />
          </AppShell>
        }
      />
      <Route
        path="/regional"
        element={
          <AppShell>
            <RegionalSales />
          </AppShell>
        }
      />
      <Route
        path="/schedule"
        element={
          <AppShell>
            <AiSchedule />
          </AppShell>
        }
      />
      <Route
        path="/maintenance"
        element={
          <AppShell>
            <PredictiveMaintenance />
          </AppShell>
        }
      />
      <Route
        path="/routes"
        element={
          <AppShell>
            <RouteCoverage />
          </AppShell>
        }
      />
      <Route
        path="/insights"
        element={
          <AppShell>
            <AiInsights />
          </AppShell>
        }
      />
      <Route
        path="/monitoring"
        element={
          <AppShell>
            <ModelMonitoring />
          </AppShell>
        }
      />
      <Route
        path="/admin"
        element={
          <AppShell>
            <Administration />
          </AppShell>
        }
      />
      <Route
        path="/alerts"
        element={
          <AppShell>
            <AlertCenter />
          </AppShell>
        }
      />
      <Route
        path="/data-health"
        element={
          <AppShell>
            <DataHealth />
          </AppShell>
        }
      />
      <Route
        path="/notifications"
        element={
          <AppShell>
            <UserExperience />
          </AppShell>
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('en')

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LocaleContext.Provider>
  )
}
