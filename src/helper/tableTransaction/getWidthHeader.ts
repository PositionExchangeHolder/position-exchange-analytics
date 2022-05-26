import { TableColumn } from 'react-data-table-component'
import { setOrderByTopReferralsRanker } from 'store/referral/referralSlice'
import {
  referralTableTitle,
  addressNftTableTitle,
  addressReferralTableTitle
} from 'helper/tableTransaction/config'
import { setAddressNftQueryOrderBy, setAddressReferralQueryOrderBy } from 'store/address/addressSlice'

export const getWidthHeader = <T>(data: TableColumn<T>[]) => {
  const initialValue = 0
  const sumWithInitial = data.reduce(
    (previousValue, currentValue) =>
      previousValue + getWidthColumnStyle(currentValue),
    initialValue
  )
  return sumWithInitial
}
const getWidthColumnStyle = (item: any) => {
  const width = item?.width?.replace('px', '')
  return +width
}

export const getFilterActionTransactionTable = (name: string) => {
  switch (name) {
    // Referral
    case referralTableTitle.totalCommissions:
      return setOrderByTopReferralsRanker('totalReferralCommissions') as any
    case referralTableTitle.totalReferrals:
      return setOrderByTopReferralsRanker('totalReferrals') as any

    // Address:nft
    case addressNftTableTitle.id:
      return setAddressNftQueryOrderBy('id')
    case addressNftTableTitle.grade:
      return setAddressNftQueryOrderBy('grade')
    case addressNftTableTitle.amount:
      return setAddressNftQueryOrderBy('amount')
    case addressNftTableTitle.createdAt:
      return setAddressNftQueryOrderBy('createdTime')
    case addressNftTableTitle.lastUpdated:
      return setAddressNftQueryOrderBy('updatedTimestamp')

    // Address:referral
    case addressReferralTableTitle.commissionEarned:
      return setAddressReferralQueryOrderBy('totalCommissionsEarnedForReferrer')
    case addressReferralTableTitle.lastUpdated:
      return setAddressReferralQueryOrderBy('updatedTimestamp')
    
    default:
      return null
  }
}
