import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import { TopNftHolder } from 'types/api/nft'

export const getTopNftHolder = async (
  top = 10
): Promise<TopNftHolder[] | undefined> => {
  try {
    const res = await client.query({
      query: gql`
        query Owners(
          $first: Int,
          $orderBy: Owner_orderBy,
          $orderDirection: OrderDirection
        ) {
          owners(
            first: $first,
            orderBy: $orderBy,
            orderDirection: $orderDirection
          ) {
            id
            totalNfts
          }
        }
      `,
      variables: {
        first: top,
        orderBy: 'totalNfts',
        orderDirection: 'desc'
      },
      context: {
        endpoint: 'nft'
      }
    })
  
    return res.data.owners
  } catch (error) {
    return undefined
  }
}
