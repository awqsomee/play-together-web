import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

interface UserState {
  currentUser: object
  isAuth: boolean
}

const initialState: UserState = {
  currentUser: {},
  isAuth: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<object>) {
      state.currentUser = action.payload
      state.isAuth = true
    },
    logout(state) {
      localStorage.removeItem('stonksToken')
      state.currentUser = {}
      state.isAuth = false
    },
  },
})

export const { setUser: SetUserAction, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.userToolkit.currentUser
export default userSlice.reducer
