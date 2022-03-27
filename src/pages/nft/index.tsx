import LineChart from '@/components/chart/LineChart'
import CurrentValueLock from '@/components/nft/CurrentValueLock'
import ItemNft from '@/components/nft/ItemNft'
import Pagination from '@/components/pagination'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import {
  getListNftDayData,
  getListNftStatistic,
  getListTransaction,
} from 'api/nft/nft.api'
import {
  FilterTransaction,
  ItemNftDayDate,
  ItemNftStatistic,
  ItemTranSaction,
  ListDataIntDayDateResponse,
  ListNftStatisticResponse,
  ListTranSactionResponse,
} from 'api/nft/nft.api.type'
import { listFilterTransaction } from 'common/nft/nft.type'
import { transferDataTotalNft, TypeItemNft } from 'helper/nft'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { transformDataLineChartNft } from 'utils/nft/transformData'

type Props = {
  transactions: ItemTranSaction[]
  nftStatistic: ItemNftStatistic
  nftDayDatas: ItemNftDayDate[]
}

export default function Index({ nftStatistic, nftDayDatas }: Props) {
  const dataNft: TypeItemNft[] = transferDataTotalNft(nftStatistic)
  const dataNftLineChart = transformDataLineChartNft(nftDayDatas)
  const pathRedirect = '/nft/nft-grade/[slug]'
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)
  const [dataTransaction, setDataTransaction] = useState<ItemTranSaction[]>([])

  // set filter and reset entries transaction
  const onSetCurrentFilter = useCallback((filter) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])

  useEffect(() => {
    const fetchDataTransaction = async () => {
      const transactionsResponse: ListTranSactionResponse =
        await getListTransaction({
          action: currentFilter,
          skip: skipPage,
        })
      const { transactions } = transactionsResponse.data
      setDataTransaction(transactions)
    }
    fetchDataTransaction()
  }, [currentFilter, skipPage])

  return (
    <main className="relative bg-primary w-full  mt-10  md:mt-16   px-6  xl:px-0">
      <div className="grid-cols-1   gap-x-6 grid   md:grid-cols-2">
        <CurrentValueLock nftStatistic={nftStatistic} />
        <div className="bg-secondary rounded-md mt-8 md:mt-0 h-72 xs:h-full border-charade border">
          <div className="w-full h-full rounded-md">
            <LineChart data={dataNftLineChart} />
          </div>
        </div>
      </div>

      <div className="sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 grid mt-12 sm:mt-16 ">
        {dataNft?.map((itemNft, index) => {
          return (
            <Link
              key={index}
              href={{
                pathname: pathRedirect,
                query: { slug: itemNft.grade },
              }}
            >
              <a>
                <ItemNft item={itemNft} />
              </a>
            </Link>
          )
        })}
      </div>
      <div className="mt-10 sm:mt-16">
        <TransactionTable
          setCurrentFilter={onSetCurrentFilter}
          currentFilter={currentFilter}
          transactions={dataTransaction}
          titleTable={'Transaction'}
          listFilterTransaction={listFilterTransaction}
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
  const onGetListNftStatistic = getListNftStatistic()
  const onGetListNftDayData = getListNftDayData()
  const nftData: [ListNftStatisticResponse, ListDataIntDayDateResponse] =
    await Promise.all([onGetListNftStatistic, onGetListNftDayData]).then(
      (result) => result
    )
  const [nftStatisticResponse, listNftDayData] = nftData
  const { nftStatistic } = nftStatisticResponse.data
  const { nftDayDatas } = listNftDayData.data

  return {
    props: {
      nftStatistic,
      nftDayDatas,
    },
  }
}
