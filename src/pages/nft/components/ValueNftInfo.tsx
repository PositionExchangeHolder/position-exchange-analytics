import React from 'react'
import { commasNumberFormat } from 'utils/number'
type Props = {
  totalNftsMinted: string
  totalNftsBurned: string
  totalNftsStaking: string
  totalUniqueMiners: string
}
export default function ValueNftInfo({
  totalNftsMinted,
  totalNftsBurned,
  totalNftsStaking,
  totalUniqueMiners,
}: Props) {
  return (
    <div className=" h-180  px-6 pt-4 flex-row flex items-end columns-4 gap-x-4">
      <div className="border-charade border  rounded-md bg-secondary h-150 w-full flex flex-col items-center justify-center gap-y-4">
        <p className=" text-base text-txt-primary   ">Minted</p>
        <p className="font-medium text-lg text-txt-primary ">
          {commasNumberFormat(totalNftsMinted)}
        </p>
      </div>
      <div className="border-charade border  rounded-md bg-secondary h-150 w-full flex flex-col items-center justify-center gap-y-4">
        <p className=" text-base text-txt-primary   ">Burned</p>
        <p className="font-medium text-lg text-txt-primary ">
          {commasNumberFormat(totalNftsBurned)}
        </p>
      </div>
      <div className="border-charade border  rounded-md bg-secondary h-150 w-full flex flex-col items-center justify-center gap-y-4">
        <p className=" text-base text-txt-primary   ">Staking</p>
        <p className="font-medium text-lg text-txt-primary ">
          {commasNumberFormat(totalNftsStaking)}
        </p>
      </div>
      <div className="border-charade border  rounded-md bg-secondary h-150 w-full flex flex-col items-center justify-center gap-y-4">
        <p className=" text-base text-txt-primary   ">Unique Miners</p>
        <p className="font-medium text-lg text-txt-primary ">
          {commasNumberFormat(totalUniqueMiners)}
        </p>
      </div>
    </div>
  )
}

// export async function getServerSideProps() {
//   console.log('client', client)
//   const { data } = await client.query({
//     query: gql`
//       query nftStatistic {
//         nftStatistic(id: "1") {
//           id
//           totalTransactions
//           totalNftsMinted
//           totalNftsBurned
//           totalNftsStaking
//           totalTokenLocked
//           currentTokenLocked
//           totalUniqueMiners
//           totalGrade1Minted
//           totalGrade2Minted
//           totalGrade3Minted
//           totalGrade4Minted
//           totalGrade5Minted
//           totalGrade6Minted
//           totalGrade1Burned
//           totalGrade2Burned
//           totalGrade3Burned
//           totalGrade4Burned
//           totalGrade5Burned
//           totalGrade6Burned
//           createdBlockNumber
//           createdTimestamp
//           updatedTimestamp
//         }
//       }
//     `,
//   })

//   return {
//     props: {
//       transactions: data,
//     },
//   }
// }
