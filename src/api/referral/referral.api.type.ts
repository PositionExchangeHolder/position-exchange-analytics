export type ToTalReferralResponse = {
  data: DataPositionReferral
}
export type PositionReferral = {
  totalReferralCommissions: string
  totalReferrals: string
}
export type DataPositionReferral = {
  positionReferral: PositionReferral
}

export type ToTalReferralRequest = {
  positionReferralId?: string
}
// Top Compounders
export type TopReferralResponse = {
  data: DataReferrers
}
export type TopReferralRecord = {
  id: string
  totalReferralCommissions: string
  totalReferrals: string
  createdTimestamp: string
  updatedTimestamp: string
}
export type DataReferrers = {
  referrers: TopReferralRecord[]
}

export type TopDataReferrers = {
  topReferralsRanker: TopReferralRecord[]
  orderBy: 'totalReferralCommissions' | 'totalReferrals'
}

export type TopReferralRequest = Record<string, unknown>

export type queryGetTopReferralResponse = {
  orderBy: 'totalReferralCommissions' | 'totalReferrals'
}
