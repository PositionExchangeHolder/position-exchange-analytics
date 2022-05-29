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
import { SortOrder } from 'react-data-table-component'
import { AddressReferralQueryOrderBy } from 'store/address/addressSlice'
import { useAppSelector } from 'store/hooks'
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
  const [dataReferralAddress, setDataReferralAddress] = useState<
    RecordsRefAddress[]
  >([])

  const [orderBy, setOrderBy] = useState<string>('id')
  const [orderDirection, setOrderDirection] = useState<string>('desc')

  // const orderBy = useAppSelector(AddressReferralQueryOrderBy)

  const handleChange = (e: any, p: number) => {
    setCurrentPages(p)
  }
  const count = getPageCount(totalPage, PER_PAGE)

  useEffect(() => {
    if (isEmpty(referrerId)) return
    initialFetchData()
  }, [orderBy, referrerId, currentPages, orderDirection])

  const initialFetchData = async () => {
    try {
      if (isLoading) return

      setIsLoading(true)

      const dataReferral: ReferralAddressResponse = await getReferralAddress({
        referrerId,
        first: PER_PAGE,
        skip: (currentPages - 1) * PER_PAGE,
        orderBy,
        orderDirection,
      })
      setDataReferralAddress(dataReferral?.data?.referrer?.recordsRef)
      setTotalPage(Number(dataReferral?.data?.referrer?.totalReferrals) || 1)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }
  const handleSort = (column: any, sortDirection: SortOrder) => {
    setOrderBy(column.sortField)
    setOrderDirection(sortDirection)
    setCurrentPages(1)
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
        onSort={handleSort}
      />
      {!isEmpty(dataReferralAddress) && (
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
      )}
    </div>
  )
}
