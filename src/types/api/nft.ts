export type NftDetail = {
  id: string
  grade: string
  quality: string
  amount: string
  author: { id: string }
  owner: { id: string }
  lockedDays: string
  totalTransactions: string
  totalOwners: string
  burned: boolean
  createdBlockNumber: string
  createdTime: string
  updatedTimestamp: string
}

export type PositionNftActivity = {
  totalTransactions: string | number
  transactions: NftTransaction[]
}

export type NftTransactionAction =
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

export type NftTransaction = {
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
  action: NftTransactionAction
  grade: string
  sender: {
    id: string
  }
  createdBlockNumber: string
}

export type NftStatistics = {
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

export type TopNftHolder = {
  id: string
  totalNfts: string
}

export type NftDayData = {
  id: number
  date: number
  dailyTokenLocked: number
  dailyNftMinted: number
  dailyNftBurned: number
  dailyTransactions: number
  createdBlockNumber: number
}
