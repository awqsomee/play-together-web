import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import type { RootState } from '../index'

interface AuthState {
  user: IUser
  isAuth: boolean
  error: string
  isLoading: boolean
}

const initialState: AuthState = {
  user: {} as IUser,
  isAuth: false,
  error: '',
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload
      state.isAuth = true
      state.isLoading = false
    },
    logout(state) {
      localStorage.removeItem('auth')
      localStorage.removeItem('username')
      state.user = {} as IUser
      state.isAuth = false
      state.isLoading = false
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.isLoading = false
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export const { setUser, logout, setError, setIsLoading } = authSlice.actions

export const selectUser = (state: RootState) => state.authToolkit.user
export const selectAuth = (state: RootState) => state.authToolkit.isAuth
export const selectError = (state: RootState) => state.authToolkit.error
export const selectIsLoading = (state: RootState) => state.authToolkit.isLoading
export default authSlice.reducer
