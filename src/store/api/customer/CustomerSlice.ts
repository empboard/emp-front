import { createAsyncThunk } from '@reduxjs/toolkit'
import { createAsyncSlice } from '../createAsyncSlice'
import axios, { HttpStatusCode } from 'axios'

export type CustomerCommentType = {
  uuid: string
  name: string
  jobTitle: string
  company: string
  avatar: string
  comment: string
}

export type CustomerCommentState = {
  data: CustomerCommentType[]
}

const initialState: CustomerCommentState = {
  data: [],
}

export const getCustomerComments = createAsyncThunk<CustomerCommentState, void>(
  '@customer/getCustomerComments',
  async () => {
    const response = await axios.get<CustomerCommentState>(
      'http://localhost:3000/api/customer/index.json'
    )
    if (response.status !== HttpStatusCode.Ok) {
      throw new Error('Failed to fetch Customer Comments')
    }

    return response.data
  }
)

const customerSlice = createAsyncSlice(
  'customer',
  initialState,
  getCustomerComments
)

export const customerAction = customerSlice.actions
export const customerReducer = customerSlice.reducer
