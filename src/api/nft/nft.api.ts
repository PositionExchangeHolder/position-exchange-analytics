import { gql } from '@apollo/client'
import { QueryNft } from 'pages/nft/nft.type'
import client from '../apolloInstance'
import {
  DataIntDayDate,
  ListDataIntDayDateResponse,
  ListNftStatisticResponse,
  ListTranSactionResponse,
} from './nft.type'
export const getListTransaction = async ({ skip }: QueryNft) => {
  const response: ListTranSactionResponse = await client.query({
    query: gql`
      query transactions {
        transactions(first: 10, skip: 10) {
          id
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
  })
  return response
}

export const getListNftDayData = async () => {
  const response: ListDataIntDayDateResponse = await client.query({
    query: gql`
      query nftDayDatas {
        nftDayDatas(first: 7, orderBy: date, orderDirection: desc) {
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
  })
  return response
}
