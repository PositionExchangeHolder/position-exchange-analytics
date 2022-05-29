import axios from 'axios'
import { AccountInfo } from 'types/api/address'
import { POSITION_API } from 'utils/constants'

export const getAccountInfo = async (
  address: string
): Promise<AccountInfo | undefined> => {
  const res = await axios.get(`${POSITION_API}/v1/account/info/${address.toLowerCase()}`)

  if (res.status === 200 && res.data.success) {
    return res.data.data
  }

  return undefined
}
