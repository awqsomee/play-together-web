import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './user'

const rootReducer = combineReducers({
  userToolkit: userSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
