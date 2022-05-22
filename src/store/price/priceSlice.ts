import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from 'store/store'
import { PRICE_ENDPOINT } from 'utils/constants'
import { DataPriceResponse, initialStatePrice } from './priceSlice.type'

export const getPrice = createAsyncThunk('prices/getPrice', async () => {
  const response: DataPriceResponse = await axios.get(PRICE_ENDPOINT)
  return response.data
})

export const priceSlice = createSlice({
  name: 'prices',
  initialState: initialStatePrice,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPrice.fulfilled, (state, action) => {
      state.prices = action.payload.prices
    })
  },
})

export const selectPrice = (state: RootState) => state.prices

export default priceSlice.reducer
