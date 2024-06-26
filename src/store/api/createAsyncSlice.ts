import { createSlice, PayloadAction, AsyncThunk } from '@reduxjs/toolkit'

export type LoadingState = {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string | null
}

export const createAsyncSlice = <T, ThunkArg, ThunkConfig extends { state: T }>(
  name: string,
  initialState: T,
  asyncThunk: AsyncThunk<T, ThunkArg, ThunkConfig>
) => {
  const slice = createSlice({
    name,
    initialState: {
      data: initialState,
      isLoading: false,
      isSuccess: false,
      isError: false,
      errorMessage: null,
    } as { data: T } & LoadingState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(asyncThunk.pending, (state) => {
          state.isLoading = true
          state.isError = false
          state.isSuccess = false
          state.errorMessage = null
        })
        .addCase(asyncThunk.fulfilled, (state, action: PayloadAction<T>) => {
          for (const key in action.payload) {
            state.data = { ...state.data, [key]: action.payload[key] }
          }

          state.isLoading = false
          state.isError = false
          state.isSuccess = true
          state.errorMessage = null
        })
        .addCase(asyncThunk.rejected, (state, _) => {
          state.isLoading = false
          state.isSuccess = false
          state.isError = true
          state.errorMessage = 'Something went wrong'
        })
    },
  })

  return slice
}
