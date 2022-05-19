/* eslint-disable @next/next/no-img-element */
import { RecordsRefAddress } from 'api/address/address.api.type'
import {
  BscscanLinkButton,
  BscscanType,
} from 'components/common/BscscanLinkButton'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { convertTimestampToDate, getLastSeen } from 'utils/date'
import { convertBigNumberToStringNumber } from 'utils/number'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'

export const columnsReferralAddress: TableColumn<RecordsRefAddress>[] = [
  {
    name: 'Transaction',
    width: '160px',
    cell: (row) => (
      <BscscanLinkButton hash={row.refTxHash} type={BscscanType.TX_HASH} />
    ),
  },
  {
    name: 'Address',
    width: '440px',
    cell: (row) => (
      <BscscanLinkButton
        hash={row.user}
        type={BscscanType.ADDRESS}
        shortLink={false}
      />
    ),
  },
  {
    name: 'Commissions Earned',
    cell: (row) => (
      <RowData
        data={
          convertBigNumberToStringNumber(
            row.totalCommissionsEarnedForReferrer
          ) + ' POSI'
        }
      />
    ),
    width: '250px',
    sortable: true,
  },

  {
    name: 'Last Updated',
    width: '230px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row.createdTimestamp)}>
          {getLastSeen(row.updatedTimestamp)}
        </ToolTip>
      </RowData>
    ),
  },
]
