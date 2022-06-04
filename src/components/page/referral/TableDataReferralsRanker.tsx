import { columnsReferral } from '@/components/transactionTable/columnsReferral'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getTopReferral } from 'api/referral/referral'
import React, { useEffect, useState } from 'react'
import { SortOrder } from 'react-data-table-component'
import { TopReferral } from 'types/api/referral'

export default function TableDataReferralsRanker() {
  const [referralsRanker, setReferralsRanker] = useState<TopReferral>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [orderBy, setOrderBy] = useState<string>('totalReferrals')
  const [orderDirection, setOrderDirection] = useState<string>('desc')

  useEffect(() => {
    const initialFetchData = async () => {
      try {
        if (isLoading) return
        setIsLoading(true)
        const topReferral = await getTopReferral({
          orderBy,
          orderDirection
        })
        setReferralsRanker(topReferral)
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    }

    initialFetchData()
  }, [orderBy, orderDirection])

  const handleSort = (column: any, sortDirection: SortOrder) => {
    setOrderBy(column.sortField)
    setOrderDirection(sortDirection)
  }
  
  return (
    <TransactionTable
      transactions={referralsRanker || []}
      titleTable={'LEADERBOARD'}
      isLoading={isLoading}
      columns={columnsReferral}
      onSort={handleSort}
    />
  )
}
