import { columnsReferral } from '@/components/transactionTable/columnsReferral'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getTopReferralResponse } from 'api/referral/referral.api'
import { TopReferralResponse } from 'api/referral/referral.api.type'
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
      const onGetTopReferralResponse = getTopReferralResponse({ orderBy })
      const dataReferralResponse: [TopReferralResponse] = await Promise.all([
        onGetTopReferralResponse,
      ]).then((result) => result)
      const [dataReferral] = dataReferralResponse
      dispatch(setDataTopReferralsRanker(dataReferral.data.referrers))
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
      showCustomHeader
    />
  )
}
