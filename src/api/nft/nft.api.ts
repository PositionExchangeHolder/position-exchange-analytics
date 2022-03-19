import { gql } from '@apollo/client'
import client from '../apolloInstance'
import { ListNftStatisticResponse, ListTranSactionResponse } from './nft.type'
export const getListTransaction = async () => {
  return (await client.query({
    query: gql`
      query transactions {
        transactions(first: 10, limit: 2, cursor: 1) {
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
  })) as ListTranSactionResponse
}

export const getListNftStatistic = async () => {
  return (await client.query({
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
  })) as ListNftStatisticResponse
}