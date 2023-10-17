import { AddressForm } from './compoments/AddressForm'
import { AppContainer } from './css/AppContainer'

const App = () => {
  return (
    <AppContainer>
      <aside>
        <AddressForm addressType="origin" />
      </aside>
      <article className="map-container"></article>
    </AppContainer>
  )
}

export default App
