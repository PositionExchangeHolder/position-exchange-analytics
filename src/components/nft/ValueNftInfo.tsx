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
    <div className="columns-4 flex  flex-row gap-x-1 items-stretch my-6  h-20   md:h-20 lg:gap-x-3 lg:my-10 lg:h-28">
      <div className="flex flex-col flex-1  gap-y-1  justify-center items-center px-1 dark:bg-secondary rounded-md border dark:border-waterloo lg:gap-y-2">
        <p className=" text-tiny-xs text-center text-txt-light-secondary dark:text-txt-primary lg:text-sm  ">
          Minted
        </p>
        <p className="text-xs font-medium text-center text-txt-light-txt-primary dark:text-txt-primary lg:text-sm">
          {commasNumberFormat(totalNftsMinted)}
        </p>
      </div>
      <div className="flex  flex-col flex-1 gap-y-1   justify-center items-center px-1 dark:bg-secondary rounded-md  border dark:border-waterloo lg:gap-y-2">
        <p className=" text-tiny-xs text-center text-txt-light-secondary dark:text-txt-primary  lg:text-sm  ">
          Burned
        </p>
        <p className="text-xs font-medium text-center text-txt-light-txt-primary dark:text-txt-primary lg:text-sm">
          {commasNumberFormat(totalNftsBurned)}
        </p>
      </div>
      <div className="flex  flex-col flex-1  gap-y-1  justify-center items-center px-1 dark:bg-secondary rounded-md border dark:border-waterloo lg:gap-y-2">
        <p className=" text-tiny-xs text-center text-txt-light-secondary dark:text-txt-primary lg:text-sm  ">
          Staking
        </p>
        <p className="text-xs font-medium text-center text-txt-light-txt-primary dark:text-txt-primary lg:text-sm ">
          {commasNumberFormat(totalNftsStaking)}
        </p>
      </div>
      <div className=" flex  flex-col flex-1  gap-y-1  justify-center items-center px-1 dark:bg-secondary rounded-md border  dark:border-waterloo lg:gap-y-2">
        <p className=" text-tiny-xs text-center text-txt-light-secondary dark:text-txt-primary lg:text-sm">
          Unique Miners
        </p>
        <p className="text-xs font-medium text-center text-txt-light-txt-primary dark:text-txt-primary  lg:text-sm">
          {commasNumberFormat(totalUniqueMiners)}
        </p>
      </div>
    </div>
  )
}
