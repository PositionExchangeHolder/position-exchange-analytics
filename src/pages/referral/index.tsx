import { getToTalReferralResponse } from 'api/referral/referral.api'
import {
  PositionReferral,
  ToTalReferralResponse,
} from 'api/referral/referral.api.type'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'

export default function Referral() {
  const [toTalReferral, setToTalReferral] = useState<PositionReferral>()
  const onFetchDataReferral = async () => {
    const response: ToTalReferralResponse = await getToTalReferralResponse({
      positionReferralId: '1',
    })
    if (isEmpty(response.data.positionReferral)) {
      setToTalReferral(response.data.positionReferral)
    }
  }
  useEffect(() => {
    onFetchDataReferral()
  }, [])
  return <div>index page referral</div>
}
