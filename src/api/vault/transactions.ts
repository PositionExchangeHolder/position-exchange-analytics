import axios from 'axios'
import { CompoundTransaction } from 'types/api/vault'
import { SUBGRAPH } from 'utils/constants'

export const getCompoundTransactions = async ({
  skip = 0,
  first = 10,
  orderBy = 'createdTimestamp',
  orderDirection = 'desc'
}: {
  skip?: number
  first?: number
  orderBy?: string
  orderDirection?: string
}): Promise<CompoundTransaction[] | undefined> => {
  try {
    const query = `
      {
        compoundTransactions(
          skip: ${skip},
          first: ${first},
          orderBy: ${orderBy},
          orderDirection: ${orderDirection}
        ) {
          id
          reward
          sender {
            id
          }
          gasLimit
          gasPrice
          createdBlockNumber
          createdTimestamp
        }
      }
    `
    const res = await axios.post(SUBGRAPH.VAULTS.BUSD, { query })
    const result: CompoundTransaction[] = res.data?.data.compoundTransactions.map((e: any) => {
      return {
        ...e,
        sender: e.sender.id.substring(1)
      }
    })

    return result
  } catch (error) {
    return undefined
  }
}
