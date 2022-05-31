import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from 'store/hooks'
import { convertBigNumberToStringNumber, percentage } from 'utils/number'
import ValueNftInfo from './ValueNftInfo'
import { selectPrice } from 'store/price/priceSlice'
import {
  calculateWorthOfToken,
  formatMoney,
  getPosiBusdPrice,
} from 'utils/price'
import { NftStatistics } from 'types/api/nft'
import { getNftStatistics } from 'api/nft/statistics'

export default function CurrentValueLock() {
  const [nftStatistics, setNftStatistics] = useState<NftStatistics | undefined>()
  const { prices } = useAppSelector(selectPrice)
  const busdPrice = getPosiBusdPrice(prices)

  useEffect(() => {
    const fetchNftStatistics = async () => {
      const statistics = await getNftStatistics()
      setNftStatistics(statistics)
    }

    fetchNftStatistics()
  }, [])

  return (
    <div className="px-4 pt-4 w-full dark:bg-secondary rounded-md border dark:border-0 lg:px-6">
      <p className="text-xs font-medium text-txt-light-txt-primary dark:text-txt-white lg:text-base">
        Total Token Locked
      </p>

      <p className="mt-4 text-xs font-medium text-txt-light-txt-primary dark:text-txt-white lg:text-lg">
        {`
          ${convertBigNumberToStringNumber(nftStatistics?.currentTokenLocked || 0, 2)} POSI
          ~${formatMoney(calculateWorthOfToken(nftStatistics?.currentTokenLocked || 0, busdPrice))}
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
        <p className="ml-3 text-xs font-medium text-red-500 dark:text-txt-secondary lg:text-base">
          {`
            Circulating Supply: 
            ${percentage(
              nftStatistics?.currentTokenLocked || 0,
              nftStatistics?.totalTokenLocked || 0
            ).toFixed(2)}%
          `}
        </p>
      </div>
      <ValueNftInfo
        totalNftsMinted={nftStatistics?.totalNftsMinted || '0'}
        totalNftsBurned={nftStatistics?.totalNftsBurned || '0'}
        totalNftsStaking={nftStatistics?.totalNftsStaking || '0'}
        totalUniqueMiners={nftStatistics?.totalUniqueMiners || '0'}
      />
    </div>
  )
}
