import TableDataReferralsRanker from '@/components/referral/TableDataReferralsRanker'
import TotalReferrals from '@/components/referral/TotalReferrals'
import { getToTalReferralResponse } from 'api/referral/referral.api'
import {
  PositionReferral,
  ToTalReferralResponse,
} from 'api/referral/referral.api.type'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'store/hooks'
import { ReferralsRankerOrderBySelector } from 'store/referral/referralSlice'

export default function Referral() {
  const [toTalReferral, setToTalReferral] = useState<PositionReferral>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const orderBy = useAppSelector(ReferralsRankerOrderBySelector)

  useEffect(() => {
    initialFetchData()
  }, [orderBy])

  const initialFetchData = async () => {
    try {
      if (isLoading) return
      setIsLoading(true)
      const onGetToTalReferralResponse = getToTalReferralResponse({})
      const dataReferralResponse: [ToTalReferralResponse] = await Promise.all([
        onGetToTalReferralResponse,
      ]).then((result) => result)
      const [dataPositionReferral] = dataReferralResponse
      setToTalReferral(dataPositionReferral.data.positionReferral)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative  px-6  mt-10  w-full   md:mt-16  xl:px-0">
      <TotalReferrals toTalReferral={toTalReferral} />
      <div className="pt-16">
        <TableDataReferralsRanker />
      </div>
    </div>
  )
}
