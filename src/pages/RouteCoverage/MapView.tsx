import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import type { RouteStopRow } from '../../i18n/route'
import styles from './RouteCoverage.module.css'

// Leaflet's default marker icon breaks under Vite bundling because it resolves
// image paths relative to the page instead of the built asset URL. This patches
// the default icon to use the correctly-bundled asset URLs instead.
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

export type StopTone = 'kept' | 'dropped' | 'added'

const TONE_COLOR: Record<StopTone, string> = {
  kept: '#10b981',
  dropped: '#ef4444',
  added: '#3b82f6',
}

function coloredDotIcon(color: string) {
  return L.divIcon({
    className: 'bns-map-dot',
    html: `<span style="display:block;width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 0 0 1px rgba(15,23,42,0.15);"></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  })
}

/** Keeps the map framed to whatever stops are currently plotted. */
function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap()
  useEffect(() => {
    if (positions.length === 0) return
    if (positions.length === 1) {
      map.setView(positions[0], 14)
      return
    }
    map.fitBounds(positions, { padding: [24, 24] })
  }, [positions, map])
  return null
}

export type MapStop = RouteStopRow & { tone: StopTone }

const FALLBACK_CENTER: [number, number] = [-3.4, 119.32] // Polewali Mandar, Sulawesi Barat

export default function MapView({
  stops,
  pathStyle,
  emptyLabel,
}: {
  stops: MapStop[]
  pathStyle: 'dashed' | 'solid'
  emptyLabel: string
}) {
  const positions = useMemo<[number, number][]>(() => stops.map((s) => [s.lat, s.lng]), [stops])

  if (stops.length === 0) {
    return (
      <div className={styles.mapPlaceholder}>
        <span>{emptyLabel}</span>
      </div>
    )
  }

  return (
    <div className={styles.mapCanvas}>
      <MapContainer
        center={positions[0] ?? FALLBACK_CENTER}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds positions={positions} />
        {positions.length > 1 && (
          <Polyline
            positions={positions}
            pathOptions={{
              color: '#334155',
              weight: 3,
              dashArray: pathStyle === 'dashed' ? '6 6' : undefined,
            }}
          />
        )}
        {stops.map((stop, index) => (
          <Marker
            key={`${stop.shop}-${index}`}
            position={[stop.lat, stop.lng]}
            icon={coloredDotIcon(TONE_COLOR[stop.tone])}
          />
        ))}
      </MapContainer>
    </div>
  )
}
