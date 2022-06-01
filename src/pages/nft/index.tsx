/* eslint-disable react-hooks/exhaustive-deps */
import LineChart from '@/components/chart/LineChart'
import HeadSEO from '@/components/layout/HeadSEO'
import CurrentValueLock from '@/components/page/nft/CurrentValueLock'
import GradeStatistics from '@/components/page/nft/GradeStatistics'
import NftTransactionTable from '@/components/page/nft/NftTransactionTable'
// import TopTenNftHolder from '@/components/nft/TopTenNftHolder'
import { getNftDayData } from 'api/nft/dayData'
import { getNftStatistics } from 'api/nft/statistics'
import { transferDataTotalNft } from 'helper/nft/transferDataTotalNft'
import { transformDataLineChartNft } from 'helper/nft/transformDataLineChart'
import React, { useEffect, useState } from 'react'
import { NftDayData, NftStatistics } from 'types/api/nft'

export default function Index() {
  // shit code
  const [nftDayDatas, setNftDayDatas] = useState<NftDayData[]>([])
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

  useEffect(() => {
    const fetchNftStatistics = async () => {
      const statistics = await getNftStatistics()
      if (statistics) {
        setNftStatistics(statistics)
      }
    }

    const fetchNftDatas = async () => {
      const data = await getNftDayData()
      setNftDayDatas(data)
    }

    fetchNftStatistics()
    fetchNftDatas()
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
        <NftTransactionTable />
      </div>
    </main>
  )
}
