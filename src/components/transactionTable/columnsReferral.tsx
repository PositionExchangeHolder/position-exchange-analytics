/* eslint-disable @next/next/no-img-element */
import { TopReferralRecord } from 'api/referral/referral.api.type'
import {
  BscscanLinkButton,
  BscscanType,
} from 'components/common/BscscanLinkButton'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { getLastSeen } from 'utils/date'
import { convertBigNumberToStringNumber } from 'utils/number'
import RowData from './RowData'
const caseTotalReferralsSort = (
  rowA: TopReferralRecord,
  rowB: TopReferralRecord
) => {
  const a = +rowA.totalReferrals
  const b = +rowB.totalReferrals

  if (a > b) {
    return 1
  }

  if (b > a) {
    return -1
  }

  return 0
}

const caseTotalCommissionsSort = (
  rowA: TopReferralRecord,
  rowB: TopReferralRecord
) => {
  const a = +rowA.totalReferralCommissions
  const b = +rowB.totalReferralCommissions

  if (a > b) {
    return 1
  }

  if (b > a) {
    return -1
  }

  return 0
}
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
        src={urlIcon}
        alt="Man using a computer"
        loading="lazy"
      />
    </div>
  ) : (
    <div className="w-8 h-8">
      <div className="justify-center  text-xs md:text-sm dark:text-txt-primary text-gray-400 bg-light-primary dark:bg-primary flex items-center w-full h-full">
        {index + 1}
      </div>
    </div>
  )
}

export const columnsReferral: TableColumn<TopReferralRecord>[] = [
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
      <BscscanLinkButton hash={row?.id} type={BscscanType.ADDRESS} />
    ),
  },
  {
    name: 'Total Referrals',
    cell: (row) => <RowData data={row.totalReferrals} />,
    width: '170px',
    sortable: true,
    sortFunction: caseTotalReferralsSort,
  },
  {
    name: 'Total Commissions',
    cell: (row) => <RowData data={convertBigNumberToStringNumber(row.totalReferralCommissions, 0) + ' POSI'} />,
    width: '250px',
    sortable: true,
    sortFunction: caseTotalCommissionsSort,
  },

  {
    name: 'Last Updated',
    width: '230px',
    cell: (row) => <RowData data={getLastSeen(+row?.createdTimestamp)} />,
  },
]
