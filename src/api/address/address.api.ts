import axios from 'axios'
import { BALANCER_ENDPOINT } from 'utils/constants'
import { BalancerResponse } from './address.api.type'

export const getUserInfoBalance = async (address: string) => {
  const response: BalancerResponse = await axios.get(
    `${BALANCER_ENDPOINT}/${address}`
  )
  return response?.data?.data
}

export const fakeDataLineChart = {
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
