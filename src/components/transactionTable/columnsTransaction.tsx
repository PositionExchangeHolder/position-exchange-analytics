import React from 'react'
import Link from 'next/link'
import {
  BscscanLinkButton,
  BscscanType,
} from 'components/common/BscscanLinkButton'
import { TableColumn } from 'react-data-table-component'
import { getLastSeen, convertTimestampToDate } from 'utils/date'
import { Address } from '../common/Address'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'
import { nftTransactionTableTitle } from 'helper/tableTransaction/config'
import { NftTransaction } from 'types/api/nft'

export const columnsTransaction: TableColumn<NftTransaction>[] = [
  {
    name: nftTransactionTableTitle.transaction,
    cell: (row) => (
      <BscscanLinkButton hash={row?.txHash} type={BscscanType.TX_HASH} />
    ),
    width: '220px',
    hide: 10,
  },
  {
    name: nftTransactionTableTitle.action,
    selector: (row) => row?.action,
    width: '170px',
    cell: (row) => <RowData data={row.action} />,
  },
  {
    name: nftTransactionTableTitle.from,
    cell: (row) => (
      <Address address={row?.from.id} />
    ),
    width: '220px',
  },
  {
    name: nftTransactionTableTitle.to,
    cell: (row) => (
      <Address address={row?.to.id} />
    ),
    width: '220px',
  },
  {
    name: nftTransactionTableTitle.nftId,
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
    name: nftTransactionTableTitle.grade,
    cell: (row) => (
      <RowData>
        <Link href={`/nft/grade/${row?.grade}`}>
          <a>{row?.grade}</a>
        </Link>
      </RowData>
    ),
    width: '120px',
    sortable: false,
  },
  {
    name: nftTransactionTableTitle.time,
    width: '200px',
    sortable: false,
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row?.createdTimestamp)}>
          {getLastSeen(+row?.createdTimestamp)} 
        </ToolTip>
      </RowData>
    ),
  },
]
