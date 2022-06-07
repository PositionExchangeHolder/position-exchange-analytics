import axios from 'axios'
import { AddressStatistics } from 'types/api/address'
import { SUBGRAPH } from 'utils/constants'

export const getAddressStatistics = async (
  address: string
): Promise<AddressStatistics | undefined> => {
  try {
    const query = `
      {
        user(id: "${address.toLowerCase()}") {
          totalTokensBuy
          totalTokensSell
          totalVolumeInBUSD
          totalTransactions
          totalSwapTransactions
        }
      }
    `
    const res = await axios.post(SUBGRAPH.TOKEN, { query })
    console.log(res.data)

    return res.data?.data.user
  } catch (error) {
    return undefined
  }
}