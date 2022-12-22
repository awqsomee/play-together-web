import axios from 'axios'
import { AppDispatch } from '..'
import { IPlayer } from '../../models/IPlayer'
import { localhost } from '../serverAdress'
import { setError, setIsLoading, setPlayers } from './players'

export const authActions = {
  getPlayersWithQuery: (query: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true))
      const response = await axios.get<IPlayer[]>(`${localhost}/api/users?title=${query}`)
      if (response.status === 200) {
        dispatch(setPlayers(response.data))
        dispatch(setError(''))
      } else dispatch(setError(response.statusText))
    } catch (e) {
      console.log(e)
      dispatch(setError('Find Players Error'))
    }
  },
}
