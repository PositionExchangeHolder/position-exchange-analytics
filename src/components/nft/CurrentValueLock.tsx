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
    <div className="rounded-md dark:bg-secondary dark:border-0 border px-4 lg:px-6 pt-4 w-full ">
      <p className="font-medium dark:text-txt-white text-txt-light-txt-primary text-xs lg:text-base">
        Current Token Locked
      </p>

      <p className="font-medium text-xs lg:text-lg  dark:text-txt-white text-txt-light-txt-primary mt-4">
        {`
          ${convertBigNumberToStringNumber(currentTokenLocked, 2)} POSI
          ~${formatMoney(calculateWorthOfToken(currentTokenLocked, busdPrice))}
        `}
      </p>
      <div className="mt-5 flex flex-row items-center">
        <Image
          src="/value_up.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <p className="font-medium  text-xs lg:text-base  dark:text-txt-secondary text-red-500 ml-3 ">
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
