import origin from '../assets/imgs/origin_pin.png'
import styled from '@emotion/styled'
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
  Libraries,
} from '@react-google-maps/api'

import { useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { updateMapScriptStatus } from '../services/appSlice'
const libraries: Libraries = ['places']
export const MapContainer = styled.div(
  {
    width: '100%',
    height: '100%',
    '.origin-marker': {
      width: 20,
      height: 30,
      transform: 'translate(-10,-30)',
    },
    '.inner-map-container': {
      height: '100%',
      width: '100%',
    },
  },
  { label: 'map-container' },
)

export default function Map() {
  const dispatch = useAppDispatch()
  const { originFormData } = useAppSelector((state) => state.app)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_KEY,
    language: 'en',
    libraries,
    region: 'au',
  })
  console.log('originFormData.address', originFormData.address)
  const { lat: originlat, lng: originLng } = originFormData.address

  const center = useMemo(() => {
    return originlat && originLng
      ? { lat: originlat, lng: originLng }
      : { lat: -37.8136, lng: 144.9631 }
  }, [originlat])

  const handleMapLoad = (map: google.maps.Map) => {
    dispatch(updateMapScriptStatus())
  }

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
        >
          <Autocomplete>
            <input type="text" />
          </Autocomplete>

          <Marker position={center} />
        </GoogleMap>
      )}
    </MapContainer>
  )
}
