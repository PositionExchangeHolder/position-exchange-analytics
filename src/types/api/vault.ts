export type CompoundTransaction = {
  id: string // txHash
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
  totalCompoundTransactions: string
  totalRewardPaidForCompounder: string
  totalUniqueCompounders: string
  updatedTimestamp: string
  createdTimestamp: string
}
