import axios from 'axios'
import { AppDispatch } from '..'
import { localhost } from '../serverAdress'
import { setError, setIsLoading, setUser } from './auth'

export const authActions = {
  registration: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true))
      const response = await axios.post(`${localhost}/auth/registration`, { username, password })
      if (response.status === 201) {
        localStorage.setItem('auth', response.data.token)
        localStorage.setItem('username', username)
        dispatch(setUser({ username, password }))
        dispatch(setError(''))
      } else dispatch(setError('Registration Error'))
    } catch (e) {
      console.log(e)
      dispatch(setError('Registration Error'))
    }
  },
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true))
      const response = await axios.post(`${localhost}/auth/login`, { username, password })
      if (response.status === 201) {
        localStorage.setItem('auth', response.data.token)
        localStorage.setItem('username', username)
        dispatch(setUser({ username, password }))
        dispatch(setError(''))
      } else dispatch(setError('Login Error'))
    } catch (e) {
      console.log(e)
      dispatch(setError('Login Error'))
    }
  },
}
