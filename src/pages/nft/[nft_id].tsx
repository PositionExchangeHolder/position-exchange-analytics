/* eslint-disable @next/next/no-img-element */
import { Address } from '@/components/common/Address'
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
import { formatDistanceToNow } from 'date-fns'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { getNftMiningEfficiency, getNftMiningPower } from 'utils/nft'
import { convertBigNumberToNumber } from 'utils/number'

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

  // TODO: lockedDays
  const {
    grade,
    burned,
    author,
    owner,
    quality,
    amount,
    // lockedDays,
    // createdTime,
    updatedTimestamp,
  } = positionNFTDetail

  return (
    <div>
      <section>
        <div className="max-w-screen-xl py-16 mx-auto ">
          <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2 xl:grid-cols-3 lg:gap-12 ">
            <div className="relative h-96 rounded-lg  ">
              <img
                className="absolute inset-0 object-contain w-full h-full"
                src={`/grade${grade}.png`}
                alt="Man using a computer"
              />
            </div>
            <div className="xl:col-span-2 px-6 mt-6 md:mt-0">
              <h2
                className={`text-lg font-bold sm:text-2xl text-txt-catskill-white ${
                  burned && 'line-through'
                }`}
              >
                #{nftId}
              </h2>
              <p className="mt-6 text-txt-sub-text-color">
                Author: <Address address={author.id} />
              </p>
              <p className="mt-6 text-txt-sub-text-color">
                Current Owner: <Address address={owner.id} />
              </p>
              <p className="mt-6 text-txt-sub-text-color">Quality: {quality}</p>
              <p className="mt-6 text-txt-sub-text-color">
                Par Value: {convertBigNumberToNumber(amount, 5)} POSI
              </p>
              <p className="mt-6 text-txt-sub-text-color">
                Mining Power: {getNftMiningPower(amount, grade, quality)} POSI
              </p>
              <p className="mt-6 text-txt-sub-text-color">
                Mining Efficiency:{' '}
                {getNftMiningEfficiency(grade, quality).toFixed(2)}%
              </p>
              {/* <p className="mt-6 text-txt-sub-text-color">
                Decompose Date: {createdTime + lockedDays}
              </p> */}
              <p className="mt-6 text-txt-sub-text-color">
                Last seen:{' '}
                {formatDistanceToNow(
                  new Date(Number(updatedTimestamp) * 1000),
                  { addSuffix: true }
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-0 sm:mt-8">
        <TransactionTable
          setCurrentFilter={onSetCurrentFilter}
          currentFilter={currentFilter}
          transactions={dataTransaction}
          titleTable={'ACTIVITIES'}
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
