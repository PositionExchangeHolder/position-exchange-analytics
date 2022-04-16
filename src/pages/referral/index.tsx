import TotalReferrals from '@/components/referral/TotalReferrals'
import { columnsReferral } from '@/components/transactionTable/columnsReferral'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import {
  getTopReferralResponse,
  getToTalReferralResponse,
} from 'api/referral/referral.api'
import {
  PositionReferral,
  TopReferralResponse,
  ToTalReferralResponse,
} from 'api/referral/referral.api.type'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  ReferralsRankerOrderBySelector,
  ReferralsRankerSelector,
  setDataTopReferralsRanker,
} from 'store/referral/referralSlice'

export default function Referral() {
  const [toTalReferral, setToTalReferral] = useState<PositionReferral>()
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
      const onGetToTalReferralResponse = getToTalReferralResponse({})
      const onGetTopReferralResponse = getTopReferralResponse({ orderBy })
      const dataReferralResponse: [ToTalReferralResponse, TopReferralResponse] =
        await Promise.all([
          onGetToTalReferralResponse,
          onGetTopReferralResponse,
        ]).then((result) => result)
      const [dataPositionReferral, dataReferral] = dataReferralResponse
      setToTalReferral(dataPositionReferral.data.positionReferral)
      dispatch(setDataTopReferralsRanker(dataReferral.data.referrers))
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative  w-full  mt-10  md:mt-16   px-6  xl:px-0">
      <TotalReferrals toTalReferral={toTalReferral} />
      <div className="pt-16">
        <TransactionTable
          transactions={referralsRanker || []}
          titleTable={'LEADERBOARD'}
          isLoading={isLoading}
          columns={columnsReferral}
          showCustomHeader
        />
      </div>
    </div>
  )
}
