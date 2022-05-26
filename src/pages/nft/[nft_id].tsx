/* eslint-disable react-hooks/exhaustive-deps */
import { Address } from '@/components/common/Address'
import HeadSEO from '@/components/layout/HeadSEO'
import { NotFoundNft } from '@/components/nft/NotFoundNft'
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { columnsActivities } from '@/components/transactionTable/columnsActivities'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import {
  ItemTransactionActivities,
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
import getPageCount from 'utils/getPageCount'

type Props = {
  positionNFT: PositionNFTInfo
}

const PER_PAGE = 10

export default function NftDetail({ positionNFT: positionNFTDetail }: Props) {
  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: 'white',
      },
    },
  }))
  const classes = useStyles()

  const [dataTransaction, setDataTransaction] = useState<ItemTransactionActivities[]>([])
  const [currentFilter, setCurrentFilter] = useState<FilterTransaction>('All')
  const [isLoading, setLoading] = React.useState(false)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [skipPage, setSkipPage] = useState<number>(0)
  const [currentPages, setCurrentPages] = useState<number>(1)

  const router = useRouter()
  const nftId: string = (router?.query?.nft_id as string) || ''

  const count = getPageCount(totalPage, PER_PAGE)
  const handleChange = (e: any, p: number) => {
    setCurrentPages(p)
  }

  useEffect(() => {
    const fetchDataActivities = async () => {
      if (isLoading) return
      setLoading(true)

      const activitiesResponse = await getListActivitiesNft({
        positionNftId: nftId,
        skip: (currentPages - 1) * PER_PAGE,
        first: PER_PAGE
      })
      const { positionNFT } = activitiesResponse.data
      setLoading(false)

      setDataTransaction(positionNFT?.transactions)
      setTotalPage(Number(positionNFT?.totalTransactions))
    }
    fetchDataActivities()
  }, [currentFilter, skipPage, nftId, currentPages])

  // set filter and reset entries transaction
  const onSetCurrentFilter = useCallback((filter: any) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])

  if (!positionNFTDetail) {
    return (
      <NotFoundNft nftId={nftId} />
    )
  }

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
      <HeadSEO
        title={`Position NFT | ${nftId}`}
        description={`Position NFT | ${nftId}`}
      />
      <section>
        <div className="py-16 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0 lg:gap-12 xl:grid-cols-3">
            <div className="relative h-96 rounded-lg">
              <img
                className="object-contain absolute inset-0 w-full h-full"
                src={getNftGradeImageUrl(grade)}
                alt={nftId}
                loading="lazy"
              />
            </div>
            <div className="px-6 mt-6 md:mt-0 xl:col-span-2">
              <h2 className={`text-lg font-bold sm:text-2xl dark:text-txt-primary text-txt-light-txt-primary ${burned && 'line-through'}`}>
                #{nftId}
              </h2>
              <p className="mt-4 text-base text-txt-light-txt-primary dark:text-txt-sub-text-color">
                Author: <Address address={author.id} shortLink={false} />
              </p>
              <p className="mt-4 text-base text-txt-light-secondary dark:text-txt-sub-text-color">
                Current Owner: <Address address={owner.id} shortLink={false} />
              </p>
              <p className="mt-4 text-base dark:text-txt-sub-text-color">
                Quality: {quality}
              </p>
              <p className="mt-4 text-base dark:text-txt-sub-text-color">
                Par Value: {convertBigNumberToStringNumber(amount, 5)} POSI
              </p>
              <p className="mt-4 text-base dark:text-txt-sub-text-color">
                Mining Power: {getNftMiningPower(amount, grade, quality)} POSI
              </p>
              <p className="mt-4 text-base dark:text-txt-sub-text-color">
                Mining Efficiency:{' '}
                {getNftMiningEfficiency(grade, quality).toFixed(2)}%
              </p>
              <p className="mt-4 text-base dark:text-txt-sub-text-color">
                Decompose Date: {getDecomposeDate(createdTime, lockedDays)}
              </p>
              <p className="mt-4 text-base text-txt-light-secondary dark:text-txt-sub-text-color">
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
        {
          count > 1 && (
            <div className="flex justify-center items-center mb-6 mt-6">
              <Pagination
                classes={{ ul: classes.ul }}
                color="primary"
                count={count}
                size="large"
                page={currentPages}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </div>
          )
        }
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
