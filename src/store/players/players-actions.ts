import axios from 'axios'
import { AppDispatch } from '..'
import { IPlayer } from '../../models/IPlayer'
import { localhost } from '../serverAdress'
import { setError, setIsLoading, setPlayers } from './players'

export const playersActions = {
  getPlayers: (titles: string[]) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true))
      if (titles) {
        const response = await axios.post<IPlayer[]>(`${localhost}/api/users/search`, { titles })

        if (response.status === 201) {
          dispatch(setPlayers(response.data))
          dispatch(setError(''))
        } else dispatch(setError(response.statusText))
      } else {
        const response = await axios.get<IPlayer[]>(`${localhost}/api/users/search`)
        if (response.status === 201) {
          dispatch(setPlayers(response.data))
          dispatch(setError(''))
        } else dispatch(setError(response.statusText))
      }
    } catch (e) {
      console.log(e)
      dispatch(setError('Find Players Error'))
    }
  },
}
