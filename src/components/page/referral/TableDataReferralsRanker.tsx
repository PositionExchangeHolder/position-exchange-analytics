import { columnsReferral } from '@/components/transactionTable/columnsReferral'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getTopReferral } from 'api/referral/referral'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  ReferralsRankerOrderBySelector,
  ReferralsRankerSelector,
  setDataTopReferralsRanker,
} from 'store/referral/referralSlice'

export default function TableDataReferralsRanker() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const referralsRanker = useAppSelector(ReferralsRankerSelector)
  const orderBy = useAppSelector(ReferralsRankerOrderBySelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    initialFetchData()
  }, [orderBy])

  const initialFetchData = async () => {
    try {
      if (isLoading) return
      setIsLoading(true)
      const topReferral = await getTopReferral({ orderBy })
      dispatch(setDataTopReferralsRanker(topReferral))
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TransactionTable
      transactions={referralsRanker || []}
      titleTable={'LEADERBOARD'}
      isLoading={isLoading}
      columns={columnsReferral}
    />
  )
}
