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
  title?: any
}

export default function LineChart<T extends OptionValue>(props: Props<T>) {
  const {
    data,
    showLabel = true,
    title 
  } = props
  
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
          title: {
            display: title,
            text: title?.text
          }
        },
      }}
      className="p-2 h-10 dark:bg-secondary rounded-md border dark:border-0"
      type="line"
      datasetIdKey="id"
      data={{
        labels: data.label,
        datasets: data.dataChart,
      }}
    />
  )
}
