import { format, fromUnixTime } from 'date-fns'
import { isArray } from 'lodash'

export type DataLineChartNft = {
  label: string[]
  dataChart: ItemDataNftLineChart[]
}

export interface ItemDataNftLineChart extends styleLineChart {
  label: string
  data: string[]
}

export type styleLineChart = {
  borderColor: string
  lineTension: number
  pointBorderColor: string
  pointBackgroundColor: string
  pointBorderWidth: number
}
const transferDataItemLineChart = (arr: []) => {
  const label: string[] = []

  const initialValue = {
    dailyTokenLocked: [],
    dailyNftMinted: [],
    dailyNftBurned: [],
    dailyTransactions: [],
  }
  const dataItemLineChart = arr.reduce((obj: any, item: any) => {
    const date = format(fromUnixTime(item?.date), 'dd-MM')
    label.push(date)
    Object.entries(item).map(([key, value]) => {
      if (isArray(obj[key])) {
        obj[key].push(value)
      }
    })
    return obj
  }, initialValue)

  const labelReverse = label.slice().reverse()
  return { label: labelReverse, dataItemLineChart }
}

export const transformDataLineChartNft = (array: any) => {
  const { dataItemLineChart, label } = transferDataItemLineChart(array)
  const dataTransform: ItemDataNftLineChart[] = []
  Object.entries(dataItemLineChart).map(([key, value]: any) => {
    const valueReverse = value.slice().reverse()

    if (key === 'dailyTokenLocked') {
      dataTransform.push({
        label: 'Token lock',
        data: valueReverse,
        borderColor: '#FD4659',
        lineTension: 0.1,
        pointBorderColor: '#111',
        pointBackgroundColor: '#ff4000',
        pointBorderWidth: 2,
      })
    }
    if (key === 'dailyNftMinted') {
      dataTransform.push({
        label: 'Minted',
        data: valueReverse,
        borderColor: ' #9DBCD4',
        lineTension: 0.1,
        pointBorderColor: '#111',
        pointBackgroundColor: '#ff4000',
        pointBorderWidth: 2,
      })
    }
    if (key === 'dailyNftBurned') {
      dataTransform.push({
        label: 'Burned',
        data: valueReverse,
        borderColor: '#32BF84',
        lineTension: 0.1,
        pointBorderColor: '#111',
        pointBackgroundColor: '#ff4000',
        pointBorderWidth: 2,
      })
    }
    if (key === 'dailyTransactions') {
      dataTransform.push({
        label: 'Transactions',
        data: valueReverse,
        borderColor: '#02066F',
        lineTension: 0.1,
        pointBorderColor: '#111',
        pointBackgroundColor: '#ff4000',
        pointBorderWidth: 2,
      })
    }
  })

  return {
    label,
    dataChart: dataTransform,
  } as DataLineChartNft
}
