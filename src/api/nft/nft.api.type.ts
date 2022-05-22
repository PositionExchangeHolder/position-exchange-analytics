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
  transactions: ItemTranSaction[]
}

export type ItemTranSaction = {
  id: string
  txHash: string
  nft: {
    id: string
    grade: string
  }
  from: {
    id: string
  }
  to: {
    id: string
  }
  createdTimestamp: string
  gasLimit: string
  gasPrice: string
  action: ActiveTransaction
  grade: string
  sender: {
    id: string
  }
  createdBlockNumber: string
}

export type ActiveTransaction =
  | 'Mint'
  | 'Burn'
  | 'Transfer'
  | 'TradeOnMarketplace'
  | 'Stake'
  | 'Unstake'

export type FilterTransaction =
  | 'Mint'
  | 'Burn'
  | 'Transfer'
  | 'TradeOnMarketplace'
  | 'Stake'
  | 'Unstake'
  | 'All'

export type ItemNftDayDate = {
  id: number
  date: number
  dailyTokenLocked: number
  dailyNftMinted: number
  dailyNftBurned: number
  dailyTransactions: number
  createdBlockNumber: number
}

export type DataIntDayDate = {
  nftDayDatas: ItemNftDayDate[]
}

export type ListDataIntDayDateResponse = {
  data: DataIntDayDate
}
