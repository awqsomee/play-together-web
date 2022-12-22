import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth'
import searchSlice from './search/search'
import playersSlice from './players/players'

const rootReducer = combineReducers({
  authToolkit: authSlice,
  searchToolkit: searchSlice,
  playersToolkit: playersSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
