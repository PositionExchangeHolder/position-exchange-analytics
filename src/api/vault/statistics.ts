import axios from 'axios'
import { VaultStatistics } from 'types/api/vault'
import { SUBGRAPH } from 'utils/constants'

export const getVaultSatistics = async (): Promise<VaultStatistics | undefined> => {
  try {
    const query = `
      positionVault(id: "1") {
        totalCompoundTransactions
        totalRewardPaidForCompounder
        totalUniqueCompounders
        updatedTimestamp
        createdTimestamp
      }
    `
    const res = await axios.post(SUBGRAPH.VAULTS.BUSD, { query })
    
    return res.data?.data.positionVault
  } catch (error) {
    console.log(error)
    return undefined
  }
}
