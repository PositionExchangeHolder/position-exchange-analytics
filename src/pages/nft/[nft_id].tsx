/* eslint-disable react-hooks/exhaustive-deps */
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
import { getNftGradeImageUrl } from 'helper/nft/getNftImageUrl'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { getLastSeen } from 'utils/date'
import {
  getDecomposeDate,
  getNftMiningEfficiency,
  getNftMiningPower,
} from 'utils/nft'
import { convertBigNumberToStringNumber } from 'utils/number'

type Props = {
  positionNFT: PositionNFTInfo
}

export default function NftDetail({ positionNFT: positionNFTDetail }: Props) {
  const [dataTransaction, setDataTransaction] = useState<
    ItemTransactionActivities[]
  >([])
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [skipPage, setSkipPage] = useState<number>(0)
  const [isLoading, setLoading] = React.useState(false)

  const router = useRouter()

  const nftId: string = (router?.query?.nft_id as string) || ''
  useEffect(() => {
    const fetchDataActivities = async () => {
      if (isLoading) return
      setLoading(true)

      const activitiesResponse: ListDataActivitiesNftResponse =
        await getListActivitiesNft({ positionNftId: nftId })
      const {
        positionNFT: { transactions },
      } = activitiesResponse.data
      setLoading(false)

      setDataTransaction(transactions)
    }
    fetchDataActivities()
  }, [currentFilter, skipPage, nftId])

  // set filter and reset entries transaction
  const onSetCurrentFilter = useCallback((filter) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])

  const {
    grade,
    burned,
    author,
    owner,
    quality,
    amount,
    lockedDays,
    createdTime,
    updatedTimestamp,
  } = positionNFTDetail

  return (
    <div>
      <section>
        <div className="py-16 mx-auto max-w-screen-xl ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0 lg:gap-12 xl:grid-cols-3 ">
            <div className="relative h-96 rounded-lg  ">
              <img
                className="object-contain absolute inset-0 w-full h-full"
                src={getNftGradeImageUrl(grade)}
                alt="Man using a computer"
                loading="lazy"
              />
            </div>
            <div className="px-6 mt-6 md:mt-0 xl:col-span-2">
              <h2
                className={`text-lg font-bold sm:text-2xl dark:text-txt-primary text-txt-light-txt-primary  ${
                  burned && 'line-through'
                }`}
              >
                #{nftId}
              </h2>
              <p className="mt-6 text-txt-light-txt-primary dark:text-txt-sub-text-color">
                Author: <Address address={author.id} />
              </p>
              <p className="mt-4 text-xs text-txt-light-secondary dark:text-txt-sub-text-color">
                Current Owner: <Address address={owner.id} />
              </p>
              <p className="mt-8 text-xs dark:text-txt-sub-text-color">
                Quality: {quality}
              </p>
              <p className="mt-6 text-xs dark:text-txt-sub-text-color">
                Par Value: {convertBigNumberToStringNumber(amount, 5)} POSI
              </p>
              <p className="mt-6 text-xs dark:text-txt-sub-text-color">
                Mining Power: {getNftMiningPower(amount, grade, quality)} POSI
              </p>
              <p className="mt-6 text-xs dark:text-txt-sub-text-color">
                Mining Efficiency:{' '}
                {getNftMiningEfficiency(grade, quality).toFixed(2)}%
              </p>
              <p className="mt-6 text-xs dark:text-txt-sub-text-color">
                Decompose Date: {getDecomposeDate(createdTime, lockedDays)}
              </p>
              <p className="mt-8 text-xs  text-txt-light-secondary dark:text-txt-sub-text-color">
                Last seen: {getLastSeen(updatedTimestamp)}
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
          isLoading={isLoading}
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
