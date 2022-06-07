import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { SwapTransaction } from 'types/api/address'
import { convertTimestampToDate, getLastSeen } from 'utils/date'
import { convertBigNumberToStringNumber, convertBigNumberToNumber } from 'utils/number'
import { formatMoney } from 'utils/price'
import { BscscanLinkButton, BscscanType } from '../common/BscscanLinkButton'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'

export const columnsActivitiesAddress: TableColumn<SwapTransaction>[] = [
  {
    name: 'Transaction',
    width: '140px',
    cell: (row) => (
      <BscscanLinkButton
        hash={row.id.substring(5)}
        type={BscscanType.TX_HASH}
      />
    )
  },
  {
    name: 'Action',
    width: '80px',
    cell: (row) => (
      <RowData>
        <span className={row.action === 'Buy' ? 'text-emerald-500': 'text-red-500'}>
          {row.action}
        </span>
      </RowData>
    )
  },
  {
    name: 'Posi Amount',
    width: '140px',
    cell: (row) => (
      <RowData data={
        `${convertBigNumberToStringNumber(row.amountPosi)} POSI`
      } />
    ),
    sortable: true,
    sortField: 'amountPosi'
  },
  {
    name: 'Token Amount',
    width: '140px',
    cell: (row) => (
      <RowData data={
        `${convertBigNumberToStringNumber(row.amountQuote)} ${row.market}`
      } />
    )
  },
  {
    name: 'Profit',
    width: '100px',
    cell: (row) => (
      <RowData>
        <span className={Number(row.amountBusd) > 0 ? 'text-emerald-500': 'text-red-500'}>
          {formatMoney(convertBigNumberToNumber(row.amountBusd))}
        </span>
      </RowData>
    ),
    sortable: true,
    sortField: 'amountBusd'
  },
  {
    name: 'Time',
    width: '160px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row.createdTimestamp)}>
          {getLastSeen(row.createdTimestamp)}
        </ToolTip>
      </RowData>
    ),
    sortable: true,
    sortField: 'createdTimestamp'
  }
]
