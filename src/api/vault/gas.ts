import axios from 'axios'
import { GasPrices } from 'types/api/vault'
import { SUBGRAPH } from 'utils/constants'

export const getLatestGasPrices = async ({
  skip = 0,
  first = 15,
  orderBy = 'createdTimestamp',
  orderDirection = 'desc',
}: {
  skip?: number
  first?: number
  orderBy?: string
  orderDirection?: string
}): Promise<GasPrices | undefined> => {
  try {
    const queryBNB = `
      {
        compoundTransactions(
          skip: ${skip},
          first: ${first},
          orderBy: ${orderBy},
          orderDirection: ${orderDirection},
          where: {
            type: "BNB"
          }
        ) {
          gasPrice
        }
      }
    `
    const queryBUSD = `
      {
        compoundTransactions(
          skip: ${skip},
          first: ${first},
          orderBy: ${orderBy},
          orderDirection: ${orderDirection},
          where: {
            type: "BUSD"
          }
        ) {
          gasPrice
        }
      }
    `
    
    const [resBNB, resBUSD] = await Promise.all([
      await axios.post(SUBGRAPH.VAULTS, { query: queryBNB }),
      await axios.post(SUBGRAPH.VAULTS, { query: queryBUSD })
    ])
    const result = {
      bnb: resBNB.data?.data.compoundTransactions,
      busd: resBUSD.data?.data.compoundTransactions
    }
    
    return result
  } catch (error) {
    return undefined
  }
}

export const getHighestAndLowestGasPrice = async () => {
  try {
    const queryHighest = `
      {
        compoundTransactions(
          first: 1,
          orderBy: "gasPrice",
          orderDirection: "desc"
        ) {
          gasPrice
        }
      }
    `
    const queryLowest = `
      {
        compoundTransactions(
          first: 1,
          orderBy: "gasPrice",
          orderDirection: "asc"
        ) {
          gasPrice
        }
      }
    `

    const [resHighest, resLowest] = await Promise.all([
      await axios.post(SUBGRAPH.VAULTS, { query: queryHighest }),
      await axios.post(SUBGRAPH.VAULTS, { query: queryLowest })
    ])
    const result = {
      highest: resHighest.data?.data.compoundTransactions[0].gasPrice,
      lowest: resLowest.data?.data.compoundTransactions[0].gasPrice
    }

    return result
  } catch (error) {
    return undefined
  }
}
