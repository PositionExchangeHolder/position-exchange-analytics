import { gql } from '@apollo/client'
import client from '../apolloInstance'
import {
  GetListActivitiesNftRequestParam,
  ListDataActivitiesNftResponse,
  NftDetailResponse,
} from './nft-detail-api.type'

export const getListActivitiesNft = async ({
  positionNftId,
  skip = 0,
  first = 10,
  orderBy = 'createdTimestamp',
  orderDirection = 'desc',
}: GetListActivitiesNftRequestParam) => {
  const response: ListDataActivitiesNftResponse = await client.query({
    query: gql`
      query PositionNFT(
        $positionNftId: ID!
        $skip: Int
        $first: Int
        $orderBy: Transaction_orderBy
        $orderDirection: OrderDirection
      ) {
        positionNFT(id: $positionNftId) {
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
      positionNftId,
      skip,
      first,
      orderBy,
      orderDirection 
    },
    context: {
      endpointName: 'nft',
    },
  })
  
  return response
}

export const getNftDetail = async ({
  positionNftId,
}: GetListActivitiesNftRequestParam) => {
  const response: NftDetailResponse = await client.query({
    query: gql`
      query PositionNFT($positionNftId: ID!) {
        positionNFT(id: $positionNftId) {
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
    variables: { positionNftId },
    context: {
      endpointName: 'nft',
    },
  })
  return response
}
