/* eslint-disable @next/next/no-img-element */
import { DoughnutChart } from '@/components/chart/DoughnutChart'
import Pagination from '@/components/pagination'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import {
  getListNftGrade,
  getListTransactionNftGrade,
} from 'api/nft-grade/nft-grade.api'
import {
  ItemNftGrade,
  ItemTransactionNftGrade,
  ListDataGradeResponse,
  ListDataTransactionGradeResponse,
} from 'api/nft-grade/nft-grade.api.type'
import { getListNftStatistic } from 'api/nft/nft.api'
import {
  FilterTransaction,
  ItemNftStatistic,
  ListNftStatisticResponse,
} from 'api/nft/nft.api.type'
import {
  listFilterTransactionNftGrade,
  PropSSRNftGrade,
} from 'common/nft/nft-gradle.type'
import { CurrentInfoNft, getCurrentInfoNft } from 'helper/nft/filterDataNft'
import { transformDataDoughnutChart } from 'helper/nft/transformDataDoughnutChart'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

type Props = {
  positionNFTs: ItemNftGrade[]
  nftStatistic: ItemNftStatistic
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Index({ positionNFTs, nftStatistic }: Props) {
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)
  const router = useRouter()
  const grade: string = (router?.query?.slug as string) || ''
  const [dataTransaction, setDataTransaction] = useState<
    ItemTransactionNftGrade[]
  >([])

  const dataDoughnutChart = transformDataDoughnutChart(nftStatistic, grade)
  // set filter and reset entries transaction
  const onSetCurrentFilter = useCallback((filter) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])
  const dataCurrentInfoNft: CurrentInfoNft = getCurrentInfoNft(
    nftStatistic,
    grade
  )

  useEffect(() => {
    const fetchDataTransaction = async () => {
      const transactionsResponse: ListDataTransactionGradeResponse =
        await getListTransactionNftGrade({
          grade,
          action: currentFilter,
          skip: skipPage,
        })
      const { transactions } = transactionsResponse.data
      setDataTransaction(transactions)
    }
    fetchDataTransaction()
  }, [currentFilter, skipPage, grade])

  return (
    <main className="relative bg-primary w-full  mt-10  md:mt-16 px-6  xl:px-0">
      <section>
        <div className="max-w-screen-xl  mx-auto ">
          <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2 xl:grid-cols-3 lg:gap-12 ">
            <div>
              <div className="relative h-96 rounded-lg  xl:col-span-2">
                <img
                  className="absolute inset-0 object-contain w-full h-full"
                  src={`/grade${grade}.png`}
                  alt="Man using a computer"
                />
              </div>
            </div>
            <div className="mt-4 ">
              <p className="text-txt-catskill-white font-medium text-xl ">
                Grade: {grade}
              </p>
              <p className="text-txt-sub-text-color font-medium md:text-sm md:mt-12 mt-6 text-xs">
                Total Minted: {dataCurrentInfoNft.totalMinted}
              </p>
              <p className="text-txt-sub-text-color font-medium md:text-sm md:mt-12 mt-4 text-xs">
                Total Burned: {dataCurrentInfoNft.totalBurned}
              </p>
              <p className="text-txt-sub-text-color font-medium md:text-sm md:mt-8 mt-4 text-xs">
                @SoftSkillNFT
              </p>
            </div>
            <div className="px-6 md:mt-10 lg:mt-0">
              <div className="mt-4 md:mt-0   md:w-80 sm:h-80 lg:w-96 lg:h-96">
                <DoughnutChart data={dataDoughnutChart} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-12 lg:mt-24">
        <TransactionTable
          transactions={dataTransaction}
          titleTable={'Transactions'}
          setCurrentFilter={onSetCurrentFilter}
          currentFilter={currentFilter}
          listFilterTransaction={listFilterTransactionNftGrade}
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

export async function getServerSideProps({ query }: PropSSRNftGrade) {
  const grade = query.slug
  const onGetListNftStatistic = getListNftStatistic()

  const onGetListNftGrade = getListNftGrade({
    grade,
  })

  const gradeData: [ListDataGradeResponse, ListNftStatisticResponse] =
    await Promise.all([onGetListNftGrade, onGetListNftStatistic]).then(
      (result) => result
    )
  const [nftGradeResponse, nftStatisticResponse] = gradeData

  const { positionNFTs } = nftGradeResponse.data
  const { nftStatistic } = nftStatisticResponse.data
  //
  return {
    props: {
      positionNFTs,
      nftStatistic,
    },
  }
}
