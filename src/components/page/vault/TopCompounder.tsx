import TransactionTable from '@/components/transactionTable'
import { TableColumn } from 'react-data-table-component'
import RowData from '@/components/transactionTable/RowData'
import { getTopCompounder } from 'api/vault/leaderboard'
import React, { useEffect, useState } from 'react'
import { Compounder } from 'types/api/vault'
import { Address } from '@/components/common/Address'

const columns: TableColumn<Compounder>[] = [
  {
    name: 'Rank',
    cell: (_, index) => (
      <RowData data={(index + 1).toString()} />
    ),
    width: '100px',
  },
  {
    name: 'Address',
    cell: (row) => <Address address={row?.id} />,
    width: '150px',
  },
  {
    name: 'Compounds',
    cell: (row) => <RowData data={row?.totalCompoundTransactions} />,
    width: '110px',
  }
]

const TopCompounder = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [topCompounder, setTopCompounder] = useState<Compounder[]>([])
  
  useEffect(() => {
    const fetchTopCompounder = async () => {
      if (isLoading) {
        return
      }
      setIsLoading(true)
      const res = await getTopCompounder({})
      if (res) {
        setTopCompounder(res)
        setIsLoading(false)
      }
    }

    fetchTopCompounder()
  }, [])
  
  return (
    <>
      <TransactionTable
        transactions={topCompounder}
        titleTable='Top Compounder'
        isLoading={isLoading}
        columns={columns}
      />
    </>
  )
}

export default TopCompounder
