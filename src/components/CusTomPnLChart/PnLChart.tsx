import { ResponsiveLine } from '@nivo/line'
import React from 'react'

export default function PnLChart() {
  return (
    <ResponsiveLine
      data={[
        {
          id: 'positivexx',
          data: [
            { x: 0, y: 0.7 },
            { x: 1, y: 0.9 },
            { x: 2, y: 0.8 },
            { x: 3, y: 0.6 },
            { x: 4, y: 0.3 },
            { x: 5, y: 0 },
            { x: 6, y: null },
            { x: 7, y: null },
            { x: 8, y: null },
            { x: 9, y: null },
            { x: 10, y: null },
            { x: 11, y: 0 },
            { x: 12, y: 0.4 },
            { x: 13, y: 0.6 },
            { x: 14, y: 0.5 },
            { x: 15, y: 0.3 },
            { x: 16, y: 0.4 },
            { x: 17, y: 0 },
          ],
        },
        {
          id: 'negative :(',
          data: [
            { x: 5, y: 0 },
            { x: 6, y: -0.3 },
            { x: 7, y: -0.5 },
            { x: 8, y: -0.9 },
            { x: 9, y: -0.2 },
            { x: 10, y: -0.4 },
            { x: 11, y: 0 },
            { x: 12, y: null },
            { x: 13, y: null },
            { x: 14, y: null },
            { x: 15, y: null },
            { x: 16, y: null },
            { x: 17, y: 0 },
            { x: 18, y: -0.4 },
            { x: 19, y: -0.2 },
            { x: 20, y: -0.1 },
            { x: 21, y: -0.6 },
          ],
        },
      ]}
      enableGridY={false}
      enableGridX={false}
      colors={['#61CDBB', '#F4755F']}
      xScale={{
        type: 'linear',
      }}
      yScale={{
        type: 'linear',
        stacked: false,
        min: -1,
        max: 1,
      }}
      enableArea={true}
      areaOpacity={0.07}
      enableSlices={false}
      useMesh={true}
      crosshairType="cross"
      curve="cardinal"
      layers={['mesh', 'areas', 'grid', 'lines', 'slices', 'crosshair']}
      tooltip={(x) => {
        return (
          <div className="py-2 px-4 bg-slate-50 rounded-md">
            <div className="flex flex-row items-center  text-xs  font-medium md:text-base  ">
              <div className="text-txt-secondary">PnL: </div>
              {x?.point?.color === '#61CDBB' ? (
                <div className={`ml-2 text-[#61CDBB]`}>
                  {'+$' + x.point.data.y}
                </div>
              ) : (
                <div className={`ml-2 text-[#F4755F]`}>
                  {'-$' + x.point.data.y}
                </div>
              )}
            </div>
          </div>
        )
      }}
    />
  )
}
