import React, { ReactNode } from 'react'
import { ArrowDownIcon } from '@heroicons/react/outline'
import DataTable, {
  createTheme,
  SortOrder,
  TableColumn,
} from 'react-data-table-component'
import { customStylesTransactionTable } from 'styles/customStylesTransactionTable'
import Loading from '../loading/Loading'
import { columnsTransaction } from './columnsTransaction'
import { NftTransaction } from 'types/api/nft'
import Button from '../common/Button'

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
  columns?: TableColumn<NftTransaction | any>[]
  isLoading: boolean
  customFilterHeader?: ReactNode
  onSort?: (selectedColumn: TableColumn<any>, sortDirection: SortOrder) => void
  noDataReferralLink?: string
}

export default function TransactionTable({
  transactions,
  titleTable,
  columns = columnsTransaction,
  isLoading,
  customFilterHeader,
  onSort,
  noDataReferralLink
}: Props) {
  return (
    <div>
      <div className="pt-3 pb-2 pl-6 w-full bg-light-primary dark:bg-secondary border dark:border-0 border-b dark:border-b-gray-400">
        <p className="pb-3 text-sm font-medium text-txt-light-txt-primary dark:text-txt-primary lg:text-base">
          {titleTable.toUpperCase()}
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
                <p className="mr-3 mt-3.5">
                  No Data
                </p>
                {
                  noDataReferralLink && (
                    <a
                      href={noDataReferralLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button text='Let&apos;s take some' />
                    </a>
                  )
                }
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
