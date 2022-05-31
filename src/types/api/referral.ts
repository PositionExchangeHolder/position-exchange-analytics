export type ReferralStatistics = {
  totalReferralCommissions: string
  totalReferrals: string
}

export type ReferralRecord = {
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

export type ReferralAddress = {
  id: string
  recordsRef: ReferralRecord[]
  totalReferralCommissions: string
  totalReferrals: string
}

export type TopReferral = {
  id: string
  totalReferralCommissions: string
  totalReferrals: string
  createdTimestamp: string
  updatedTimestamp: string
}
