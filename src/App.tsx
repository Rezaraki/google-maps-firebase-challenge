import { AddressForm } from './compoments/AddressForm'
import Map from './compoments/Map'
import { ParcelType } from './compoments/ParcelType'
import { TransportOptions } from './compoments/TransportOptions'
import { AppContainer } from './css/AppContainer'

const App = () => {
  return (
    <AppContainer>
      <aside>
        <AddressForm addressType="origin" />
        <AddressForm addressType="destination" />
        <ParcelType />
        <TransportOptions />
      </aside>
      <article className="map-container">
        <Map />
      </article>
    </AppContainer>
  )
}

export default App
