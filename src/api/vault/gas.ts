import axios from 'axios'
import { GasPrice } from 'types/api/vault'
import { SUBGRAPH } from 'utils/constants'

export const getLatestGasPrices = async ({
  skip = 0,
  first = 15,
  orderBy = 'createdTimestamp',
  orderDirection = 'desc',
  // type = 'All'
}: {
  skip?: number
  first?: number
  orderBy?: string
  orderDirection?: string
  type?: string
}): Promise<GasPrice[] | undefined> => {
  try {
    const query = `
      {
        latestGasPrices(
          skip: ${skip},
          first: ${first},
          orderBy: ${orderBy},
          orderDirection: ${orderDirection}
        ) {
          gasPrice
        }
      }
    `
    const res = await axios.post(SUBGRAPH.VAULTS, { query })
    
    return res.data?.data.latestGasPrices
  } catch (error) {
    return undefined
  }
}
