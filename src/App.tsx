import { AddressForm } from './compoments/AddressForm'
import Map from './compoments/Map'
import { AppContainer } from './css/AppContainer'

const App = () => {
  return (
    <AppContainer>
      <aside>
        <AddressForm addressType="origin" />
        <AddressForm addressType="destination" />
      </aside>
      <article className="map-container">
        <Map />
      </article>
    </AppContainer>
  )
}

export default App
