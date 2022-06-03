import TransactionTable from '@/components/transactionTable'
import { columnsCompoundTransactions } from '@/components/transactionTable/columnsCompoundTransactions'
import { getCompoundTransactions } from 'api/vault/transactions'
import React, { useEffect, useState } from 'react'
import { CompoundTransaction } from 'types/api/vault'
import getPageCount from 'utils/getPageCount'
import WrappedPagination from '@/components/common/WrappedPagination'

const PER_PAGE = 9

type Props = {
  totalTransactions: number | string
}

const CompoundTransactions = ({ totalTransactions }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transactions, setTransactions] = useState<CompoundTransaction[]>()
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    const fetchCompoundTransactions = async () => {
      if (isLoading) {
        return
      }
      setIsLoading(true)
      const txs = await getCompoundTransactions({
        skip: (currentPage - 1) * PER_PAGE,
        first: PER_PAGE
      })
      if (txs) {
        setTransactions(txs)
        setIsLoading(false)
      }
    }

    fetchCompoundTransactions()
  }, [currentPage])

  const count = getPageCount(Number(totalTransactions), PER_PAGE)
  const handleChange = (e: any, p: number) => {
    setCurrentPage(p)
  }

  return (
    <>
      <TransactionTable
        transactions={transactions}
        titleTable='Compound Transactions'
        isLoading={isLoading}
        columns={columnsCompoundTransactions}
      />
      {
        totalTransactions > 0 && (
          <div className="flex justify-center items-center my-6">
            <WrappedPagination
              count={count}
              page={currentPage}
              onChange={handleChange}
            />
          </div>
        )
      }
    </>
  )
}

export default CompoundTransactions
