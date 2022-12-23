import axios from 'axios'
import { AppDispatch } from '..'
import { localhost } from '../serverAdress'
import { setError, setIsLoading, setUser } from './auth'

export const authActions = {
  registration: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true))
      axios
        .post(`${localhost}/api/auth/registration`, { username, password })
        .then((response) => {
          localStorage.setItem('auth', response.data.token)
          localStorage.setItem('username', response.data.user.username)
          dispatch(setUser(response.data.user))
          dispatch(setError(''))
        })
        .catch((error) => {
          dispatch(setError(error.response.data.message))
        })
    } catch (e) {
      console.log(e)
    }
  },

  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true))
      await axios
        .post(`${localhost}/api/auth/login`, { username, password })
        .then((response) => {
          localStorage.setItem('auth', response.data.token)
          localStorage.setItem('username', response.data.user.username)
          dispatch(setUser(response.data.user))
          dispatch(setError(''))
        })
        .catch((error) => {
          dispatch(setError(error.response.data.message))
        })
    } catch (e) {
      console.log(e)
    }
  },

  auth: () => async (dispatch: AppDispatch) => {
    try {
      console.log('au')

      await axios
        .get(`${localhost}/api/auth`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('auth')}`,
          },
        })
        .then((response) => {
          dispatch(setUser(response.data.user))
          localStorage.setItem('stonksToken', response.data.token)
        })
        .catch((error) => {
          localStorage.removeItem('stonksToken')
          dispatch(setError(error.response.data.message))
        })
    } catch (e) {
      console.log(e)
    }
  },
}
