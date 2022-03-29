import { TypeItemNft } from 'helper/nft/transferDataTotalNft'
import Image from 'next/image'
import React from 'react'
import { commasNumberFormat } from 'utils/number'

type Props = {
  item: TypeItemNft
}
export default function ItemNft({ item }: Props) {
  return (
    <div className="border-charade border rounded-md bg-secondary py-3 lg:py-4  px-6  w-full flex justify-between">
      <div className="sm:pt-2 ">
        <p className="font-medium text-xs md:text-sm text-txt-primary  ">
          Circulating Supply
        </p>

        <p className="font-medium text-sm md:text-base text-txt-primary mt-5">{`${commasNumberFormat(
          item.currentValue
        )} / ${commasNumberFormat(item.totalMinted)}`}</p>
        <div className="mt-6 sm:mt-4 flex">
          <p className="font-medium  text-xs md:text-sm text-txt-secondary bg-gun-powder px-4 py-1 rounded-2xl">
            gradle {item.grade}
          </p>
        </div>
      </div>
      <Image
        className="w-3 h-3"
        src="/fake_nft.png"
        alt="logo"
        width={120}
        height={120}
        layout="fixed"
      />
    </div>
  )
}
