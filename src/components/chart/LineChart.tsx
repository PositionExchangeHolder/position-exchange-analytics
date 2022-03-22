import 'chart.js/auto'
import React from 'react'
import { Chart } from 'react-chartjs-2'
import { DataLineChartNftLineChart } from 'utils/nft/transformData'
type Props = {
  data: DataLineChartNftLineChart
}
export default function App({ data }: Props) {
  return (
    <Chart
      options={{
        maintainAspectRatio: false,
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
