/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Address } from '@/components/common/Address'
import HeadSEO from '@/components/layout/HeadSEO'
import { NotFoundNft } from '@/components/nft/NotFoundNft'
import { columnsActivities } from '@/components/transactionTable/columnsActivities'
import TransactionTable from '@/components/transactionTable/TransactionTable'
import { getNftGradeImageUrl } from 'helper/nft/getNftImageUrl'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getLastSeen } from 'utils/date'
import {
  getDecomposeDate,
  getNftMiningEfficiency,
  getNftMiningPower,
} from 'utils/nft'
import { convertBigNumberToStringNumber } from 'utils/number'
import getPageCount from 'utils/getPageCount'
import { getActivitiesOfNft, getNftDetail } from 'api/nft/nft'
import { NftDetail, NftTransaction } from 'types/api/nft'
import WrappedPagination from '@/components/common/WrappedPagination'

type Props = {
  positionNFT: NftDetail
}

const PER_PAGE = 10

export default function NftDetailPage({ positionNFT: positionNFTDetail }: Props) {
  const [dataTransaction, setDataTransaction] = useState<NftTransaction[] | undefined>([])
  const [isLoading, setLoading] = React.useState(false)
  const [totalPage, setTotalPage] = useState<number>(1)
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

      const nft = await getActivitiesOfNft({
        nftId,
        skip: (currentPages - 1) * PER_PAGE,
        first: PER_PAGE,
      })
      setLoading(false)

      setDataTransaction(nft?.transactions)
      setTotalPage(Number(nft?.totalTransactions))
    }
    fetchDataActivities()
  }, [nftId, currentPages])

  if (!positionNFTDetail) {
    return <NotFoundNft nftId={nftId} />
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
              <h2
                className={`text-lg font-bold sm:text-2xl dark:text-txt-primary text-txt-light-txt-primary ${
                  burned && 'line-through'
                }`}
              >
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
          transactions={dataTransaction}
          titleTable={'ACTIVITIES'}
          columns={columnsActivities}
          isLoading={isLoading}
        />
        {count > 1 && (
          <div className="flex justify-center items-center my-6">
            <WrappedPagination
              count={count}
              page={currentPages}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    </div>
  )
}

type PropSSRNftDetail = {
  query: {
    nft_id: string
  }
}

export async function getServerSideProps({ query }: PropSSRNftDetail) {
  const { nft_id } = query
  const positionNFT = await getNftDetail({ id: nft_id })

  return {
    props: {
      positionNFT,
    },
  }
}
