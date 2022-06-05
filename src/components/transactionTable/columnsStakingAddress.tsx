import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { StakingPool } from 'types/api/address'
import { convertBigNumberToStringNumber } from 'utils/number'
import Button from '../common/Button'
import RowData from './RowData'

export const columnsStakingAddress: TableColumn<StakingPool>[] = [
  {
    name: 'Pid',
    cell: (row) => <RowData data={(row.pid).toString()} />,
    width: '60px',
  },
  {
    name: 'Pool',
    cell: (row) => <RowData data={row.name} />,
    width: '140px',
  },
  {
    name: 'Staked',
    cell: (row) => (
      <RowData
        data={
          convertBigNumberToStringNumber(row.stakingBalance)
        }
      />
    ),
    width: '140px',
  },
  {
    name: 'Earned',
    cell: (row) => (
      <RowData
        data={
          convertBigNumberToStringNumber(row.pendingReward) + ' POSI'
        }
      />
    ),
    width: '140px',
  },
  // {
  //   name: 'Actions',
  //   cell: (row) => (
  //     <>
  //       <Button text='Unstake' />
  //       <Button text='Harvest' />
  //     </>
  //   ),
  //   width: '220px',
  // }
]
