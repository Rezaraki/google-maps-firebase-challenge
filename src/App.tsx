import { AddressForm } from './compoments/AddressForm'
import Map from './compoments/Map'
import { ParcelType } from './compoments/ParcelType'
import { TransportOptions } from './compoments/TransportOptions'
import { ADDRESS_TYPE } from './constatnts'
import { AppContainer } from './css/AppContainer'

const App = () => {
  return (
    <AppContainer>
      <aside>
        <AddressForm addressType={ADDRESS_TYPE.origin} />
        <AddressForm addressType={ADDRESS_TYPE.destination} />
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
