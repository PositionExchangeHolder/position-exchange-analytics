import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'
import { initialAddressState } from './address'

export const addressSlice = createSlice({
  name: 'Address',
  initialState: initialAddressState,
  reducers: {
    setAddressNftQueryOrderBy(state, action) {
      state.nftQueryOrderBy = action.payload
    },
    setAddressReferralQueryOrderBy(state, action) {
      state.referralQueryOrderBy = action.payload
    }
  }
})

export const AddressNftQueryOrderBy = (state: RootState) => {
  return state.address.nftQueryOrderBy
}

export const AddressReferralQueryOrderBy = (state: RootState) => {
  return state.address.referralQueryOrderBy
}

export const {
  setAddressNftQueryOrderBy,
  setAddressReferralQueryOrderBy
} = addressSlice.actions

export default addressSlice.reducer
