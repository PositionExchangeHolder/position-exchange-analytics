export type BalancerResponse = {
  data: {
    data: DataBalancerResponse
  }
}

export type DataBalancerResponse = {
  nftPoolBalance: NftPoolBalance
  stakingPoolBalances: StakingPoolBalances
  totalPosiBalance: TotalPosiBalance
}

export type NftPoolBalance = {
  pendingReward: string
  pool: string
  stakingBalance: string
}

export type StakingPoolBalances = stakingPoolBalancesItem[]
export type stakingPoolBalancesItem = {
  name: string
  pendingReward: string
  pid: number
  stakingBalance: string
}

export type TotalPosiBalance = {
  pendingBalance: string
  stakingBalance: string
  total: string
  walletBalance: string
}
