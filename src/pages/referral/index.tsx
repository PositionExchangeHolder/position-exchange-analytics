import TotalReferrals from '@/components/referral/TotalReferrals'
import {
  getReferralResponse,
  getToTalReferralResponse,
} from 'api/referral/referral.api'
import {
  PositionReferral,
  ToTalReferralResponse,
  TopReferralResponse,
  TopReferralRecord,
} from 'api/referral/referral.api.type'
import React, { useEffect, useState } from 'react'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import { columnsReferral } from '@/components/transactionTable/columnsReferral'

export default function Referral() {
  const [toTalReferral, setToTalReferral] = useState<PositionReferral>()
  const [referralsRanker, setReferralsRanker] = useState<TopReferralRecord[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    initialFetchData()
  }, [])

  const initialFetchData = async () => {
    try {
      if (isLoading) return
      setIsLoading(true)
      const onGetToTalReferralResponse = getToTalReferralResponse({})
      const ongGetReferralResponse = getReferralResponse()
      const dataReferralResponse: [ToTalReferralResponse, TopReferralResponse] =
        await Promise.all([
          onGetToTalReferralResponse,
          ongGetReferralResponse,
        ]).then((result) => result)
      const [dataPositionReferral, dataReferral] = dataReferralResponse
      setToTalReferral(dataPositionReferral.data.positionReferral)
      setReferralsRanker(dataReferral.data.referrers)
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
