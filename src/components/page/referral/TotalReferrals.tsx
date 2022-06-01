import React from 'react'
import { ReferralStatistics } from 'types/api/referral'
import {
  commasNumberFormat,
  convertBigNumberToStringNumber,
} from 'utils/number'

export default function TotalReferrals({
  toTalReferral,
}: {
  toTalReferral: ReferralStatistics | undefined
}) {
  return (
    <div className="py-0 w-full border dark:border-0 md:py-2 md:dark:bg-secondary">
      <div className="flex flex-row gap-x-8 justify-center py-4">
        <div className="flex flex-col justify-center items-center p-2 w-40 h-40 dark:bg-secondary rounded-md border dark:border-waterloo md:py-6 lg:py-8">
          <p className="px-2 text-xs text-center text-txt-light-secondary dark:text-txt-primary md:px-6 lg:text-base">
            Total Referrals
          </p>
          <p className="mt-3 text-tiny-xs font-medium text-center text-txt-light-txt-primary dark:text-txt-primary lg:text-lg">
            {commasNumberFormat(toTalReferral?.totalReferrals || 0)}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center py-8 px-2 w-40 h-40 dark:bg-secondary rounded-md border dark:border-waterloo md:py-6 lg:py-8">
          <p className=" px-2 text-xs text-center text-txt-light-secondary dark:text-txt-primary md:px-6 lg:text-base ">
            Total Commissions
          </p>
          <p className="mt-3 text-tiny-xs font-medium text-center text-txt-light-txt-primary dark:text-txt-primary lg:text-lg">
            {`~${convertBigNumberToStringNumber(
              toTalReferral?.totalReferralCommissions || 0,
              0
            )} POSI`}
          </p>
        </div>
      </div>
    </div>
  )
}
