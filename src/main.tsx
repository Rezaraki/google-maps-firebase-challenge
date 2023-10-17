import ReactDOM from 'react-dom/client'
import { Provider as ReduxStoreProvider } from 'react-redux'

import App from './App'
import { store } from './store'

import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxStoreProvider store={store}>
    <App />
  </ReduxStoreProvider>,
)
