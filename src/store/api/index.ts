import { combineSlices } from '@reduxjs/toolkit'
import { userReducer } from './user/UserSlice'
import { customerReducer } from './customer/CustomerSlice'

export const apiReducers = combineSlices({
  user: userReducer,
  customer: customerReducer,
})

export * from './user/UserSlice'
export * from './customer/CustomerSlice'
