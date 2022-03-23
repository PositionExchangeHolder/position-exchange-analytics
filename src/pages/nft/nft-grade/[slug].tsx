import {
  getListNftGrade,
  getListTransactionNftGrade,
} from 'api/nft-grade/nft-grade.api'
import {
  ItemNftGrade,
  ItemTransactionNftGrade,
  ListDataGradeResponse,
  ListDataTransactionGradeResponse,
} from 'api/nft-grade/nft-grade.type'
import Image from 'next/image'
import React from 'react'
import Transaction from '../components/Transaction'
import { PropSSRNftGrade } from './nft-gradle.type'

type Props = {
  positionNFTs: ItemNftGrade[]
  transactions: ItemTransactionNftGrade[]
}
export default function Index({ positionNFTs, transactions }: Props) {
  // console.log('nftDayDatas', positionNFTs)
  // console.log('transactions', transactions)

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
        <Transaction transactions={transactions} titleTable={'Transaction'} />
      </div>
    </main>
  )
}

export async function getServerSideProps({ query }: PropSSRNftGrade) {
  const grade = query.slug

  const dataGradeResponse: ListDataGradeResponse = await getListNftGrade({
    grade,
  })
  const dataTransactionResponse: ListDataTransactionGradeResponse =
    await getListTransactionNftGrade({
      grade,
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
