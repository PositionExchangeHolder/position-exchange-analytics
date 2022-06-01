import React from 'react'
import { commasNumberFormat } from 'utils/number'

type Props = {
  realizedPnl: number
}

export const AddressPnL = ({ realizedPnl }: Props) => {
  return (
    <div className="flex flex-row items-center px-6 mt-2 text-xs font-medium md:text-base">
      <div>PnL:</div>
      <div className={`ml-2 ${realizedPnl > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {
          Number(realizedPnl) > 0
            ? `+$${commasNumberFormat(realizedPnl || 0)}`
            : `-$${commasNumberFormat(Math.abs(realizedPnl || 0))}`
        }
      </div>
    </div>
  )
}
