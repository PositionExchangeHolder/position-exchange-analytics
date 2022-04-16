import { TableColumn } from 'react-data-table-component'
import { setOrderByTopReferralsRanker } from 'store/referral/referralSlice'

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
    case 'Total Commissions':
      return setOrderByTopReferralsRanker('totalReferralCommissions') as any

    case 'Total Referrals':
      return setOrderByTopReferralsRanker('totalReferrals') as any
  }
}
