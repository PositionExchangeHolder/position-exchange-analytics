import { compoundTransactionTableTitle } from 'helper/tableTransaction/config'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { CompoundTransaction } from 'types/api/vault'
import { convertTimestampToDate } from 'utils/date'
import {
  // convertBigNumberToStringNumber,
  toGwei,
} from 'utils/number'
import { Address } from '../common/Address'
import { BscscanLinkButton, BscscanType } from '../common/BscscanLinkButton'
import RowData from './RowData'

export const columnsCompoundTransactions: TableColumn<CompoundTransaction>[] = [
  {
    name: compoundTransactionTableTitle.transaction,
    cell: (row) => (
      <BscscanLinkButton hash={row?.id} type={BscscanType.TX_HASH} />
    ),
    width: '160px',
    hide: 10,
  },
  {
    name: compoundTransactionTableTitle.compounder,
    cell: (row) => <Address address={row?.sender} />,
    width: '160px',
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
    width: '120px',
  },
  {
    name: compoundTransactionTableTitle.gasLimit,
    cell: (row) => <RowData data={Number(row?.gasLimit).toLocaleString()} />,
    width: '120px',
  },
  {
    name: compoundTransactionTableTitle.createdAt,
    cell: (row) => (
      <RowData data={convertTimestampToDate(row?.createdTimestamp)} />
    ),
    width: '160px',
  },
]
