import { ItemNftStatistic } from 'api/nft/nft.type'
import Image from 'next/image'
import React from 'react'
import { nFormatter, percentage } from 'utils/number'
import ValueNftInfo from './ValueNftInfo'
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
  return (
    <div className="border-charade border  rounded-md bg-secondary   px-6 pt-4 w-full">
      <p className="font-medium text-base text-txt-primary   ">
        Current Value Locker
      </p>

      <p className="font-medium text-lg text-txt-primary mt-4">
        {`${nFormatter(currentTokenLocked, 2)} POSI ~${nFormatter(
          totalTokenLocked,
          2
        )}`}
      </p>
      <div className="mt-5 flex flex-row items-center">
        <Image
          src="/value_up.png"
          alt="logo"
          width={44}
          height={44}
          className="rounded-md"
        />
        <p className="font-medium text-base text-txt-secondary ml-3 ">
          {`Total circulation ${percentage(
            currentTokenLocked,
            totalTokenLocked
          ).toFixed(1)} %`}
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
