import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import { ToTalReferralResponse } from './referral.api.type'

export const getToTalReferralResponse = async () => {
  const response: ToTalReferralResponse = await client.query({
    query: gql``,
  })
  return response
}
