import { createSlice } from '@reduxjs/toolkit'
import { getUserInfo } from './actions'

export type User = {
  userId: number
  email: string
  jobTitle: string
  avatar: string
}

export type UserState = {
  user: User | null
  loading: boolean
  error: boolean
  errorMessage: string | null
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: false,
  errorMessage: null,
}

const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.loading = true
        state.error = false
        state.errorMessage = null
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.loading = false
        state.error = true
        state.user = null
        state.errorMessage = action.error.message || 'Something went wrong'
      })
  },
})

export const userAction = UserSlice.actions
export const userReducer = UserSlice.reducer
