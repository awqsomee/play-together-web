import axios from 'axios'
import { AppDispatch } from '..'
import { IGame } from '../../models/IGame'
import { localhost } from '../serverAdress'
import { setError, setGames, setIsLoading } from './games'

export const gamesActions = {
  getGames: (query: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true))
      if (query != '') {
        const response = await axios.get<IGame[]>(`${localhost}/api/games`)
        if (response.status === 200) {
          dispatch(setGames(response.data))
          dispatch(setError(''))
        } else dispatch(setError(response.statusText))
      } else {
        const response = await axios.get<IGame[]>(`${localhost}/api/games`)
        if (response.status === 200) {
          dispatch(setGames(response.data))
          dispatch(setError(''))
        } else dispatch(setError(response.statusText))
      }
    } catch (e) {
      console.log(e)
      dispatch(setError('Find Players Error'))
    }
  },
}
