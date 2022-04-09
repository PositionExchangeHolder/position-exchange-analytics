import { ItemTranSaction } from 'api/nft/nft.api.type'
import {
  BscscanLinkButton,
  BscscanType,
} from 'components/common/BscscanLinkButton'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { getLastSeen } from 'utils/date'
import RowData from './RowData'

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
      <BscscanLinkButton hash={row?.from?.id} type={BscscanType.ADDRESS} />
    ),
    width: '270px',
  },
  {
    name: 'To',
    cell: (row) => (
      <BscscanLinkButton hash={row?.to?.id} type={BscscanType.ADDRESS} />
    ),
    width: '270px',
  },

  {
    name: 'Time',

    width: '170px',
    cell: (row) => <RowData data={getLastSeen(+row?.createdTimestamp)} />,
  },
]
