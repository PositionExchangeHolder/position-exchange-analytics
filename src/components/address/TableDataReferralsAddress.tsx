import TransactionTable from '@/components/transactionTable/TransactionTable'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
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
const PER_PAGE = 10

export default function TableDataReferralsAddress({
  referrerId,
}: {
  referrerId: string
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentPages, setCurrentPages] = useState<number>(1)

  const [dataReferralAddress, setDataReferralAddress] = useState<
    RecordsRefAddress[]
  >([])

  const orderBy = useAppSelector(ReferralsRankerOrderBySelector)

  useEffect(() => {
    if (isEmpty(referrerId)) return
    initialFetchData()
  }, [orderBy, referrerId, currentPages])

  const initialFetchData = async () => {
    try {
      if (isLoading) return

      setIsLoading(true)

      const dataReferral: ReferralAddressResponse = await getReferralAddress({
        orderBy: 'updatedTimestamp',
        referrerId,
        skip: (currentPages - 1) * PER_PAGE,
      })
      setDataReferralAddress(dataReferral?.data?.referrer?.recordsRef)
      setTotalPage(+dataReferral?.data?.referrer?.totalReferrals)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  const count = Math.ceil(totalPage / PER_PAGE)

  const handleChange = (e: any, p: number) => {
    setCurrentPages(p)
  }
  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: 'white',
      },
    },
  }))
  const classes = useStyles()

  return (
    <div>
      <TransactionTable
        transactions={dataReferralAddress || []}
        titleTable={'REFFERALS'}
        isLoading={isLoading}
        columns={columnsReferralAddress}
        showCustomHeader
      />
      <div className="flex justify-center items-center mt-6">
        <Pagination
          classes={{ ul: classes.ul }}
          color="primary"
          count={count}
          size="large"
          page={currentPages}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
