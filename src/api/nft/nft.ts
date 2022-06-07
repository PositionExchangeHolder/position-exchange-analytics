import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import { NftDetail, PositionNftActivity } from 'types/api/nft'

export const getNftDetail = async ({
  id
}: {
  id: string
}): Promise<NftDetail> => {
  const res = await client.query({
    query: gql`
      query PositionNFT($id: ID!) {
        positionNFT(id: $id) {
          id
          grade
          quality
          amount
          author {
            id
          }
          owner {
            id
          }
          lockedDays
          createdBlockNumber: blockNum
          burned
          createdTime
          updatedTimestamp
        }
      }
    `,
    variables: {
      id
    },
    context: {
      endpoint: 'nft'
    }
  })

  return res.data?.positionNFT
}

export const getActivitiesOfNft = async({
  nftId,
  skip = 0,
  first = 10,
  orderBy = 'createdTimestamp',
  orderDirection = 'desc'
}: {
  nftId: string | number
  skip?: number
  first?: number
  orderBy?: string
  orderDirection?: string
}): Promise<PositionNftActivity | undefined> => {
  try {
    const res = await client.query({
      query: gql`
        query PositionNFT(
          $nftId: ID!
          $skip: Int
          $first: Int
          $orderBy: Transaction_orderBy
          $orderDirection: OrderDirection
        ) {
          positionNFT(id: $nftId) {
            totalTransactions
            transactions(
              skip: $skip
              first: $first
              orderBy: $orderBy
              orderDirection: $orderDirection
            ) {
              id
              txHash
              action
              from {
                id
              }
              to {
                id
              }
              createdTimestamp
            }
          }
        }
      `,
      variables: {
        nftId,
        skip,
        first,
        orderBy,
        orderDirection 
      },
      context: {
        endpoint: 'nft',
      }
    })

    return res.data?.positionNFT
  } catch (error) {
    return undefined
  }
}

export const getNftsOfAddress = async (
  address: string,
  skip = 0,
  first = 8,
  orderBy = 'id',
  orderDirection = 'desc'
) => {
  try {
    const response = await client.query({
      query: gql`
        query Nft(
          $ownerId: ID!,
          $skip: Int,
          $first: Int,
          $orderBy: PositionNFT_orderBy,
          $orderDirection: OrderDirection
        ) {
          owner(id: $ownerId) {
            nft(
              skip: $skip,
              first: $first,
              orderBy: $orderBy,
              orderDirection: $orderDirection
            ) {
              id
              status
              grade
              amount
              lockedDays
              createdTime
              updatedTimestamp
            }
            totalNfts
          }
        }
      `,
      variables: {
        ownerId: address,
        skip,
        first,
        orderBy,
        orderDirection
      },
      context: {
        endpoint: 'nft'
      }
    })
  
    return response.data?.owner
  } catch (error) {
    return undefined
  }
}
