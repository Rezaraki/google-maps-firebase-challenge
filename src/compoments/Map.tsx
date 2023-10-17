import GoogleMapReact from 'google-map-react'
import origin from '../assets/imgs/origin_pin.png'
import styled from '@emotion/styled'

export const MapContainer = styled.div(
  {
    width: '100%',
    height: '100%',
    '.origin-marker': {
      width: 20,
      height: 30,
      transform: 'translate(-10,-30)',
    },
  },
  { label: 'map-container' },
)

const AnyReactComponent = ({ text, lat, lng }: any) => (
  <img className="origin-marker" src={origin} alt="origin-marker" />
)

export default function Map() {
  const defaultProps = {
    center: {
      lat: -37.8136,
      lng: 144.9631,
    },
    zoom: 11,
  }

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_MAP_KEY,
          libraries: ['places', 'geometry', 'drawing', 'visualization'],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={-37.8136} lng={144.9631} text="My Marker" />
      </GoogleMapReact>
    </MapContainer>
  )
}
