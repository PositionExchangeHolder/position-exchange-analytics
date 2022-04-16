import { ArrowDownIcon } from '@heroicons/react/outline'
import { ItemTranSaction } from 'api/nft/nft.api.type'
import { getFilterActionTransactionTable } from 'helper/tableTransaction/getWidthHeader'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { ReferralsRankerOrderBySelector } from 'store/referral/referralSlice'

type Props = {
  columns?: TableColumn<ItemTranSaction | any>[]
}
export default function CustomHeaderTableTransaction({ columns }: Props) {
  const dispatch = useAppDispatch()
  const orderBy = useAppSelector(ReferralsRankerOrderBySelector)

  return (
    <>
      {columns?.map((column, index) => {
        const onClickFilter = async () => {
          await dispatch(
            getFilterActionTransactionTable(column?.name as string)
          )
        }
        return (
          <div
            className="pl-[20px]"
            style={{ width: column?.width }}
            key={index}
          >
            <div className="flex items-center">
              <p
                onClick={onClickFilter}
                className={`text-sm text-[#6987FF] ${
                  column?.sortable && 'cursor-pointer'
                } `}
              >
                {column.name}
              </p>
              {column?.sortable && (
                <div
                  onClick={onClickFilter}
                  className={`w-4 h-4 text-[#6987FF] ml-2 ${
                    column?.sortable && 'cursor-pointer'
                  } ${
                    column.name === 'Total Referrals'
                      ? orderBy === 'totalReferrals'
                        ? 'opacity-100'
                        : 'opacity-50'
                      : orderBy === 'totalReferralCommissions'
                      ? 'opacity-100'
                      : 'opacity-50'
                  }`}
                >
                  <ArrowDownIcon />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
