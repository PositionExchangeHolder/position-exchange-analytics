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
    <div className="mt-6 mb-6  flex-row flex items-stretch columns-4  gap-x-1   lg:mt-10 lg:mb-10 h-20 lg:gap-x-3 lg:h-28 md:h-20 ">
      <div className="border-charade border rounded-md bg-secondary  flex-1 items-center justify-center flex flex-col px-1 gap-y-1 lg:gap-y-2">
        <p className=" text-tiny-xs lg:text-sm text-txt-white  text-center  ">
          Minted
        </p>
        <p className="font-medium text-xs lg:text-sm text-txt-primary  text-center">
          {commasNumberFormat(totalNftsMinted)}
        </p>
      </div>
      <div className="border-charade border  rounded-md bg-secondary   flex-1 items-center justify-center flex flex-col  px-1 gap-y-1 lg:gap-y-2">
        <p className=" text-tiny-xs lg:text-sm text-txt-white  text-center  ">
          Burned
        </p>
        <p className="font-medium text-xs lg:text-sm text-txt-primary text-center ">
          {commasNumberFormat(totalNftsBurned)}
        </p>
      </div>
      <div className="border-charade border  rounded-md bg-secondary   flex-1 items-center justify-center flex flex-col px-1 gap-y-1 lg:gap-y-2">
        <p className=" text-tiny-xs lg:text-sm text-txt-white text-center  ">
          Staking
        </p>
        <p className="font-medium text-xs lg:text-sm text-txt-primary text-center ">
          {commasNumberFormat(totalNftsStaking)}
        </p>
      </div>
      <div className="border-charade border  rounded-md bg-secondary   flex-1 items-center justify-center flex flex-col px-1  gap-y-1 lg:gap-y-2">
        <p className=" text-tiny-xs lg:text-sm text-txt-white text-center">
          Unique Miners
        </p>
        <p className="font-medium text-xs lg:text-sm text-txt-primary  text-center">
          {commasNumberFormat(totalUniqueMiners)}
        </p>
      </div>
    </div>
  )
}
