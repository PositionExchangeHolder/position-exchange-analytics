import LineChart from '@/components/chart/LineChart'
import Loading from '@/components/loading/Loading'
import { getHighestAndLowestGasPrice, getLatestGasPrices } from 'api/vault/gas'
import { DataLineChartNft } from 'helper/nft/transformDataLineChart'
import React, { useEffect, useState } from 'react'
import { GasPrice, GasPrices } from 'types/api/vault'
import { toGwei } from 'utils/number'

const getGasPriceReserveValue = (
  gasPirce: GasPrice[]
): number[] => {
  const arr = gasPirce.map(e => Number(toGwei(e.gasPrice, 0)))
  return arr.slice().reverse()
}

const getGasPriceDataLineChart = (
  gasPrices: GasPrices | undefined
): DataLineChartNft | undefined => {
  if (!gasPrices) {
    return
  }
  
  const lineChartOpts = {
    lineTension: 0.1,
    pointBorderColor: '#111',
    pointBackgroundColor: '#ff4000',
    borderWidth: 1
  }
  
  const label = Array.from(
    { length: gasPrices.bnb.length },
    (_, i) => (i + 1).toString()
  )
  const dataChart: any[] = []

  Object.entries(gasPrices).map(([key, value]) => {
    const reverseValue = getGasPriceReserveValue(value)
    if (key === 'bnb') {
      dataChart.push({
        label: 'BNB',
        data: reverseValue,
        borderColor: '#bb6bd9',
        ...lineChartOpts
      })
    }
    if (key === 'busd') {
      dataChart.push({
        label: 'BUSD',
        data: reverseValue,
        borderColor: '#78ffd6',
        ...lineChartOpts
      })
    }
  })

  return {
    label,
    dataChart
  } as DataLineChartNft
}

const GasPriceStatistics = () => {
  const [gasPrices, setGasPrices] = useState<GasPrices>()
  
  useEffect(() => {
    const fetchGasPrices = async () => {
      const res = await getLatestGasPrices({})
      getHighestAndLowestGasPrice()
      if (res) {
        setGasPrices(res)
      }
    }

    fetchGasPrices()
  }, [])

  const dataChart = getGasPriceDataLineChart(gasPrices)
  
  return (
    <>
      {
        !dataChart
          ? <Loading />
          : <LineChart
              data={dataChart}
              title={{ text: 'Gas Price used last 15 compound transactions' }}
            />
      }
    </>
  )
}

export default GasPriceStatistics
