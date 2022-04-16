import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import priceReducer from './price/priceSlice'
import referralsRankerReducer from './referral/referralSlice'

export const store = configureStore({
  reducer: {
    prices: priceReducer,
    referralsRanker: referralsRankerReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
