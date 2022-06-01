import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getReferralAddress } from 'api/referral/referral'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import {  ReferralRecord } from 'types/api/referral'
import { SortOrder } from 'react-data-table-component'
import getPageCount from 'utils/getPageCount'
import WrappedPagination from '@/components/common/WrappedPagination'
import { columnsReferralAddress } from '@/components/transactionTable/columnsReferralAddress'

const PER_PAGE = 10

type Props = {
  referrerId: string
}

export default function TableDataReferralsAddress({ referrerId }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentPages, setCurrentPages] = useState<number>(1)
  const [dataReferralAddress, setDataReferralAddress] = useState<ReferralRecord[] | undefined>([])

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

      const dataReferral = await getReferralAddress({
        referrerId,
        first: PER_PAGE,
        skip: (currentPages - 1) * PER_PAGE,
        orderBy,
        orderDirection,
      })
      setDataReferralAddress(dataReferral?.recordsRef)
      setTotalPage(Number(dataReferral?.totalReferrals) || 1)
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
          <WrappedPagination
            count={count}
            page={currentPages}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  )
}
