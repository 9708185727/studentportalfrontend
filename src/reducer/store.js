import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
 const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) => // getDefaultMiddleware is part of configureStore, so accessed here
  getDefaultMiddleware({
    serializableCheck: {
      // Ignoring non-serializable values for redux-persist actions
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      // Ignoring paths that may contain non-serializable values
      ignoredPaths: ['register'],
    },
  }),
})
const persistor = persistStore(store)
export {store,persistor}

