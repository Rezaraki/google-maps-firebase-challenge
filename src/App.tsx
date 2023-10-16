import { Provider as ReduxStoreProvider } from 'react-redux'

import { store } from './store'

const App = () => {
  return <ReduxStoreProvider store={store}>app</ReduxStoreProvider>
}

export default App
