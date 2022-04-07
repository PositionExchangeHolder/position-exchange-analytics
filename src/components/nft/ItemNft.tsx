import { TypeItemNft } from 'helper/nft/transferDataTotalNft'
import Image from 'next/image'
import React from 'react'
import { commasNumberFormat } from 'utils/number'

type Props = {
  item: TypeItemNft
}
export default function ItemNft({ item }: Props) {
  return (
    <div className=" rounded-md dark:bg-secondary dark:border-0 border py-3 lg:py-4  px-6  w-full flex justify-between">
      <div className="sm:pt-2 ">
        <p className="dark:font-medium text-xs md:text-sm dark:text-txt-white text-txt-light-txt-primary  ">
          Circulating Supply
        </p>

        <p className="dark:font-medium text-sm md:text-base dark:text-txt-white text-txt-light-txt-primary mt-6">
          {`${commasNumberFormat(item.currentValue)}
          / ${commasNumberFormat(item.totalMinted)}`}
        </p>
        <div className="mt-6 sm:mt-4 flex">
          <p className="font-medium  text-xs md:text-sm dark:text-txt-primary text-gray-400 bg-gray-100 dark:bg-mirage1 px-4 py-1 rounded-2xl">
            Grade {item.grade}
          </p>
        </div>
      </div>
      <Image
        src={`/grade${item.grade}.png`}
        alt="logo"
        width={90}
        height={120}
        layout="fixed"
      />
    </div>
  )
}
