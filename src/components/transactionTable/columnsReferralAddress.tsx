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

const renderIconRanking = (index: number) => {
  let urlIcon = ''
  if (index === 0) {
    urlIcon = '1st.png'
  } else if (index === 1) {
    urlIcon = '2nd.png'
  } else if (index === 2) {
    urlIcon = '3rd.png'
  }
  return urlIcon ? (
    <div className="w-8 h-8">
      <img
        className=" object-contain w-full h-full"
        src={`/${urlIcon}`}
        alt="Man using a computer"
        loading="lazy"
      />
    </div>
  ) : (
    <div className="w-8 h-8">
      <div className="flex  justify-center items-center w-full h-full text-xs text-gray-400 dark:text-txt-primary bg-light-primary dark:bg-primary md:text-sm">
        {index + 1}
      </div>
    </div>
  )
}

export const columnsReferralAddress: TableColumn<RecordsRefAddress>[] = [
  {
    name: 'Rank',
    cell: (row, index) => {
      return <>{renderIconRanking(index)}</>
    },
    width: '100px',
  },
  {
    name: 'Address',
    width: '440px',
    cell: (row) => (
      <BscscanLinkButton
        hash={row?.refTxHash}
        type={BscscanType.ADDRESS}
        shortLink={false}
      />
    ),
  },
  {
    name: 'Total Referrals',
    cell: (row) => <RowData data={row.referrer.totalReferrals} />,
    width: '170px',
    sortable: true,
  },
  {
    name: 'Total Commissions',
    cell: (row) => (
      <RowData
        data={
          convertBigNumberToStringNumber(
            row.referrer?.totalReferralCommissions,
            0
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
        <ToolTip toolTipText={convertTimestampToDate(+row?.createdTimestamp)}>
          {getLastSeen(+row?.updatedTimestamp)}
        </ToolTip>
      </RowData>
    ),
  },
]