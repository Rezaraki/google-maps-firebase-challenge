import { AddressForm } from './compoments/AddressForm'
import Map from './compoments/Map'
import { ParcelForm } from './compoments/ParcelForm'
import { AppContainer } from './css/AppContainer'

const App = () => {
  return (
    <AppContainer>
      <aside>
        <AddressForm addressType="origin" />
        <AddressForm addressType="destination" />
        <ParcelForm />
      </aside>
      <article className="map-container">
        <Map />
      </article>
    </AppContainer>
  )
}

export default App
