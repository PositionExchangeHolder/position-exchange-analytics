/* eslint-disable react-hooks/exhaustive-deps */
import LineChart from '@/components/chart/LineChart'
import HeadSEO from '@/components/layout/HeadSEO'
import CurrentValueLock from '@/components/page/nft/CurrentValueLock'
import GradeStatistics from '@/components/page/nft/GradeStatistics'
import FilterTransactionTable from '@/components/page/nft/FilterTransactionTable'
// import TopTenNftHolder from '@/components/nft/TopTenNftHolder'
import Pagination from '@/components/pagination'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getNftDayData } from 'api/nft/dayData'
import { getNftStatistics } from 'api/nft/statistics'
import { getNftTransactions } from 'api/nft/transactions'
import { listFilterTransaction } from 'common/nft/nft.type'
import { transferDataTotalNft } from 'helper/nft/transferDataTotalNft'
import { transformDataLineChartNft } from 'helper/nft/transformDataLineChart'
import React, { useCallback, useEffect, useState } from 'react'
import { FilterTransaction, NftDayData, NftStatistics, NftTransaction } from 'types/api/nft'

type Props = {
  transactions: NftTransaction[]
  nftDayDatas: NftDayData[]
}

export default function Index({ nftDayDatas }: Props) {
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
  const gradeStatistics = transferDataTotalNft(nftStatistics)

  const dataNftLineChart = transformDataLineChartNft(nftDayDatas)
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)
  const [dataTransaction, setDataTransaction] = useState<NftTransaction[] | undefined>([])
  const [isLoading, setLoading] = React.useState(false)


  // set filter and reset entries transaction
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

  useEffect(() => {
    const fetchNftStatistics = async () => {
      const statistics = await getNftStatistics()
      if (statistics) {
        setNftStatistics(statistics)
      }
    }

    fetchNftStatistics()
  }, [])
  
  return (
    <main className="relative px-6 mt-10 w-full bg-light-primary dark:bg-primary md:mt-16 xl:px-0">
      <HeadSEO title="Position NFT" description="Position NFT" />
      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
        <CurrentValueLock />
        <div className="mt-8 h-72 rounded-md xs:h-full md:mt-0">
          <div className="w-full h-full rounded-md">
            <LineChart data={dataNftLineChart} />
          </div>
        </div>
      </div>

      {/* <TopNftHolder totalNfts={Number(nftStatistic.totalNftsMinted)} /> */}

      <GradeStatistics gradeStatistics={gradeStatistics} />
      <div className="mt-10 sm:mt-16">
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
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const onGetNftDayDatas = getNftDayData()
  
  const data = await Promise.all([
    onGetNftDayDatas
  ]).then(result => result)
  
  const [nftDayDatas] = data
  
  return {
    props: {
      nftDayDatas
    },
  }
}
