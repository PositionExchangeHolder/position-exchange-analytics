/* eslint-disable @next/next/no-img-element */
import Pagination from '@/components/pagination'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getListTransactionNftGrade } from 'api/nft-grade/nft-grade.api'
import {
  ItemTransactionNftGrade,
  ListDataTransactionGradeResponse,
} from 'api/nft-grade/nft-grade.api.type'
import { FilterTransaction } from 'api/nft/nft.api.type'
import { listFilterTransaction } from 'common/nft/nft.type'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

export default function NftDetail() {
  const [dataTransaction, setDataTransaction] = useState<
    ItemTransactionNftGrade[]
  >([])
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)

  const router = useRouter()

  const nftId: string = (router?.query?.nft_id as string) || ''
  useEffect(() => {
    const fetchDataTransaction = async () => {
      const transactionsResponse: ListDataTransactionGradeResponse =
        await getListTransactionNftGrade({
          action: currentFilter,
          skip: skipPage,
          id: nftId,
        })
      const { transactions } = transactionsResponse.data
      setDataTransaction(transactions)
    }
    fetchDataTransaction()
  }, [currentFilter, skipPage, nftId])

  // set filter and reset entries transaction
  const onSetCurrentFilter = useCallback((filter) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])
  return (
    <div>
      <section>
        <div className="max-w-screen-xl py-16 mx-auto ">
          <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2 xl:grid-cols-3 lg:gap-12 ">
            <div className="relative h-96 rounded-lg  ">
              <img
                className="absolute inset-0 object-contain w-full h-full"
                src="/grade1.png"
                alt="Man using a computer"
              />
            </div>
            <div className="xl:col-span-2 px-6 mt-6 md:mt-0">
              <h2 className="text-lg font-bold sm:text-2xl text-txt-primary">
                Token ID: {nftId}
              </h2>
              <p className="mt-8 text-txt-secondary   sm:text-xl ">
                NFT Atributes: grade, quality, owner, totalTxs...
              </p>
              <p className="mt-6 text-txt-secondary">
                State: Staking, Burn,....
              </p>
              <p className="mt-6 text-txt-secondary">@SoftSkillNFT</p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-0 sm:mt-8">
        <TransactionTable
          setCurrentFilter={onSetCurrentFilter}
          currentFilter={currentFilter}
          transactions={dataTransaction}
          titleTable={'Transactions'}
          listFilterTransaction={listFilterTransaction}
        />
        <Pagination
          currentItem={skipPage}
          setNextItem={setSkipPage}
          skip={10}
        />
      </div>
    </div>
  )
}
