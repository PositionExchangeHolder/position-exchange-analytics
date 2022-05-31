import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import { NftStatistics } from 'types/api/nft'

export const getNftStatistics = async (): Promise<NftStatistics | undefined> => {
  try {
    const res = await client.query({
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
        endpoint: 'nft'
      }
    })
  
    return res.data?.nftStatistic
  } catch (error) {
    return undefined
  }
}
