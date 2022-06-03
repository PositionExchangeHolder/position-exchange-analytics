import React from 'react'
import { convertBigNumberToStringNumber } from 'utils/number'

type Props = {
  statistics: {
    totalCompoundTransactions: string | number
    totalRewardPaidForCompounder?: string| number
    totalUniqueCompounders: string| number
    updatedTimestamp?: string
    createdTimestamp?: string
  }
}

const VaultStatistics = ({ statistics }: Props) => {
  return (
    <div className="px-4 pt-4 w-full dark:bg-secondary rounded-md border dark:border-0 lg:px-6">
      <p className="text-xs font-medium text-txt-light-txt-primary dark:text-txt-white lg:text-base">
        VAULT STATISTICS
      </p>
      <p className="mt-2">
        Total Compound Transaction: {statistics.totalCompoundTransactions}
      </p>
      <p className="mt-2">
        Total Compounder: {statistics.totalUniqueCompounders}
      </p>
      <p className="mt-2">
        Total Reward: {
          convertBigNumberToStringNumber(statistics.totalRewardPaidForCompounder || 0, 0)
        } POSI
      </p>
      <p className="mt-2">
        Highest Gas Price: 1661 Gwei
      </p>
      <p className="mt-2">
        Lowest Gas Price: 5 Gwei
      </p>
    </div>
  )
}

export default VaultStatistics
