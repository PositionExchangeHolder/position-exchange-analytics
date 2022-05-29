import { ArrowDownIcon } from '@heroicons/react/outline'
import { ItemTranSaction } from 'api/nft/nft.api.type'
import React, { ReactNode } from 'react'
import DataTable, { createTheme, TableColumn } from 'react-data-table-component'
import { customStylesTransactionTable } from 'styles/customStylesTransactionTable'
import Loading from '../loading/Loading'
import { columnsTransaction } from './columnsTransaction'

type Props = {
  transactions: any
  titleTable: string
  columns?: TableColumn<ItemTranSaction | any>[]
  isLoading: boolean
  customFilterHeader?: ReactNode
  onSort?: (selectedColumn: TableColumn<T>, sortDirection: SortOrder) => void
}

export default function TransactionTable({
  transactions,
  titleTable,
  columns = columnsTransaction,
  isLoading,
  customFilterHeader,
  onSort,
}: Props) {
  return (
    <div>
      <div className="pt-3 pb-2 pl-6 w-full bg-light-primary dark:bg-secondary border dark:border-0 border-b dark:border-b-gray-400">
        <p className="pb-3 text-sm font-medium text-txt-light-txt-primary dark:text-txt-primary lg:text-base">
          {titleTable}
        </p>
        {typeof customFilterHeader === 'function' && customFilterHeader()}
      </div>
      <div className="relative border dark:border-0">
        <DataTable
          sortIcon={<ArrowDownIcon />}
          responsive={true}
          title="Transaction"
          columns={columns}
          data={transactions}
          customStyles={customStylesTransactionTable}
          noHeader={true}
          theme="solarized"
          noDataComponent={
            isLoading ? null : (
              <div className="flex justify-center items-center py-8 w-full">
                There are no matching entries
              </div>
            )
          }
          noTableHead={false}
          onSort={onSort}
        />

        <div className="w-full border-b border-waterloo" />
        {isLoading && (
          <div className="flex absolute top-0 justify-center items-center w-full h-full bg-slate-200 opacity-80">
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
