import WrappedPagination from '@/components/common/WrappedPagination'
import TransactionTable from '@/components/transactionTable'
import { columnsActivitiesAddress } from '@/components/transactionTable/columnsActivitiesAddress'
import { getSwapTransactionsOfAddress } from 'api/address/activities'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { SortOrder } from 'react-data-table-component'
import { SwapTransaction } from 'types/api/address'
import { isAddress } from 'utils/address'
import getPageCount from 'utils/getPageCount'
import { getPostionExchangeUrl } from 'utils/url'

const PER_PAGE = 8

type Props = {
  address: string
}

const Activities = ({ address }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentPages, setCurrentPages] = useState<number>(1)
  const [orderBy, setOrderBy] = useState<string>('createdTimestamp')
  const [orderDirection, setOrderDirection] = useState<string>('desc')
  
  const [activities, setActivities] = useState<SwapTransaction[]>([])

  const handleChange = (e: any, p: number) => {
    setCurrentPages(p)
  }
  const count = getPageCount(totalPage, PER_PAGE)

  useEffect(() => {
    const getActivities = async () => {
      if (isLoading) {
        return
      }
      setIsLoading(true)

      const activities = await getSwapTransactionsOfAddress({
        address: address.toLowerCase(),
        skip: (currentPages - 1) * PER_PAGE,
        first: PER_PAGE,
        orderBy,
        orderDirection
      })

      if (activities) {
        setActivities(activities.swapTransactions)
        setTotalPage(activities.totalSwapTransactions)
        setIsLoading(false)
      }
    }
    
    if (isAddress(address)) {
      getActivities()
    }
  }, [address, currentPages, orderBy, orderDirection])

  const handleSort = (column: any, sortDirection: SortOrder) => {
    setOrderBy(column.sortField)
    setOrderDirection(sortDirection)
    setCurrentPages(1)
  }

  return (
    <div>
      <TransactionTable
        transactions={activities || []}
        titleTable='Activities'
        isLoading={isLoading}
        columns={columnsActivitiesAddress}
        onSort={handleSort}
        noDataReferralLink={getPostionExchangeUrl('swap')}
      />
      {
        !isEmpty(activities) && (
          <div className="flex justify-center items-center my-6">
            <WrappedPagination
              count={count}
              page={currentPages}
              onChange={handleChange}
            />
          </div>
        )
      }
    </div>
  )
}

export default Activities
