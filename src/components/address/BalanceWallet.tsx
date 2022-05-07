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
      <p className="text-xs font-medium text-txt-white md:font-bold lg:text-xl">
        $ {convertBigNumberToStringNumber(totalPosiBalance?.total || 0)}
      </p>

      <div className="relative w-full">
        <div className="hidden group-hover:flex absolute flex-col items-center mb-6 w-full h-32">
          <div className="absolute -top-1 w-3 h-3 bg-black rotate-45"></div>

          <div className="relative z-10 p-2 py-8 px-12 text-xs leading-none text-white whitespace-nowrap bg-black ring-1  ring-white/5 shadow-lg drop-shadow-[0_1px_2px_#1B2431]">
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