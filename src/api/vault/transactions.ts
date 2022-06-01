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
          type
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
    const res = await axios.post(SUBGRAPH.VAULTS, { query })
    const txs: CompoundTransaction[] = res.data
      ?.data.compoundTransactions.map((e: any) => {
        return {
          ...e,
          sender: e.sender.id.substring(1)
        }
      })

    return txs
  } catch (error) {
    return undefined
  }
}
