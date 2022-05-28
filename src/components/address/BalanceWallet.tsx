import React from 'react'
import { convertBigNumberToStringNumber } from 'utils/number'
import { TotalPosiBalance } from 'api/address/address.api.type'
import { DoughnutChart } from '../chart/DoughnutChart'

type Props = {
  totalPosiBalance: TotalPosiBalance | undefined
  dataDoughnutWalletChart: any
}

export default function BalanceWallet({ totalPosiBalance, dataDoughnutWalletChart }: Props) {
  return (
    <>
      <div className="grid-cols-3 gap-x-12 mt-12 w-full md:grid">
        <div className="group flex flex-col col-span-1 gap-y-4 justify-center items-center py-12 h-32 bg-secondary rounded-md">
          <p>
            TOTAL POSI BALANCES
          </p>
          <p className="text-xs font-medium text-txt-white md:font-bold lg:text-xl">
            {convertBigNumberToStringNumber(totalPosiBalance?.total || 0)} POSI
          </p>
        </div>
      </div>

      {
        dataDoughnutWalletChart.total > 0 && (
          <div className="grid-cols-3 gap-x-12 w-full md:grid">
            <div className="group flex flex-col col-span-1 gap-y-4 justify-center items-center h-80 bg-secondary">
              <div className="w-96 h-96">
                <DoughnutChart
                  data={dataDoughnutWalletChart.data}
                  total={dataDoughnutWalletChart.total}
                />
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
