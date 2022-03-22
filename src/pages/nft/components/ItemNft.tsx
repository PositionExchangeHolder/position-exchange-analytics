import { format, fromUnixTime } from 'date-fns'
import { TypeItemNft } from 'helper/nft'
import Image from 'next/image'
import React from 'react'
import { commasNumberFormat } from 'utils/number'

type Props = {
  item: TypeItemNft
}
export default function ItemNft({ item }: Props) {
  return (
    <div className="border-charade border  rounded-md bg-secondary  h-180  px-6  w-full flex justify-between">
      <div className="pt-5">
        <p className="font-medium text-base text-txt-primary   ">
          Circulating Supply
        </p>

        <p className="font-medium text-lg text-txt-primary mt-5">{`${commasNumberFormat(
          item.currentValue
        )} / ${commasNumberFormat(item.totalMinted)}`}</p>
        <div className="mt-6 flex">
          <p className="font-medium text-base text-txt-secondary bg-gun-powder px-4 py-1 rounded-2xl">
            {`Year of ${format(fromUnixTime(item.createdTimestamp), 'yyyy')}`}
          </p>
        </div>
      </div>
      <Image src="/fake_nft.png" alt="logo" width={180} height={180} />
    </div>
  )
}
