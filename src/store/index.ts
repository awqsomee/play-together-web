import { combineReducers, configureStore } from '@reduxjs/toolkit'
import slice from './slice'

const rootReducer = combineReducers({
  toolkit: slice,
})

export const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
