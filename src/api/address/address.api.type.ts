export type BalancerResponse = {
  data: {
    data: DataBalancerResponse
  }
}

export type DataBalancerResponse = {
  nftPoolBalances: NftPoolBalance[]
  stakingPoolBalances: StakingPool[]
  vaultBalances: StakingPool[]
  totalPosiBalance: TotalPosiBalance
}

export type NftPoolBalance = {
  pid: string | number
  name: string
  stakingBalance: string
  pendingReward: string
}

export type StakingPool = {
  pid: number
  name: string
  stakingBalance: string
  pendingReward: string
}

export type TotalPosiBalance = {
  pendingBalance: string
  stakingBalance: string
  total: string
  walletBalance: string
}

//referralAddress address

export type queryGetReferralAddressRequest = {
  orderBy: string
  referrerId: string
  skip: number
  first: number
}

export type ReferralAddressResponse = {
  data: DataReferrersAddress
}

export type DataReferrersAddress = {
  referrer: {
    id: string
    recordsRef: RecordsRefAddress[]
    totalReferralCommissions: string
    totalReferrals: string
  }
}
export type RecordsRefAddress = {
  id: string
  refTxHash: string
  totalCommissionsEarnedForReferrer: string
  updatedTimestamp: string
  createdTimestamp: string
  user: string
  referrer: {
    totalReferrals: string
    totalReferralCommissions: string
  }
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
