import { ArrowDownIcon } from '@heroicons/react/outline'
import { ItemTranSaction } from 'api/nft/nft.api.type'
import { isArray } from 'lodash'
import React from 'react'
import DataTable, { createTheme, TableColumn } from 'react-data-table-component'
import { customStylesTransactionTable } from 'styles/customStylesTransactionTable'
import Loading from '../loading/Loading'
import { columnsTransaction } from './columnsTransaction'
import CustomHeaderTableTransaction from './CustomHeaderTableTransaction'
type ItemFilter = {
  name: string
  value: string
}

type Props = {
  transactions: any
  titleTable: string
  currentFilter?: string
  setCurrentFilter?: (filter: string) => void
  listFilterTransaction?: ItemFilter[]
  columns?: TableColumn<ItemTranSaction | any>[]
  isLoading: boolean
  showCustomHeader?: boolean
}

export default function TransactionTable({
  transactions,
  titleTable,
  currentFilter,
  setCurrentFilter,
  listFilterTransaction,
  columns = columnsTransaction,
  isLoading,
  showCustomHeader,
}: Props) {
  // const headerWidth = getWidthHeader<TopReferralRecord>(columns)
  return (
    <div>
      <div className="pt-3 pb-2 pl-6 w-full  bg-light-primary dark:bg-secondary border dark:border-0 border-b dark:border-b-gray-400 ">
        <p className="text-sm font-medium text-txt-light-txt-primary dark:text-txt-primary lg:text-base  ">
          {titleTable}
        </p>
        <div className="grid flex-wrap grid-cols-3 gap-x-4  mt-4 md:flex md:flex-row">
          {listFilterTransaction &&
            listFilterTransaction?.map((itemFilter) => {
              const onSetCurrentFilter = () => {
                typeof setCurrentFilter === 'function' &&
                  setCurrentFilter(itemFilter.value)
              }
              return (
                <div className="flex items-center" key={itemFilter.name}>
                  <input
                    onChange={onSetCurrentFilter}
                    checked={itemFilter.value === currentFilter ? true : false}
                    name="currentFilter"
                    type="radio"
                    className="h-6 text-red-700 border-gray-300 focus:ring-slate-50 "
                  />
                  <label
                    htmlFor="push-everything"
                    className="block ml-3 text-tiny-xs  font-medium text-txt-secondary dark:text-txt-primary lg:text-sm "
                  >
                    {itemFilter.name}
                  </label>
                </div>
              )
            })}
        </div>
      </div>
      <div className="relative  border dark:border-0  ">
        {showCustomHeader && (
          <div
            className={`flex flex-row h-[3.25rem]  items-center border-b border-[#787a9180]`}
          >
            {isArray(columns) && showCustomHeader && (
              <CustomHeaderTableTransaction columns={columns} />
            )}
          </div>
        )}

        <DataTable
          sortIcon={<ArrowDownIcon />}
          responsive={true}
          title="Transaction"
          columns={columns}
          data={transactions}
          customStyles={customStylesTransactionTable}
          noHeader={true}
          theme="solarized"
          noDataComponent={null}
          noTableHead={showCustomHeader}
        />

        <div className="w-full border-b border-waterloo" />
        {isLoading && (
          <div className=" flex absolute top-0 justify-center items-center w-full h-full bg-slate-200 opacity-80">
            <Loading />
          </div>
        )}
      </div>
    </div>
  )
}

createTheme(
  'solarized',
  {
    text: {
      // primary: 'rgb(105 ,235 ,259 )',
      primary: 'rgb(105 ,135 ,259 )',
    },
    background: {
      default: 'transparent',
    },
    divider: {
      default: 'rgba(120, 122, 145, 0.5)',
    },
  },
  'dark'
)
