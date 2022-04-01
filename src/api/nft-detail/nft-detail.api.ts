import { gql } from '@apollo/client'
import client from '../apolloInstance'
import {
  GetListActivitiesNftRequestParam,
  ListDataActivitiesNftResponse,
  NftDetailResponse,
} from './nft-detail-api.type'

export const getListActivitiesNft = async ({
  first = 10,
  positionNftId,
  orderBy = 'createdTimestamp',
  orderDirection = 'desc',
}: GetListActivitiesNftRequestParam) => {
  const response: ListDataActivitiesNftResponse = await client.query({
    query: gql`
      query PositionNFT(
        $positionNftId: ID!
        $first: Int
        $orderBy: Transaction_orderBy
        $orderDirection: OrderDirection
      ) {
        positionNFT(id: $positionNftId) {
          transactions(
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
          ) {
            id
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
    variables: { first, positionNftId, orderBy, orderDirection },
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
  })
  return response
}
