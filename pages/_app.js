import '../styles/globals.css'
import { Provider } from 'react-redux'
import { BrowserRouter  } from 'next/link'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import Theme from 'pages/components/template/Theme'
import Layout from 'pages/components/layout'
import mockServer from './mock'
import appConfig from 'pages/configs/app.config'
import './locales'

const environment = process.env.NODE_ENV


/**
 * Set enableMock(Default false) to true at configs/app.config.js 
 * If you wish to enable mock api
 */
if (environment !== 'production' && appConfig.enableMock) {
	mockServer({ environment })
}

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
        <Theme>
          <Layout />
        </Theme>
			</PersistGate>
		</Provider>
	)
}

export default App

