import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import {
  ToTalReferralRequest,
  ToTalReferralResponse,
} from './referral.api.type'

export const getToTalReferralResponse = async ({}: ToTalReferralRequest) => {
  const response: ToTalReferralResponse = await client.query({
    query: gql`
      query PositionReferral($positionReferralId: ID!) {
        positionReferral(id: $positionReferralId) {
          totalReferralCommissions
          totalReferrals
        }
      }
    `,
    variables: {
      positionReferralId: '1',
    },
    context: {
      endPointName: 'referral',
    },
  })
  return response
}
