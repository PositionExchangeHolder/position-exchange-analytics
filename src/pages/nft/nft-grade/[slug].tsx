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
import { transformDataDoughnutChart } from 'helper/nft/transformDataDoughnutChart'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

type Props = {
  positionNFTs: ItemNftGrade[]
  nftStatistic: ItemNftStatistic
}

export default function Index({ positionNFTs, nftStatistic }: Props) {
  // console.log('nftStatistic', nftStatistic)
  console.log('positionNFTs', positionNFTs)
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
      <div className="sx:grid sx:grid-rows-3 md:flex md:flex-row  justify-between">
        <div className="lg:flex lg:flex-row lg:gap-x-8">
          <div className=" lg:w-96 lg:h-96  ">
            <Image
              // src="/fake_nft.png"
              src={`/grade${grade}.png`}
              alt="logo"
              width={100}
              height={120}
              loading="eager"
              layout="responsive"
            />
          </div>
          <div className="md:pt-10 mt-12 md:mt-4">
            <p className="text-txt-primary font-medium text-sm ">
              ID:100300483357
            </p>
            <p className="text-txt-primary font-medium text-sm mt-8">
              NFT Atributes: grade, quality, owner, totalTxs NFT Atributes:
              grade, quality, owner, totalTxs ...
            </p>
            <p className="text-txt-primary font-medium text-sm mt-12">
              State: Staking, Burn,....
            </p>
            <p className="text-txt-primary font-medium text-sm mt-8">
              @SoftSkillNFT
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-0   md:w-80 sm:h-80 lg:w-96 lg:h-96">
          <DoughnutChart data={dataDoughnutChart} />
        </div>
      </div>
      <div className="mt-16 md:mt-20">
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
