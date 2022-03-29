import 'chart.js/auto'
import React from 'react'
import { Chart } from 'react-chartjs-2'
import { ItemDataNftLineChart } from 'helper/nft/transformDataLineChart'

type OptionValue = ItemDataNftLineChart[]

type Option<T extends OptionValue> = {
  dataChart: T
  label: string[]
}

type Props<T extends OptionValue> = {
  data: Option<T>
}
export default function LineChart<T extends OptionValue>(props: Props<T>) {
  const { data } = props
  return (
    <Chart
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              textAlign: 'left',
              pointStyle: 'cross',
            },
            position: 'bottom',
            align: 'start',
          },
        },
      }}
      className="h-10 rounded-md px-2 py-2 bg-secondary"
      type="line"
      datasetIdKey="id"
      data={{
        labels: data.label,
        datasets: data.dataChart,
      }}
    />
  )
}
