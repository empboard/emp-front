import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAsyncSlice } from '../createAsyncSlice'
import axios, { HttpStatusCode } from 'axios'

export type User = {
  userId: number
  email: string
  jobTitle: string
  avatar: string
}

const initialState: User = {
  userId: 0,
  email: '',
  jobTitle: '',
  avatar: '',
}

export const getUserInfo = createAsyncThunk<User, void>(
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

const UserSlice = createAsyncSlice('user', initialState, getUserInfo)

export const userAction = UserSlice.actions
export const userReducer = UserSlice.reducer
