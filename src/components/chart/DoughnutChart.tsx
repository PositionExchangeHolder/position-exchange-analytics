import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

type OptionValue = any[]
type Option<T extends OptionValue> = {
  datasets: T
  labels: string[]
}
type Props<T extends OptionValue> = {
  data: Option<T>
}

export function DoughnutChart<T extends OptionValue>(props: Props<T>) {
  const { data } = props

  return (
    <Doughnut
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'rgb(255, 99, 132)',
              textAlign: 'left',
              pointStyle: 'triangle',
              usePointStyle: true,
              padding: 15,
            },
            position: 'top',
            align: 'start',
            onClick: (e) => e.native,
          },
        },
        layout: {
          padding: 0,
        },
      }}
    />
  )
}
