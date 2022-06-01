export type CompoundTransaction = {
  id: string // txHash
  type: string
  reward: string
  sender: string
  gasLimit: string
  gasPrice: string
  createdBlockNumber: string
  createdTimestamp: string
}

export type Compounder = {
  id: string // address
  totalCompoundTransactions: string
  totalRewardEarned: string
  createdTimestamp: string
  updatedTimestamp: string
}

export type VaultStatistics = {
  totalCompoundTransactions: string | number
  totalRewardPaidForCompounder?: string| number
  totalUniqueCompounders: string| number
  updatedTimestamp?: string
  createdTimestamp?: string
}
