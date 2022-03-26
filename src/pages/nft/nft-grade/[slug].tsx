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
import {
  listFilterTransactionNftGrade,
  PropSSRNftGrade,
} from 'common/nft/nft-gradle.type'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  positionNFTs: ItemNftGrade[]
  transactions: ItemTransactionNftGrade[]
}
export default function Index({ positionNFTs, transactions }: Props) {
  console.log('positionNFTs', positionNFTs)
  const [currentFilter, setCurrentFilter] = useState('All')
  const [skipPage, setSkipPage] = useState(0)
  const router = useRouter()
  const slug = router.query.slug
  const flagPushQuery = useRef(false)

  useEffect(() => {
    if (flagPushQuery.current === false) {
      flagPushQuery.current = true
      return
    }
    router.push({
      pathname: `/nft/nft-grade/${slug}`,
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
    <main className="relative bg-primary w-full  mt-10  md:mt-16 px-6  xl:px-0">
      <div className="sx:grid sx:grid-rows-2 sm:flex md:flex-row ">
        <div className=" md:w-400 block  rounded-md bg-secondary">
          <Image
            src="/fake_nft.png"
            alt="logo"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="md:ml-12 md:pt-10 mt-10">
          <p className="text-txt-primary font-medium text-sm ">
            ID:100300483357
          </p>
          <p className="text-txt-primary font-medium text-sm mt-8">
            NFT Atributes: grade, quality, owner, totalTxs NFT Atributes: grade,
            quality, owner, totalTxs ...
          </p>
          <p className="text-txt-primary font-medium text-sm mt-12">
            State: Staking, Burn,....
          </p>
          <p className="text-txt-primary font-medium text-sm mt-10">
            @SoftSkillNFT
          </p>
        </div>
      </div>
      <div className="mt-16">
        <TransactionTable
          transactions={transactions}
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

export async function getServerSideProps({ query }: PropSSRNftGrade) {
  const grade = query.slug
  const skip = query?.skip || 100
  const action = query?.action || 'All'

  const onGetListNftGrade = getListNftGrade({
    grade,
  })
  const onGetListTransactionNftGrade = getListTransactionNftGrade({
    grade,
    action,
    skip,
  })
  const gradeData: [ListDataGradeResponse, ListDataTransactionGradeResponse] =
    await Promise.all([onGetListNftGrade, onGetListTransactionNftGrade]).then(
      (result) => result
    )
  const [nftStatisticResponse, transactionsResponse] = gradeData

  const { transactions } = transactionsResponse.data
  const { positionNFTs } = nftStatisticResponse.data

  //
  return {
    props: {
      positionNFTs,
      transactions,
    },
  }
}
