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
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  listFilterTransactionNftGrade,
  PropSSRNftGrade,
} from 'common/nft/nft-gradle.type'
import Pagination from '@/components/pagination'

type Props = {
  positionNFTs: ItemNftGrade[]
  transactions: ItemTransactionNftGrade[]
}
export default function Index({ positionNFTs, transactions }: Props) {
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
  }, [currentFilter, skipPage])

  // set filter and reset entries transaction
  const onSetCurrentFilter = useCallback((filter) => {
    setSkipPage(0)
    setCurrentFilter(filter)
  }, [])

  return (
    <main className="pt-12  w-full">
      <div className="flex flex-row">
        <div className="border-charade border  rounded-md bg-secondary  h-400 w-400  px-6  flex justify-center items-center">
          <Image
            src="/fake_nft.png"
            alt="logo"
            width={300}
            height={300}
            layout="fixed"
          />
        </div>
        <div className="ml-12 pt-10">
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
  const dataGradeResponse: ListDataGradeResponse = await getListNftGrade({
    grade,
  })
  const dataTransactionResponse: ListDataTransactionGradeResponse =
    await getListTransactionNftGrade({
      grade,
      action,
      skip,
    })

  const { positionNFTs } = dataGradeResponse.data
  const { transactions } = dataTransactionResponse.data
  return {
    props: {
      positionNFTs,
      transactions,
    },
  }
}