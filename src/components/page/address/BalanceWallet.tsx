import { DoughnutChart } from '@/components/chart/DoughnutChart'
import React from 'react'
import { TotalPosiBalance } from 'types/api/address'
import { convertBigNumberToStringNumber } from 'utils/number'

type Props = {
  totalPosiBalance: TotalPosiBalance | undefined
  dataDoughnutWalletChart: any
}

export default function BalanceWallet({
  totalPosiBalance,
  dataDoughnutWalletChart,
}: Props) {
  return (
    <div className="flex flex-col justify-center w-full lg:bg-secondary">
      <div className=" justify-center items-center py-8 w-full text-center">
        <p>TOTAL POSI BALANCES</p>
        <p className="pt-3 text-xs font-medium text-txt-white md:font-bold lg:text-xl">
          {convertBigNumberToStringNumber(totalPosiBalance?.total || 0)} POSI
        </p>
      </div>
      <div>
        {dataDoughnutWalletChart.total > 0 && (
          <div className="gap-x-12 w-full ">
            <div className="group flex flex-col col-span-1 gap-y-4 justify-center items-center h-80 ">
              <div className="w-80 h-96 md:w-96">
                <DoughnutChart
                  data={dataDoughnutWalletChart.data}
                  total={dataDoughnutWalletChart.total}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
