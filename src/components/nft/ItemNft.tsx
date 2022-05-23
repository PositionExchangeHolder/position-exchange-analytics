import { getNftGradeImageUrl } from 'helper/nft/getNftImageUrl'
import { TypeItemNft } from 'helper/nft/transferDataTotalNft'
import Image from 'next/image'
import React from 'react'
import { commasNumberFormat } from 'utils/number'

type Props = {
  item: TypeItemNft
}

export default function ItemNft({ item }: Props) {
  return (
    <div className="flex justify-between py-3 px-6 w-full dark:bg-secondary rounded-md border dark:border-0 lg:py-4">
      <div className="sm:pt-2 ">
        <p className="text-xs dark:font-medium text-txt-light-txt-primary dark:text-txt-white md:text-sm">
          Circulating Supply
        </p>

        <p className="mt-6 text-sm dark:font-medium text-txt-light-txt-primary dark:text-txt-white md:text-base">
          {`${commasNumberFormat(item.currentValue)}
          / ${commasNumberFormat(item.totalMinted)}`}
        </p>
        <div className="flex mt-6 sm:mt-4">
          <p className="py-1 px-4 text-xs font-medium text-gray-400 dark:text-txt-primary bg-gray-100 dark:bg-mirage1 rounded-2xl md:text-sm">
            Grade {item.grade}
          </p>
        </div>
      </div>
      <Image
        src={getNftGradeImageUrl(item.grade)}
        alt="logo"
        width={90}
        height={120}
        layout="fixed"
      />
    </div>
  )
}
