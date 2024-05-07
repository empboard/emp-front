import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAsyncSlice } from '../createAsyncSlice'
import axios, { HttpStatusCode } from 'axios'

export type UserState = {
  userId: number
  email: string
  jobTitle: string
  avatar: string
}

const initialState: UserState = {
  userId: 0,
  email: '',
  jobTitle: '',
  avatar: '',
}

export const getUserInfo = createAsyncThunk<UserState, void>(
  '@user/getUserInfo',
  async () => {
    const response = await axios.get(
      'http://localhost:3000/api/user/index.json'
    )
    if (response.status !== HttpStatusCode.Ok) {
      throw new Error('Failed to fetch Users')
    }

    return response.data
  }
)

const userSlice = createAsyncSlice('user', initialState, getUserInfo)

export const userAction = userSlice.actions
export const userReducer = userSlice.reducer
