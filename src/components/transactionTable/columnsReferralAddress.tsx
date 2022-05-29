/* eslint-disable @next/next/no-img-element */
import {
  BscscanLinkButton,
  BscscanType,
} from 'components/common/BscscanLinkButton'
import { addressReferralTableTitle } from 'helper/tableTransaction/config'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { ReferralRecord } from 'types/api/referral'
import { convertTimestampToDate, getLastSeen } from 'utils/date'
import { convertBigNumberToStringNumber } from 'utils/number'
import { Address } from '../common/Address'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'

export const columnsReferralAddress: TableColumn<ReferralRecord>[] = [
  {
    name: addressReferralTableTitle.transaction,
    width: '160px',
    cell: (row) => (
      <BscscanLinkButton hash={row.refTxHash} type={BscscanType.TX_HASH} />
    ),
  },
  {
    name: addressReferralTableTitle.address,
    width: '440px',
    cell: (row) => (
      <Address address={row.user} shortLink={false} />
    ),
  },
  {
    name: addressReferralTableTitle.commissionEarned,
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
    name: addressReferralTableTitle.lastUpdated,
    width: '230px',
    cell: (row) => (
      <RowData>
        <ToolTip toolTipText={convertTimestampToDate(row.createdTimestamp)}>
          {getLastSeen(row.updatedTimestamp)}
        </ToolTip>
      </RowData>
    ),
    sortable: true
  },
]
