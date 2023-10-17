import GoogleMapReact from 'google-map-react'
import origin from '../assets/imgs/origin_pin.png'

const AnyReactComponent = ({ text, lat, lng }: any) => (
  <div>{<img src={origin} />}</div>
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
    <GoogleMapReact
      bootstrapURLKeys={{ key: import.meta.env.VITE_MAP_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={-37.8136} lng={144.9631} text="My Marker" />
    </GoogleMapReact>
  )
}
