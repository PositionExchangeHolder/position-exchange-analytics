import Link from 'next/link'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { convertTimestampToDate, getLastSeen } from 'utils/date'
import { canDecompose, getDecomposeDate } from 'utils/nft'
import { convertBigNumberToStringNumber } from 'utils/number'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'

export const ColumnsNftAddress: TableColumn<any>[] = [
  {
    name: 'ID',
    width: '140px',
    cell: (row) => (
      <RowData>
        <Link href={`/nft/${row.id}`}>
          <a>{row.id}</a>
        </Link>
      </RowData>
    ),
    sortable: true
  },
  {
    name: 'Grade',
    width: '140px',
    cell: (row) => <RowData data={row.grade} />,
    sortable: true
  },
  {
    name: 'Amount',
    width: '140px',
    cell: (row) => (
      <RowData
        data={convertBigNumberToStringNumber(row.amount) + ' POSI'}
      />
    ),
    sortable: true
  },
  {
    name: 'Decompose',
    width: '140px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={getDecomposeDate(row.createdTime, row.lockedDays)}>
          {canDecompose(row.createdTime, row.lockedDays).toString()}
        </ToolTip>
      </RowData>
    )
  },
  // {
  //   name: 'Status',
  //   width: '140px',
  //   cell: () => (
  //     <RowData
  //       data={'Holding'}
  //     />
  //   )
  // },
  {
    name: 'Created At',
    width: '180px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row.createdTime)}>
          {getLastSeen(row.createdTime)}
        </ToolTip>
      </RowData>
    ),
    sortable: true
  },
  {
    name: 'Last Updated',
    width: '180px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row.updatedTimestamp)}>
          {getLastSeen(row.updatedTimestamp)}
        </ToolTip>
      </RowData>
    ),
    sortable: true
  },
]
