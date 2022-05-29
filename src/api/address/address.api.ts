import axios from 'axios'
import { DataLineChartNft } from 'helper/nft/transformDataLineChart'
import { BALANCER_ENDPOINT, POSITION_API } from 'utils/constants'
import { convertBigNumberToNumber } from 'utils/number'
import {
  AccountInfo,
  BalancerResponse,
  RealizedPnlAndTradingData,
} from './address.api.type'

export const getUserInfoBalance = async (address: string) => {
  const response: BalancerResponse = await axios.get(
    `${BALANCER_ENDPOINT}/${address}`
  )
  return response?.data?.data
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

export const getAccountInfo = async (
  address: string
): Promise<AccountInfo | undefined> => {
  const res = await axios.get(`${POSITION_API}/v1/account/info/${address.toLowerCase()}`)

  if (res.status === 200 && res.data.success) {
    return res.data.data
  }

  return undefined
}

export const fakeDataLineChart: DataLineChartNft = {
  label: [
    '19-04',
    '20-04',
    '21-04',
    '22-04',
    '23-04',
    '24-04',
    '25-04',
    '26-04',
    '27-04',
    '28-04',
    '29-04',
    '30-04',
    '01-05',
    '02-05',
    '03-05',
  ],
  dataChart: [
    {
      label: 'Token Locked',
      data: [
        138783, 179033, 102292, 125358, 149065, 134444, 224320, 512184, 502561,
        323549, 208651, 258131, 334027, 353091, 103374,
      ],
      borderColor: '#bb6bd9',
      lineTension: 0.1,
      pointBorderColor: '#111',
      pointBackgroundColor: '#ff4000',
      borderWidth: 1,
    },
  ],
}
