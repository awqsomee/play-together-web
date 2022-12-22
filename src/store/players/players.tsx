import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlayer } from '../../models/IPlayer'

interface PlayersState {
  players: IPlayer[]
  isLoading: boolean
  error: string
}

const initialState: PlayersState = {
  players: [],
  isLoading: false,
  error: '',
}

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers(state, action: PayloadAction<IPlayer[]>) {
      state.players = action.payload
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

export const { setPlayers, setError, setIsLoading } = playersSlice.actions

export default playersSlice.reducer
