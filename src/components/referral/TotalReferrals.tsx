import { PositionReferral } from 'api/referral/referral.api.type'
import React from 'react'
import {
  commasNumberFormat,
  convertBigNumberToStringNumber,
} from 'utils/number'

export default function TotalReferrals({
  toTalReferral,
}: {
  toTalReferral: PositionReferral | undefined
}) {
  return (
    <div className="md:py-2 py-0  md:dark:bg-secondary  w-full dark:border-0 border ">
      <div className="py-4 flex flex-row justify-center gap-x-8">
        <div className="w-40 h-40   px-2 py-2  md:py-6 lg:py-8 flex flex-col border rounded-md dark:bg-secondary  dark:border-waterloo  items-center justify-center ">
          <p className=" px-2 md:px-6 text-xs lg:text-base dark:text-txt-primary text-txt-light-secondary text-center  ">
            Total Referrals
          </p>
          <p className="mt-3 font-medium text-tiny-xs lg:text-lg dark:text-txt-primary text-txt-light-txt-primary text-center">
            {commasNumberFormat(toTalReferral?.totalReferrals || 0)}
          </p>
        </div>
        <div className="w-40 h-40  px-2 py-8  md:py-6 lg:py-8 flex flex-col border rounded-md dark:bg-secondary  dark:border-waterloo items-center justify-center">
          <p className=" px-2 md:px-6  text-xs lg:text-base dark:text-txt-primary text-txt-light-secondary text-center   ">
            Total Commissions
          </p>
          <p className="mt-3 font-medium  text-tiny-xs lg:text-lg dark:text-txt-primary text-txt-light-txt-primary text-center">
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
