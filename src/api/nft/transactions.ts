import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import { NftTransaction } from 'types/api/nft'

export const getNftTransactions = async ({
  skip = 0,
  first = 10,
  action,
  grade
}: {
  action: string
  skip?: number
  first?: number
  grade?: string
}): Promise<NftTransaction[] | undefined> => {
  const filter: any = {
    first,
    skip,
  }
  if (action !== 'All') {
    filter.where = {
      action
    }
  }
  if (grade) {
    filter.where = {
      grade
    }
  }

  try {
    const res = await client.query({
      query: gql`
        query transactions($skip: Int, $first: Int, $where: Transaction_filter) {
          transactions(
            skip: $skip
            first: $first
            where: $where
            orderBy: createdTimestamp
            orderDirection: desc
          ) {
            id
            txHash
            nft {
              id
              grade
            }
            from {
              id
            }
            to {
              id
            }
            gasLimit
            gasPrice
            createdTimestamp
            action
            grade
            sender {
              id
            }
            createdBlockNumber
          }
        }
      `,
      variables: filter,
      context: {
        endpoint: 'nft'
      }
    })

    return res.data?.transactions
  } catch (error) {
    return undefined
  }
}
