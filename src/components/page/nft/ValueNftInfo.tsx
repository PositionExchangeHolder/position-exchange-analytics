import React from 'react'
import { commasNumberFormat } from 'utils/number'

type ValueNftInfoItemProps = {
  title: string
  value: string
}

type ValueNftInfoProps = {
  totalNftsMinted: string
  totalNftsBurned: string
  totalNftsStaking: string
  totalUniqueMiners: string
}

const ValueNftInfoItem = ({ title, value }: ValueNftInfoItemProps) => {
  return (
    <div className="flex flex-col flex-1 gap-y-1 justify-center items-center px-1 dark:bg-secondary rounded-md border dark:border-waterloo lg:gap-y-2">
      <p className="text-tiny-xs text-center text-txt-light-secondary dark:text-txt-primary lg:text-sm">
        {title}
      </p>
      <p className="text-xs font-medium text-center text-txt-light-txt-primary dark:text-txt-primary lg:text-sm">
        {commasNumberFormat(value)}
      </p>
    </div>
  )
} 

export default function ValueNftInfo({
  totalNftsMinted,
  totalNftsBurned,
  totalNftsStaking,
  totalUniqueMiners,
}: ValueNftInfoProps) {
  return (
    <div className="columns-4 flex flex-row gap-x-1 items-stretch my-6 h-20 md:h-20 lg:gap-x-3 lg:my-10 lg:h-28">
      <ValueNftInfoItem
        title='Minted'
        value={totalNftsMinted}
      />
      <ValueNftInfoItem
        title='Burned'
        value={totalNftsBurned}
      />
      <ValueNftInfoItem
        title='Staked'
        value={totalNftsStaking}
      />
      <ValueNftInfoItem
        title='Miners'
        value={totalUniqueMiners}
      />
    </div>
  )
}
