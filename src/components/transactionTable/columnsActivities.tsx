import { ItemTranSaction } from 'api/nft/nft.api.type'
import {
  BscscanLinkButton,
  BscscanType,
} from 'components/common/BscscanLinkButton'
import { format, fromUnixTime } from 'date-fns'
import React from 'react'
import { TableColumn } from 'react-data-table-component'

export const columnsActivities: TableColumn<ItemTranSaction>[] = [
  {
    name: 'Transaction',
    selector: (row) => row?.id,
    cell: (row) => (
      <BscscanLinkButton hash={row?.id} type={BscscanType.TX_HASH} />
    ),
    width: '270px',
  },
  {
    name: 'Action',
    selector: (row) => row?.action,
    width: '170px',
  },
  {
    name: 'From',
    selector: (row) => row?.from?.id,
    cell: (row) => (
      <BscscanLinkButton hash={row?.from?.id} type={BscscanType.ADDRESS} />
    ),
    width: '270px',
  },
  {
    name: 'To',
    selector: (row) => row?.to?.id,
    cell: (row) => (
      <BscscanLinkButton hash={row?.to?.id} type={BscscanType.ADDRESS} />
    ),
    width: '270px',
  },

  {
    name: 'Time',
    selector: (row) =>
      format(fromUnixTime(+row?.createdTimestamp), 'dd-MM-yyyy hh:mm a'),
    width: '170px',
  },
]
