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
  showLabel?: boolean
}
export default function LineChart<T extends OptionValue>(props: Props<T>) {
  const { data, showLabel = true } = props
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
            display: showLabel,
          },
        },
      }}
      className="h-10 rounded-md px-2 py-2 dark:bg-secondary border dark:border-0"
      type="line"
      datasetIdKey="id"
      data={{
        labels: data.label,
        datasets: data.dataChart,
      }}
    />
  )
}
