import { gql } from '@apollo/client'
import { QueryNft } from 'common/nft/nft.type'
import client from '../apolloInstance'
import {
  ListDataIntDayDateResponse,
  ListNftStatisticResponse,
  ListTranSactionResponse,
} from './nft.api.type'

export const getListTransaction = async ({ skip, action }: QueryNft) => {
  const filter: any = {
    first: 10,
    skip,
  }
  if (action !== 'All') {
    filter.where = {
      action,
    }
  }
  
  const response: ListTranSactionResponse = await client.query({
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
      endpointName: 'nft',
    },
  })
  
  return response
}

export const getListNftStatistic = async () => {
  const response: ListNftStatisticResponse = await client.query({
    query: gql`
      query nftStatistic {
        nftStatistic(id: "1") {
          id
          totalTransactions
          totalNftsMinted
          totalNftsBurned
          totalNftsStaking
          totalTokenLocked
          currentTokenLocked
          totalUniqueMiners
          totalGrade1Minted
          totalGrade2Minted
          totalGrade3Minted
          totalGrade4Minted
          totalGrade5Minted
          totalGrade6Minted
          totalGrade1Burned
          totalGrade2Burned
          totalGrade3Burned
          totalGrade4Burned
          totalGrade5Burned
          totalGrade6Burned
          createdBlockNumber
          createdTimestamp
          updatedTimestamp
        }
      }
    `,
    context: {
      endpointName: 'nft',
    },
  })
  
  return response
}

export const getListNftDayData = async () => {
  const response: ListDataIntDayDateResponse = await client.query({
    query: gql`
      query nftDayDatas {
        nftDayDatas(first: 15, orderBy: date, orderDirection: desc) {
          id
          date
          dailyTokenLocked
          dailyNftMinted
          dailyNftBurned
          dailyTransactions
          createdBlockNumber
        }
      }
    `,
    context: {
      endpointName: 'nft',
    },
  })
  return response
}

export const getNftsOfAddress = async (
  address: string,
  skip = 0,
  first = 8,
  orderBy = 'id',
  orderDirection = 'desc'
) => {
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
      endpointName: 'nft'
    }
  })

  return response.data.owner
}
