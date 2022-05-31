export type AccountInfo = {
  address: string
  active: boolean
  created_at: number
  updated_at: number
  name?: string
  image?: string
  email?: string
  github?: string
  twitter?: string
  ref?: string
}

export type RealizedPnlAndTradingData = {
  realizedPnl: number
  totalTokensBuy: string
  totalTokensSell: string
  totalVolumeInBUSD: string
  totalTransactions: string
  createdTimestamp: string
  updatedTimestamp: string
}

export type AccountPosiBalances = {
  nftPoolBalances: StakingPool[]
  stakingPoolBalances: StakingPool[]
  vaultBalances: StakingPool[]
  totalPosiBalance: TotalPosiBalance
}

export type StakingPool = {
  pid: number
  name: string
  stakingBalance: string
  pendingReward: string
}

export type TotalPosiBalance = {
  walletBalance: string
  stakingBalance: string
  pendingBalance: string
  total: string
}
