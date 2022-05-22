import { ItemNftStatistic } from 'api/nft/nft.api.type'
import Image from 'next/image'
import React from 'react'
import { useAppSelector } from 'store/hooks'
import { convertBigNumberToStringNumber, percentage } from 'utils/number'
import ValueNftInfo from './ValueNftInfo'
import { selectPrice } from 'store/price/priceSlice'
import {
  calculateWorthOfToken,
  formatMoney,
  getPosiBusdPrice,
} from 'utils/price'

type Props = {
  nftStatistic: ItemNftStatistic
}

export default function CurrentValueLock({ nftStatistic }: Props) {
  const {
    totalNftsMinted,
    totalNftsBurned,
    totalNftsStaking,
    totalUniqueMiners,
    currentTokenLocked,
    totalTokenLocked,
  } = nftStatistic
  const { prices } = useAppSelector(selectPrice)
  const busdPrice = getPosiBusdPrice(prices)

  return (
    <div className="px-4 pt-4 w-full dark:bg-secondary rounded-md border dark:border-0 lg:px-6 ">
      <p className="text-xs font-medium text-txt-light-txt-primary dark:text-txt-white lg:text-base">
        Current Token Locked
      </p>

      <p className="mt-4 text-xs font-medium  text-txt-light-txt-primary dark:text-txt-white lg:text-lg">
        {`
          ${convertBigNumberToStringNumber(currentTokenLocked, 2)} POSI
          ~${formatMoney(calculateWorthOfToken(currentTokenLocked, busdPrice))}
        `}
      </p>
      <div className="flex flex-row items-center mt-5">
        <Image
          src="/value_up.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <p className="ml-3  text-xs font-medium  text-red-500 dark:text-txt-secondary lg:text-base ">
          {`
            Circulating Supply: 
            ${percentage(currentTokenLocked, totalTokenLocked).toFixed(1)}%
          `}
        </p>
      </div>
      <ValueNftInfo
        totalNftsMinted={totalNftsMinted}
        totalNftsBurned={totalNftsBurned}
        totalNftsStaking={totalNftsStaking}
        totalUniqueMiners={totalUniqueMiners}
      />
    </div>
  )
}
