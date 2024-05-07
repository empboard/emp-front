import { useEffect } from 'react'
import { getCustomerComments, useAppDispatch, useAppSelector } from '../store'

export const useCustomerComments = () => {
  const dispatch = useAppDispatch()
  const { data, isSuccess, isLoading, isError } = useAppSelector(
    ({ apiReducers }) => apiReducers.customer
  )

  useEffect(() => {
    dispatch(getCustomerComments())
  }, [])

  return { comments: data.data, isSuccess, isLoading, isError }
}
