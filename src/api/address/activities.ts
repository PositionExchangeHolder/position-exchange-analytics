import axios from 'axios'
import { SUBGRAPH } from 'utils/constants'

export const getSwapTransactionsOfAddress = async ({
  address,
  skip = 0,
  first = 10,
  orderBy = 'createdTimestamp',
  orderDirection = 'desc'
}: {
  address: string
  skip?: number
  first?: number
  orderBy?: string
  orderDirection?: string
}) => {
  try {
    const query = `
      {
        user(id: "${address}") {
          totalSwapTransactions
          swapTransactions(
            skip: ${skip},
            first: ${first},
            orderBy: ${orderBy},
            orderDirection: ${orderDirection}
          ) {
            id
            amountPosi
            amountQuote
            amountBusd
            action
            market
            createdTimestamp
          }
        }
      }
    `
    const res = await axios.post(SUBGRAPH.TOKEN, { query })
    const result = {
      totalSwapTransactions: res.data?.data.user.totalSwapTransactions,
      swapTransactions: res.data?.data.user.swapTransactions
    }
    
    return result
  } catch (error) {
    return undefined
  }
}
