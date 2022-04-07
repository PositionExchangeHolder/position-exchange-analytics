import { ItemTranSaction } from 'api/nft/nft.api.type'
import {
  BscscanLinkButton,
  BscscanType,
} from 'components/common/BscscanLinkButton'
import { format, fromUnixTime } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import RowData from './RowData'

export const columnsTransaction: TableColumn<ItemTranSaction>[] = [
  {
    name: 'Transaction',
    cell: (row) => (
      <BscscanLinkButton hash={row?.id} type={BscscanType.TX_HASH} />
    ),
    width: '220px',
    hide: 10,
  },
  {
    name: 'Action',
    selector: (row) => row?.action,
    width: '170px',
    cell: (row) => <RowData data={row.action} />,
  },
  {
    name: 'From',
    cell: (row) => (
      <BscscanLinkButton hash={row?.from?.id} type={BscscanType.ADDRESS} />
    ),
    width: '220px',
  },
  {
    name: 'To',
    cell: (row) => (
      <BscscanLinkButton hash={row?.to?.id} type={BscscanType.ADDRESS} />
    ),
    width: '220px',
  },
  {
    name: 'NFT ID',
    cell: (row) => (
      <RowData>
        <Link href={`/nft/${row?.nft?.id}`}>
          <a>{row?.nft?.id}</a>
        </Link>
      </RowData>
    ),

    width: '120px',
  },
  {
    name: 'Grade',
    cell: (row) => (
      <RowData>
        <Link href={`/nft/nft-grade/${row?.grade}`}>
          <a>{row?.grade}</a>
        </Link>
      </RowData>
    ),
    width: '120px',
    sortable: false,
  },
  {
    name: 'Time',
    width: '200px',
    sortable: false,
    cell: (row) => (
      <RowData
        data={format(
          fromUnixTime(+row?.createdTimestamp),
          'dd-MM-yyyy hh:mm a'
        )}
      />
    ),
  },
]
