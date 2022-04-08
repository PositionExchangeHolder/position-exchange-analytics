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
