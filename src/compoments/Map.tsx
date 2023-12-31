import origin from '../assets/imgs/origin_pin.png'
import destination from '../assets/imgs/destination_pin.png'
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Polyline,
  Libraries,
} from '@react-google-maps/api'

import { useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../services/redux/hooks'
import { updateMapScriptStatus } from '../services/redux/appSlice'
import { ILatLng, NonNullableFields } from '../types'
import { MapContainer } from '../css/MapContainer'
import { bringMarkersToView } from '../services/map.services'

const libraries: Libraries = ['places']
const polyLineOptions = {
  strokeColor: '#275aaf',
  strokeOpacity: 0.01,
  strokeWeight: 2,
  icons: [
    {
      icon: {
        path: 'M 0,-1 0,1',
        strokeOpacity: 1,
        scale: 2,
      },
      offset: '0',
      repeat: '10px',
    },
  ],
}
const mapOptions = {
  disableDefaultUI: true, // Disables the default UI controls
  zoomControl: false, // Disables zoom control
  scrollwheel: false, // Disables scroll wheel zoom
  disableDoubleClickZoom: true, // Disables double click zoom
  draggable: false, // Disables dragging the map
}

export default function Map() {
  const dispatch = useAppDispatch()
  const { originFormData, destinationFormData } = useAppSelector(
    (state) => state.app,
  )
  const { lat: originlat, lng: originLng } = originFormData.address
  const { lat: deslat, lng: desLng } = destinationFormData.address

  const originPosition = { lat: originlat ?? NaN, lng: originLng ?? NaN }
  const destinationPosition = { lat: deslat ?? NaN, lng: desLng ?? NaN }

  const bothSelected = !!(originlat && originLng && deslat && desLng)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY,
    language: 'en',
    libraries,
    region: 'au',
  })

  const center = useMemo(() => {
    if (originlat && originLng) {
      return originPosition
    }
    return { lat: -37.8136, lng: 144.9631 }
  }, [originlat, deslat])

  const path: ILatLng[] = [
    { lat: originlat!, lng: originLng! },
    { lat: deslat!, lng: desLng! },
  ]

  const mapRef = useRef<null | google.maps.Map>(null)
  const handleMapLoad = (map: google.maps.Map) => {
    dispatch(updateMapScriptStatus())
    mapRef.current = map
  }

  useEffect(() => {
    if (bothSelected)
      bringMarkersToView(mapRef, originPosition, destinationPosition)
  }, [originlat, deslat])

  return (
    <MapContainer>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="inner-map-container"
          center={center}
          zoom={10}
          onLoad={handleMapLoad}
          {...(bothSelected ? { options: mapOptions } : {})}
        >
          {originlat && originLng ? (
            <Marker
              position={
                originPosition as NonNullableFields<typeof originPosition>
              }
              icon={{
                scaledSize: { height: 30, width: 20 },
                url: origin,
              }}
            />
          ) : null}
          {deslat && desLng ? (
            <Marker
              position={destinationPosition}
              icon={{
                url: destination,
                scaledSize: { height: 30, width: 20 },
              }}
            />
          ) : null}
          {originlat && deslat ? (
            <Polyline path={path} options={polyLineOptions} />
          ) : null}
        </GoogleMap>
      )}
    </MapContainer>
  )
}
