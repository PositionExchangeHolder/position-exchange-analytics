import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { convertTimestampToDate, getLastSeen } from 'utils/date'
import { ItemTranSaction } from 'api/nft/nft.api.type'
import {
  BscscanLinkButton,
  BscscanType,
} from 'components/common/BscscanLinkButton'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'
import { Address } from '../common/Address'

export const columnsActivities: TableColumn<ItemTranSaction>[] = [
  {
    name: 'Transaction',
    cell: (row) => (
      <BscscanLinkButton hash={row?.txHash} type={BscscanType.TX_HASH} />
    ),
    width: '270px',
  },
  {
    name: 'Action',
    width: '170px',
    cell: (row) => <RowData data={row.action} />,
  },
  {
    name: 'From',
    cell: (row) => (
      <Address address={row?.from.id} />
    ),
    width: '270px',
  },
  {
    name: 'To',
    cell: (row) => (
      <Address address={row?.to.id} />
    ),
    width: '270px',
  },

  {
    name: 'Time',
    width: '170px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row?.createdTimestamp)}>
          {getLastSeen(+row?.createdTimestamp)} 
        </ToolTip>
      </RowData>
    ),
  },
]
