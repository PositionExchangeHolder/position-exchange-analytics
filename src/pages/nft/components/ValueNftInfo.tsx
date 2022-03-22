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
    <div className="px-2 mt-10 mb-10  flex-row flex items-end columns-4 gap-x-4">
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
