import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth'

const rootReducer = combineReducers({
  authToolkit: authSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
