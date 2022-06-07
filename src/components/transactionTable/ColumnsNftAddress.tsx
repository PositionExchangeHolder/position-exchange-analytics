import { addressNftTableTitle } from 'helper/tableTransaction/config'
import Link from 'next/link'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { convertTimestampToDate, getLastSeen } from 'utils/date'
import { convertBigNumberToStringNumber } from 'utils/number'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'

export const ColumnsNftAddress: TableColumn<any>[] = [
  {
    name: addressNftTableTitle.id,
    width: '120px',
    cell: (row) => (
      <RowData>
        <Link href={`/nft/${row.id}`}>
          <a>{row.id}</a>
        </Link>
      </RowData>
    ),
    sortable: true,
    sortField: 'id',
  },
  {
    name: addressNftTableTitle.grade,
    width: '80px',
    cell: (row) => <RowData data={row.grade} />,
    sortable: true,
    sortField: 'grade',
  },
  {
    name: addressNftTableTitle.amount,
    width: '160px',
    cell: (row) => (
      <RowData data={convertBigNumberToStringNumber(row.amount) + ' POSI'} />
    ),
    sortable: true,
    sortField: 'amount',
  },
  {
    name: addressNftTableTitle.status,
    width: '100px',
    cell: (row) => (
      <RowData data={row.status} />
    )
  },
  {
    name: addressNftTableTitle.createdAt,
    width: '180px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row.createdTime)}>
          {getLastSeen(row.createdTime)}
        </ToolTip>
      </RowData>
    ),
    sortable: true,
    sortField: 'createdTime',
  },
  {
    name: addressNftTableTitle.lastUpdated,
    width: '180px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row.updatedTimestamp)}>
          {getLastSeen(row.updatedTimestamp)}
        </ToolTip>
      </RowData>
    ),
    sortable: true,
    sortField: 'updatedTimestamp',
  },
]
