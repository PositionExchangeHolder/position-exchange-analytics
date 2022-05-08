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

//referralAddress address

export type queryGetReferralAddressRequest = {
  orderBy:
    | 'id'
    | 'user'
    | 'referrer'
    | 'refTxHash'
    | 'totalCommissionsEarnedForReferrer'
    | 'createdBlockNumber'
    | 'createdTimestamp'
    | 'updatedTimestamp'
  referrerId: string
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
