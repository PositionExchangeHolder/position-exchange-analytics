import { TotalPosiBalance } from 'api/address/address.api.type'
import React from 'react'
import { convertBigNumberToStringNumber } from 'utils/number'
export default function BalanceWallet({
  totalPosiBalance,
}: {
  totalPosiBalance: TotalPosiBalance | undefined
}) {
  return (
    <>
      <p className="font-medium text-txt-white text-xs lg:text-xl md:font-bold">
        $ {convertBigNumberToStringNumber(totalPosiBalance?.total || 0)}
      </p>

      <div className="relative w-full">
        <div className="w-full h-32 absolute flex-col items-center hidden mb-6 group-hover:flex">
          <div className="absolute w-3 h-3 -top-1 rotate-45 bg-black"></div>

          <div className="drop-shadow-[0_1px_2px_#1B2431] ring-1 ring-white ring-opacity-5 px-12 py-8 relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
            <div className="flex flex-col gap-y-3">
              <span>
                Balance Staking:{' '}
                {convertBigNumberToStringNumber(
                  totalPosiBalance?.stakingBalance || 0
                )}
              </span>
              <span>
                Balance Pending:{' '}
                {convertBigNumberToStringNumber(
                  totalPosiBalance?.pendingBalance || 0
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
