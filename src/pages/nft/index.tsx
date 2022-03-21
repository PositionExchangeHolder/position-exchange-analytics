import { getListNftStatistic, getListTransaction } from 'api/nft/nft.api'
import {
  ItemNftStatistic,
  ItemTranSaction,
  ListNftStatisticResponse,
  ListTranSactionResponse,
} from 'api/nft/nft.type'
import { transferDataTotalNft, TypeItemNft } from 'helper/nft'
import React from 'react'
import CurrentValueLock from './components/CurrentValueLock'
import ItemNft from './components/ItemNft'
import Transaction from './components/Transaction'
import { PropSSRNft } from './nft.type'

type Props = { transactions: ItemTranSaction[]; nftStatistic: ItemNftStatistic }
export default function Index({ transactions, nftStatistic }: Props) {
  const dataNft: TypeItemNft[] = transferDataTotalNft(nftStatistic)

  return (
    <main className="pt-12">
      <div className="grid-cols-2 gap-x-2 grid ">
        <CurrentValueLock nftStatistic={nftStatistic} />
      </div>
      <div className="grid-cols-3 gap-x-8 gap-y-8 grid mt-16">
        {dataNft?.map((itemNft, index) => (
          <ItemNft key={index} item={itemNft} />
        ))}
      </div>
      <div className="mt-16">
        <Transaction transactions={transactions} />
      </div>
    </main>
  )
}

export async function getServerSideProps({ query }: PropSSRNft) {
  const skip = query?.skip || 110
  const transactionsResponse: ListTranSactionResponse =
    await getListTransaction()
  const nftStatisticResponse: ListNftStatisticResponse =
    await getListNftStatistic()
  const { transactions } = transactionsResponse.data
  const { nftStatistic } = nftStatisticResponse.data
  return {
    props: {
      transactions: transactions,
      nftStatistic,
    },
  }
}
