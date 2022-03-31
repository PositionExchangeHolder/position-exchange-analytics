/* eslint-disable @next/next/no-img-element */
import Pagination from '@/components/pagination'
import { columnsActivities } from '@/components/transactionTable/columnsActivities'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import {
  ItemTransactionActivities,
  ListDataActivitiesNftResponse,
  NftDetailResponse,
  PositionNFTInfo,
  PropSSRNftDetail,
} from 'api/nft-detail/nft-detail-api.type'
import {
  getListActivitiesNft,
  getNftDetail,
} from 'api/nft-detail/nft-detail.api'
import { FilterTransaction } from 'api/nft/nft.api.type'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
type Props = {
  positionNFT: PositionNFTInfo
}
export default function NftDetail({ positionNFT: positionNFTDetail }: Props) {
  const [dataTransaction, setDataTransaction] = useState<
    ItemTransactionActivities[]
  >([])
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)

  const router = useRouter()

  const nftId: string = (router?.query?.nft_id as string) || ''
  useEffect(() => {
    const fetchDataActivities = async () => {
      const activitiesResponse: ListDataActivitiesNftResponse =
        await getListActivitiesNft({ positionNftId: nftId })
      const {
        positionNFT: { transactions },
      } = activitiesResponse.data
      setDataTransaction(transactions)
    }
    fetchDataActivities()
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
                src={`/grade${positionNFTDetail.grade}.png`}
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
              <p className="mt-6 text-txt-secondary">
                quality: {positionNFTDetail.quality}
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
          titleTable={'Activities'}
          columns={columnsActivities}
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

export async function getServerSideProps({ query }: PropSSRNftDetail) {
  const { nft_id } = query
  const onGetNftDetailResponse = getNftDetail({ positionNftId: nft_id })
  const nftData: [NftDetailResponse] = await Promise.all([
    onGetNftDetailResponse,
  ]).then((result) => result)
  const [nftDetailResponse] = nftData
  const { positionNFT } = nftDetailResponse.data

  return {
    props: {
      positionNFT,
    },
  }
}
