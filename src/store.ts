import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import appReducer from './services/redux/appSlice'

export const store = configureStore({
  reducer: combineReducers({
    app: appReducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
