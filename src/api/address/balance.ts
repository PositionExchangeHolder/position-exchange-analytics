
import axios from 'axios'
import { AccountPosiBalances, RealizedPnlAndTradingData } from 'types/api/address'
import { POSITION_API } from 'utils/constants'
import { convertBigNumberToNumber } from 'utils/number'

export const getAddressBalances = async (
  address: string
): Promise<AccountPosiBalances> => {
  const response = await axios.get(
    `${POSITION_API}/v1/address/${address}`
  )
  
  return response?.data?.data.data
}

export const getRealizedPnlAndTradingDataOfAddress = async (
  address: string
): Promise<RealizedPnlAndTradingData> => {
  const res = await axios.get(`${POSITION_API}/v1/address/${address}/pnl`)

  const realizedPnlAndTradingData = {
    realizedPnl: convertBigNumberToNumber(
      res.data.data?.user?.realizedPnl || 0,
      0
    ),
    totalTokensBuy: res.data.data?.user?.totalTokensBuy,
    totalTokensSell: res.data.data?.user?.totalTokensSell,
    totalVolumeInBUSD: res.data.data?.user?.totalVolumeInBUSD,
    totalTransactions: res.data.data?.user?.totalTransactions,
    createdTimestamp: res.data.data?.user?.createdTimestamp,
    updatedTimestamp: res.data.data?.user?.updatedTimestamp,
  }

  return realizedPnlAndTradingData
}
