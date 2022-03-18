// fnt type
export type ListNftStatisticResponse = {
  data: DataNftStatistic
}

export type DataNftStatistic = {
  nftStatistic: ItemNftStatistic
}

export type ItemNftStatistic = {
  id: string
  totalTransactions: string
  totalNftsMinted: string
  totalNftsBurned: string
  totalNftsStaking: string
  totalTokenLocked: string
  currentTokenLocked: string
  totalUniqueMiners: string
  totalGrade1Minted: string
  totalGrade2Minted: string
  totalGrade3Minted: string
  totalGrade4Minted: string
  totalGrade5Minted: string
  totalGrade6Minted: string
  totalGrade1Burned: string
  totalGrade2Burned: string
  totalGrade3Burned: string
  totalGrade4Burned: string
  totalGrade5Burned: string
  totalGrade6Burned: string
  createdBlockNumber: string
  createdTimestamp: string
  updatedTimestamp: string
}

// transaction type
export type ListTranSactionResponse = {
  data: DataTranSaction
}

export type DataTranSaction = {
  transactions: ItemTranSaction
}

export type ItemTranSaction = {
  id: string
}
