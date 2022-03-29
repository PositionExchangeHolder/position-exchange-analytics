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
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

type Props = {
  positionNFTs: ItemNftGrade[]
  nftStatistic: ItemNftStatistic
}

export default function Index({ positionNFTs, nftStatistic }: Props) {
  console.log('nftStatistic', nftStatistic)
  console.log('positionNFTs', positionNFTs)
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)
  const router = useRouter()
  const grade: string = (router?.query?.slug as string) || ''
  const [dataTransaction, setDataTransaction] = useState<
    ItemTransactionNftGrade[]
  >([])

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
      <div className="sx:grid sx:grid-rows-3 sm:flex md:flex-row  justify-between">
        <div className="lg:flex lg:flex-row lg:gap-x-8">
          <div className=" md:w-80 sm:h-80 lg:w-96 lg:h-96   rounded-md bg-secondary ">
            <Image
              src="/fake_nft.png"
              alt="logo"
              width={100}
              height={100}
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
          <DoughnutChart data={data} />
        </div>
      </div>
      <div className="mt-16 md:mt-20">
        <TransactionTable
          transactions={dataTransaction}
          titleTable={'Transaction'}
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
type FakeData = {
  datasets: any[]
  labels: string[]
}
export const data: FakeData = {
  labels: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', ' Grade 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderWidth: 1,
    },
  ],
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
