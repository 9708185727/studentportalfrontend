import React from 'react'
import Routes from './Routes'
import { Provider } from 'react-redux'
import { persistor, store } from './reducer/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Routes/>
        <ToastContainer />
      </PersistGate>
    
    </Provider>
    </div>
  )
}

export default App
