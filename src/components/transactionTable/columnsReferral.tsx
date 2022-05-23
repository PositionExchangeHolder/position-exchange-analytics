import { TopReferralRecord } from 'api/referral/referral.api.type'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { convertTimestampToDate, getLastSeen } from 'utils/date'
import { convertBigNumberToStringNumber } from 'utils/number'
import { Address } from '../common/Address'
import ToolTip from '../common/ToolTip'
import RowData from './RowData'

export const renderIconRanking = (index: number) => {
  return (
    <div className="w-8 h-8">
      <div className="flex justify-center items-center w-full h-full text-xs text-gray-400 dark:text-txt-primary bg-light-primary dark:bg-primary md:text-sm">
        {index + 1}
      </div>
    </div>
  )
}

export const columnsReferral: TableColumn<TopReferralRecord>[] = [
  {
    name: 'Rank',
    cell: (row, index) => {
      return (
        <>
          {renderIconRanking(index)}
        </>
      )
    },
    width: '100px',
  },
  {
    name: 'Address',
    width: '440px',
    cell: (row) => (
      <Address address={row?.id} shortLink={false} />
    ),
  },
  {
    name: 'Total Referrals',
    cell: (row) => <RowData data={row.totalReferrals} />,
    width: '170px',
    sortable: true,
  },
  {
    name: 'Total Commissions',
    cell: (row) => (
      <RowData
        data={
          convertBigNumberToStringNumber(row.totalReferralCommissions, 0) +
          ' POSI'
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
        <ToolTip toolTipText={convertTimestampToDate(row?.createdTimestamp)}>
          {getLastSeen(+row?.createdTimestamp)}
        </ToolTip>
      </RowData>
    ),
  },
]
