/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { DoughnutChart } from '@/components/chart/DoughnutChart'
import HeadSEO from '@/components/layout/HeadSEO'
import FilterTransactionTable from '@/components/nft/FilterTransactionTable'
import Pagination from '@/components/pagination'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getNftStatistics } from 'api/nft/statistics'
import { getNftTransactions } from 'api/nft/transactions'
import {
  listFilterTransactionNftGrade,
} from 'common/nft/nft-gradle.type'
import { CurrentInfoNft, getCurrentInfoNft } from 'helper/nft/filterDataNft'
import { getNftGradeImageUrl } from 'helper/nft/getNftImageUrl'
import { transformDataDoughnutChart } from 'helper/nft/transformDataDoughnutChart'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { FilterTransaction, NftStatistics, NftTransaction } from 'types/api/nft'

export default function Index() {
  // shit code
  const [nftStatistics, setNftStatistics] = useState<NftStatistics>({
    id: '1',
    totalTransactions: '1',
    totalNftsMinted: '1',
    totalNftsBurned: '1',
    totalNftsStaking: '1',
    totalTokenLocked: '1',
    currentTokenLocked: '1',
    totalUniqueMiners: '1',
    totalGrade1Minted: '1',
    totalGrade2Minted: '1',
    totalGrade3Minted: '1',
    totalGrade4Minted: '1',
    totalGrade5Minted: '1',
    totalGrade6Minted: '1',
    totalGrade1Burned: '1',
    totalGrade2Burned: '1',
    totalGrade3Burned: '1',
    totalGrade4Burned: '1',
    totalGrade5Burned: '1',
    totalGrade6Burned: '1',
    createdBlockNumber: '1',
    createdTimestamp: '1',
    updatedTimestamp: '1'
  })  
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)
  const router = useRouter()
  const grade: string = (router?.query?.slug as string) || ''
  const [dataTransaction, setDataTransaction] = useState<NftTransaction[] | undefined>([])
  const [isLoading, setLoading] = React.useState(false)

  useEffect(() => {
    const fetchNftStatistics = async () => {
      const statistics = await getNftStatistics()
      if (statistics) {
        setNftStatistics(statistics)
      }
    }

    fetchNftStatistics()
  }, [])

  const dataDoughnutChart = transformDataDoughnutChart(nftStatistics)
  // set filter and reset entries transaction
  const onSetCurrentFilter = useCallback((filter: any) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])
  const dataCurrentInfoNft: CurrentInfoNft = getCurrentInfoNft(
    nftStatistics,
    grade
  )

  useEffect(() => {
    const fetchDataTransaction = async () => {
      if (isLoading) return
      setLoading(true)
      const transactions = await getNftTransactions({
        grade,
        action: currentFilter,
        skip: skipPage,
      })
      setLoading(false)

      setDataTransaction(transactions)
    }
    fetchDataTransaction()
  }, [currentFilter, skipPage, grade])

  return (
    <main className="relative px-6 mt-10 w-full bg-light-primary dark:bg-primary md:mt-16 xl:px-0">
      <HeadSEO
        title={`Position NFT | Grade ${grade}`}
        description={`Position NFT | Grade ${grade}`}
      />
      <section>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0 lg:gap-12 xl:grid-cols-4">
            <div>
              <div className="relative h-96 rounded-lg xl:col-span-2">
                <img
                  className="object-contain absolute inset-0 w-full h-full"
                  src={getNftGradeImageUrl(grade)}
                  alt={grade}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xl font-medium text-txt-light-txt-primary dark:text-txt-catskill-white">
                Grade: {grade}
              </p>
              <p className="mt-6 text-xs dark:font-medium dark:text-txt-sub-text-color md:mt-12 md:text-sm">
                Total Minted: {dataCurrentInfoNft.totalMinted}
              </p>
              <p className="mt-4 text-xs dark:font-medium dark:text-txt-sub-text-color md:mt-12 md:text-sm">
                Total Burned: {dataCurrentInfoNft.totalBurned}
              </p>
            </div>
            <div className="px-6 w-full h-80 md:mt-10 lg:mt-0 xl:col-span-2">
              <div className="mt-4 w-full h-80 sm:h-80 md:mt-0 md:w-80 lg:w-full lg:h-96">
                <DoughnutChart
                  data={dataDoughnutChart.data}
                  total={dataDoughnutChart.total}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-12 lg:mt-24">
        <TransactionTable
          transactions={dataTransaction}
          titleTable={'Transactions'}
          isLoading={isLoading}
          customFilterHeader={() => (
            <FilterTransactionTable
              currentFilter={currentFilter}
              listFilterTransaction={listFilterTransactionNftGrade}
              setCurrentFilter={onSetCurrentFilter}
            />
          )}
        />
        <Pagination
          currentItem={skipPage}
          setNextItem={setSkipPage}
          skip={10}
        />
      </div>
    </main>
  )
}
