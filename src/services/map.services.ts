import { MutableRefObject } from 'react'
import { ILatLng } from '../types'

export function bringMarkersToView(
  mapRef: MutableRefObject<google.maps.Map | null>,
  originPosition: ILatLng,
  destinationPosition: ILatLng,
) {
  if (!mapRef.current) return
  const bounds = new window.google.maps.LatLngBounds()
  bounds.extend(originPosition)
  bounds.extend(destinationPosition)

  mapRef.current.fitBounds(bounds)
}
