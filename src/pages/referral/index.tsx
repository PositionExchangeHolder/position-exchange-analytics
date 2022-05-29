import TableDataReferralsRanker from '@/components/referral/TableDataReferralsRanker'
import HeadSEO from '@/components/layout/HeadSEO'
import TotalReferrals from '@/components/referral/TotalReferrals'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'store/hooks'
import { ReferralsRankerOrderBySelector } from 'store/referral/referralSlice'
import { getReferralStatistics } from 'api/referral/statistics'
import { ReferralStatistics } from 'types/api/referral'

export default function Referral() {
  const [referralStatistics, setReferralStatistics] = useState<ReferralStatistics>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const orderBy = useAppSelector(ReferralsRankerOrderBySelector)

  useEffect(() => {
    initialFetchData()
  }, [orderBy])

  const initialFetchData = async () => {
    try {
      if (isLoading) return
      setIsLoading(true)
      const statistics = await getReferralStatistics()
      setReferralStatistics(statistics)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <HeadSEO
        title='Position Referral'
        description='Position Referral'
      />
      <div className="relative px-6 mt-10 w-full md:mt-16 xl:px-0">
        <TotalReferrals toTalReferral={referralStatistics} />
        <div className="pt-16">
          <TableDataReferralsRanker />
        </div>
      </div>
    </>
  )
}
