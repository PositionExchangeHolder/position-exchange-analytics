import { gql } from '@apollo/client'
import client from 'api/apolloInstance'
import { NftDayData } from 'types/api/nft'

export const getNftDayData = async (): Promise<NftDayData[]> => {
  const res = await client.query({
    query: gql`
      query nftDayDatas {
        nftDayDatas(
          first: 15,
          orderBy: date,
          orderDirection: desc
        ) {
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
      endpoint: 'nft'
    }
  })

  return res.data?.nftDayDatas
}
