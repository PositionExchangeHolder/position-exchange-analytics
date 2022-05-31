import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import { ReferralStatistics } from 'types/api/referral'

export const getReferralStatistics = async (): Promise<ReferralStatistics | undefined> => {
  try {
    const res = await client.query({
      query: gql`
        query PositionReferral($positionReferralId: ID!) {
          positionReferral(id: $positionReferralId) {
            totalReferralCommissions
            totalReferrals
          }
        }
      `,
      variables: {
        positionReferralId: '1'
      },
      context: {
        endpoint: 'referral'
      }
    })

    return res.data?.positionReferral
  } catch (error) {
    return undefined
  }
}
