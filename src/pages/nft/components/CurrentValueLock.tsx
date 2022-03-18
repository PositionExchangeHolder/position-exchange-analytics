import Image from 'next/image'
import React from 'react'
import { commasNumberFormat, nFormatter, percentage } from 'utils/number'
type Props = {
  currentTokenLocked: string
  totalTokenLocked: string
}
export default function CurrentValueLock({
  currentTokenLocked,
  totalTokenLocked,
}: Props) {
  return (
    <div className="border-charade border  rounded-md bg-secondary  h-180  px-6 pt-4 w-full">
      <p className="font-medium text-base text-txt-primary   ">
        Current Value Locker
      </p>

      <p className="font-medium text-lg text-txt-primary mt-4">
        {/* 1.433.896 POSI ~$4.435.545 */}
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
          {/* Total 48.5% growth this month */}
          {`Total circulation ${percentage(
            currentTokenLocked,
            totalTokenLocked
          ).toFixed(1)} %`}
        </p>
      </div>
    </div>
  )
}
