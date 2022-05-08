import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getReferralAddress } from 'api/address/address.api'
import {
  RecordsRefAddress,
  ReferralAddressResponse,
} from 'api/address/address.api.type'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'store/hooks'
import { ReferralsRankerOrderBySelector } from 'store/referral/referralSlice'
import { columnsReferralAddress } from '../transactionTable/columnsReferralAddress'
export default function TableDataReferralsAddress({
  referrerId,
}: {
  referrerId: string
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [dataReferralAddress, setDataReferralAddress] = useState<
    RecordsRefAddress[]
  >([])

  const orderBy = useAppSelector(ReferralsRankerOrderBySelector)

  useEffect(() => {
    if (isEmpty(referrerId)) return
    initialFetchData()
  }, [orderBy, referrerId])

  const initialFetchData = async () => {
    try {
      if (isLoading) return

      setIsLoading(true)

      const dataReferral: ReferralAddressResponse = await getReferralAddress({
        orderBy: 'updatedTimestamp',
        referrerId,
      })
      setDataReferralAddress(dataReferral?.data?.referrer?.recordsRef)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TransactionTable
      transactions={dataReferralAddress || []}
      titleTable={'REFFERALS'}
      isLoading={isLoading}
      columns={columnsReferralAddress}
      showCustomHeader
    />
  )
}
