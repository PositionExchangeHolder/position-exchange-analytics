import TotalReferrals from '@/components/referral/TotalReferrals'
import { getToTalReferralResponse } from 'api/referral/referral.api'
import {
  PositionReferral,
  ToTalReferralResponse,
} from 'api/referral/referral.api.type'
import React, { useEffect, useState } from 'react'

export default function Referral() {
  const [toTalReferral, setToTalReferral] = useState<PositionReferral>()
  const onFetchDataReferral = async () => {
    const response: ToTalReferralResponse = await getToTalReferralResponse({
      positionReferralId: '1',
    })
    setToTalReferral(response.data.positionReferral)
  }
  useEffect(() => {
    onFetchDataReferral()
  }, [])
  return (
    <div className="relative bg-light-primary dark:bg-primary w-full  mt-10  md:mt-16   px-6  xl:px-0">
      <TotalReferrals toTalReferral={toTalReferral} />
    </div>
  )
}
