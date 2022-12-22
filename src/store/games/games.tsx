import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGame } from '../../models/IGame'
import { IPlayer } from '../../models/IPlayer'

interface GamesState {
  games: IGame[]
  selectedGames: string[]
  isLoading: boolean
  error: string
}

const initialState: GamesState = {
  games: [],
  selectedGames: [],
  isLoading: false,
  error: '',
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames(state, action: PayloadAction<IGame[]>) {
      state.games = action.payload
      state.isLoading = false
    },
    setSelectedGames(state, action: PayloadAction<string[]>) {
      state.selectedGames = action.payload
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

export const { setGames, setError, setIsLoading, setSelectedGames } = gamesSlice.actions

export default gamesSlice.reducer
