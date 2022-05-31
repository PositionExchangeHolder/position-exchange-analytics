import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import { ReferralAddress, TopReferral } from 'types/api/referral'

export const getReferralAddress = async ({
  referrerId,
  skip = 0,
  first = 10,
  orderBy = 'updatedTimestamp',
  orderDirection = 'desc'
}: {
  referrerId: string
  skip: number
  first: number
  orderBy: string
  orderDirection?: string
}): Promise<ReferralAddress | undefined> => {
  try {
    const res = await client.query({
      query: gql`
        query Referrer(
          $referrerId: ID!
          $skip: Int
          $first: Int
          $orderBy: UserReferralRecord_orderBy
          $orderDirection: OrderDirection
        ) {
          referrer(id: $referrerId) {
            id
            recordsRef(
              skip: $skip
              first: $first
              orderBy: $orderBy
              orderDirection: $orderDirection
            ) {
              id
              user
              refTxHash
              totalCommissionsEarnedForReferrer
              updatedTimestamp
              createdTimestamp
              referrer {
                totalReferrals
                totalReferralCommissions
              }
            }
            totalReferrals
            totalReferralCommissions
          }
        }
      `,
      variables: {
        referrerId,
        skip,
        first,
        orderBy,
        orderDirection
      },
      context: {
        endpoint: 'referral'
      }
    })

    return res.data?.referrer
  } catch (error) {
    return undefined
  }
}

export const getTopReferral = async ({
  orderBy = 'totalReferrals'
}): Promise<TopReferral | undefined> => {
  try {
    const res = await client.query({
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
        orderDirection: 'desc'
      },
      context: {
        endpoint: 'referral'
      }
    })

    return res.data?.referrers
  } catch (error) {
    return undefined
  }
}
