import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'
import { initialReferralsRanker } from './referral'

export const referralsRankerSlice = createSlice({
  name: 'referralsRanker',
  initialState: initialReferralsRanker,
  reducers: {
    setDataTopReferralsRanker(state, action) {
      state.topReferralsRanker = action.payload
    },
    setOrderByTopReferralsRanker(state, action) {
      state.orderBy = action.payload
    },
  },
})

export const ReferralsRankerSelector = (state: RootState) =>
  state.referralsRanker.topReferralsRanker

export const ReferralsRankerOrderBySelector = (state: RootState) =>
  state.referralsRanker.orderBy

export const { setDataTopReferralsRanker, setOrderByTopReferralsRanker } =
  referralsRankerSlice.actions

export default referralsRankerSlice.reducer
