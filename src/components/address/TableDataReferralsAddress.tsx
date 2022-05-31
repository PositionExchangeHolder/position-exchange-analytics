import TransactionTable from '@/components/transactionTable/TransactionTable'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { getReferralAddress } from 'api/referral/referral'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { AddressReferralQueryOrderBy } from 'store/address/addressSlice'
import { useAppSelector } from 'store/hooks'
import {  ReferralRecord } from 'types/api/referral'
import getPageCount from 'utils/getPageCount'
import { columnsReferralAddress } from '../transactionTable/columnsReferralAddress'

const PER_PAGE = 10

type Props = {
  referrerId: string
}

export default function TableDataReferralsAddress({ referrerId }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentPages, setCurrentPages] = useState<number>(1)
  const [dataReferralAddress, setDataReferralAddress] = useState<ReferralRecord[] | undefined>([])
  
  const orderBy = useAppSelector(AddressReferralQueryOrderBy)

  const handleChange = (e: any, p: number) => {
    setCurrentPages(p)
  }
  const count = getPageCount(totalPage, PER_PAGE)

  useEffect(() => {
    if (isEmpty(referrerId)) return
    initialFetchData()
  }, [orderBy, referrerId, currentPages])

  const initialFetchData = async () => {
    try {
      if (isLoading) return

      setIsLoading(true)

      const dataReferral = await getReferralAddress({
        referrerId,
        first: PER_PAGE,
        skip: (currentPages - 1) * PER_PAGE,
        orderBy: orderBy
      })
      setDataReferralAddress(dataReferral?.recordsRef)
      setTotalPage(Number(dataReferral?.totalReferrals) || 1)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
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
        titleTable={'REFERRALS'}
        isLoading={isLoading}
        columns={columnsReferralAddress}
        showCustomHeader
      />
      {
        !isEmpty(dataReferralAddress) && (
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
        )
      }
    </div>
  )
}
