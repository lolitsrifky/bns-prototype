import AppShell from '../layout/AppShell'

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <AppShell>
      <div>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#0b2a4a' }}>{title}</h1>
        <p style={{ color: '#64748b' }}>Coming soon in the BNS prototype.</p>
      </div>
    </AppShell>
  )
}
