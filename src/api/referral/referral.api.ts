import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import {
  queryGetTopReferralResponse,
  TopReferralResponse,
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
      endpointName: 'referral',
    },
  })
  return response
}

export const getTopReferralResponse = async ({
  orderBy = 'totalReferrals',
}: queryGetTopReferralResponse) => {
  const response: TopReferralResponse = await client.query({
    query: gql`
      query Referrers(
        $orderBy: Referrer_orderBy
        $orderDirection: OrderDirection
        $first: Int
      ) {
        referrers(
          orderBy: $orderBy
          orderDirection: $orderDirection
          first: $first
        ) {
          id
          totalReferrals
          totalReferralCommissions
          createdTimestamp
          updatedTimestamp
        }
      }
    `,
    variables: {
      first: 10,
      orderBy: orderBy,
      orderDirection: 'desc',
    },
    context: {
      endpointName: 'referral',
    },
  })
  return response
}
