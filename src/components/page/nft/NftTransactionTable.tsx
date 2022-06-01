import React, { useCallback, useEffect, useState } from 'react'
import Pagination from '@/components/pagination'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import FilterTransactionTable from '@/components/page/nft/FilterTransactionTable'
import { listFilterTransaction } from 'common/nft/nft.type'
import { FilterTransaction, NftTransaction } from 'types/api/nft'
import { getNftTransactions } from 'api/nft/transactions'


const NftTransactionTable = () => {
  const [dataTransaction, setDataTransaction] = useState<NftTransaction[] | undefined>([])
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)
  const [isLoading, setLoading] = React.useState(false)

  const onSetCurrentFilter = useCallback((filter: any) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])

  useEffect(() => {
    const fetchDataTransaction = async () => {
      if (isLoading) return
      setLoading(true)
      const transactions =
        await getNftTransactions({
          action: currentFilter,
          skip: skipPage,
        })
      setLoading(false)
      setDataTransaction(transactions)
    }
    fetchDataTransaction()
  }, [currentFilter, skipPage])

  return (
    <>
      <TransactionTable
          transactions={dataTransaction}
          titleTable={'TRANSACTIONS'}
          isLoading={isLoading}
          customFilterHeader={() => (
            <FilterTransactionTable
              currentFilter={currentFilter}
              listFilterTransaction={listFilterTransaction}
              setCurrentFilter={onSetCurrentFilter}
            />
          )}
        />
        <Pagination
          currentItem={skipPage}
          setNextItem={setSkipPage}
          skip={10}
        />
    </>
  )
}

export default NftTransactionTable
