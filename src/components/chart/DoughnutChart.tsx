import { ResponsivePie } from '@nivo/pie'
import { DataDoughnutChart } from 'helper/nft/transformDataDoughnutChart'
import { useState } from 'react'

export function DoughnutChart({ data, total }: DataDoughnutChart) {
  const [metricValue, setMetricValue] = useState(total)
  const CenteredMetric = ({
    centerX,
    centerY,
  }: {
    centerX: number
    centerY: number
  }) => {
    return (
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        style={{
          fontSize: '18px',
          fontWeight: 500,
        }}
      >
        {metricValue}
      </text>
    )
  }
  return (
    <div className="w-full h-full">
      <ResponsivePie
        data={data}
        colors={{ scheme: 'category10' }}
        margin={{ top: 50, right: 50, bottom: 90, left: 50 }}
        innerRadius={0.5}
        padAngle={0.5}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="white"
        arcLinkLabelsThickness={1}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 3]],
        }}
        enableArcLinkLabels={true}
        enableArcLabels={false}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 70,
            itemsSpacing: 0,
            itemWidth: 55,
            itemHeight: 22,
            itemTextColor: '#999',
            itemDirection: 'bottom-to-top',
            itemOpacity: 1,
            //
            symbolShape: 'diamond',
            symbolSize: 16,
          },
        ]}
        onMouseEnter={(item) => {
          setMetricValue(item.value)
        }}
        onMouseLeave={() => {
          setMetricValue(total)
        }}
        tooltip={() => {
          return null
        }}
        layers={[
          'arcs',
          'arcLabels',
          'arcLinkLabels',
          'legends',
          CenteredMetric,
        ]}
      />
    </div>
  )
}
