import axios from 'axios'
import { Compounder } from 'types/api/vault'
import { SUBGRAPH } from 'utils/constants'

export const getTopCompounder = async ({
  skip = 0,
  first = 10,
  orderBy = 'totalRewardEarned',
  orderDirection = 'desc'
}): Promise<Compounder[] | undefined> => {
  try {
    const query = `
      {
        compounders(
          skip: ${skip},
          first: ${first},
          orderBy: ${orderBy},
          orderDirection: ${orderDirection}
        ) {
          id
          totalCompoundTransactions
          totalRewardEarned
          createdTimestamp
          updatedTimestamp
        }
      }
    `
    const res = await axios.post(SUBGRAPH.VAULTS.BUSD, { query })
    const result: Compounder[] = res.data?.data.compounders.map((e: any) => {
      return {
        ...e,
        id: e.id.substring(1)
      }
    })

    return result
  } catch (error) {
    console.log(error)
    return undefined
  }
}