import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  searchQuery: string
  isSearching: boolean
}

const initialState: SearchState = {
  searchQuery: '',
  isSearching: false,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
  },
})

export const { setQuery } = searchSlice.actions

export default searchSlice.reducer
