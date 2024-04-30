import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { HttpStatusCode } from 'axios'
import { User } from './slice'

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
