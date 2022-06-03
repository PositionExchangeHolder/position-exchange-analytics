import { compoundTransactionTableTitle } from 'helper/tableTransaction/config'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { CompoundTransaction } from 'types/api/vault'
import { convertTimestampToDate, getLastSeen } from 'utils/date'
import {
  // convertBigNumberToStringNumber,
  toGwei,
} from 'utils/number'
import { Address } from '../common/Address'
import { BscscanLinkButton, BscscanType } from '../common/BscscanLinkButton'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'

export const columnsCompoundTransactions: TableColumn<CompoundTransaction>[] = [
  {
    name: compoundTransactionTableTitle.transaction,
    cell: (row) => (
      <BscscanLinkButton hash={row?.id} type={BscscanType.TX_HASH} />
    ),
    width: '140px',
    hide: 10,
  },
  {
    name: compoundTransactionTableTitle.type,
    cell: (row) => <RowData data={row?.type} />,
    width: '100px',
  },
  {
    name: compoundTransactionTableTitle.compounder,
    cell: (row) => <Address address={row?.sender} />,
    width: '140px',
  },
  // {
  //   name: compoundTransactionTableTitle.reward,
  //   cell: (row) => (
  //     <RowData data={`${convertBigNumberToStringNumber(row?.reward, 0)} POSI`} />
  //   ),
  //   width: '120px'
  // },
  {
    name: compoundTransactionTableTitle.gasPrice,
    cell: (row) => <RowData data={`${toGwei(row?.gasPrice)} Gwei`} />,
    width: '110px',
  },
  {
    name: compoundTransactionTableTitle.gasLimit,
    cell: (row) => <RowData data={Number(row?.gasLimit).toLocaleString()} />,
    width: '100px',
  },
  {
    name: compoundTransactionTableTitle.createdAt,
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row?.createdTimestamp)}>
          {getLastSeen(row?.createdTimestamp)}
        </ToolTip>
      </RowData>
    ),
    width: '160px',
  },
]
