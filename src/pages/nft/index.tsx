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
  ItemNftDayDate,
  ItemNftStatistic,
  ItemTranSaction,
  ListDataIntDayDateResponse,
  ListNftStatisticResponse,
  ListTranSactionResponse,
} from 'api/nft/nft.api.type'
import { listFilterTransaction, PropSSRNft } from 'common/nft/nft.type'
import { transferDataTotalNft, TypeItemNft } from 'helper/nft'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { transformDataLineChartNft } from 'utils/nft/transformData'

type Props = {
  transactions: ItemTranSaction[]
  nftStatistic: ItemNftStatistic
  nftDayDatas: ItemNftDayDate[]
}

export default function Index({
  transactions,
  nftStatistic,
  nftDayDatas,
}: Props) {
  const dataNft: TypeItemNft[] = transferDataTotalNft(nftStatistic)
  const dataNftLineChart = transformDataLineChartNft(nftDayDatas)
  const pathRedirect = 'nft/nft-grade/[slug]'
  const [currentFilter, setCurrentFilter] = useState('All')
  const [skipPage, setSkipPage] = useState(0)
  const router = useRouter()
  const flagPushQuery = useRef(false)

  useEffect(() => {
    if (flagPushQuery.current === false) {
      flagPushQuery.current = true
      return
    }
    router.push({
      pathname: '/nft',
      query: { action: currentFilter, skip: skipPage },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter, skipPage])

  // set filter and reset entries transaction
  const onSetCurrentFilter = useCallback((filter) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])

  return (
    <main className="pt-12  w-full">
      <div className="grid-cols-2 gap-x-6 grid ">
        <CurrentValueLock nftStatistic={nftStatistic} />
        <div className="bg-secondary rounded-md   ">
          <div className="w-full h-full rounded-md">
            <LineChart data={dataNftLineChart} />
          </div>
        </div>
      </div>

      <div className="grid-cols-3 gap-x-8 gap-y-8 grid mt-16">
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
      <div className="mt-16">
        <TransactionTable
          setCurrentFilter={onSetCurrentFilter}
          currentFilter={currentFilter}
          transactions={transactions}
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

export async function getServerSideProps({ query }: PropSSRNft) {
  const skip = +query?.skip || 100
  const action = query?.action

  const transactionsResponse: ListTranSactionResponse =
    await getListTransaction({ skip, action })

  const nftStatisticResponse: ListNftStatisticResponse =
    await getListNftStatistic()

  const listNftDayData: ListDataIntDayDateResponse = await getListNftDayData()

  const { transactions } = transactionsResponse.data
  const { nftStatistic } = nftStatisticResponse.data
  const { nftDayDatas } = listNftDayData.data

  return {
    props: {
      transactions,
      nftStatistic,
      nftDayDatas,
    },
  }
}
