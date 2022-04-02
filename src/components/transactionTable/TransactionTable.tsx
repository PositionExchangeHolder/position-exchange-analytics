import { ArrowDownIcon } from '@heroicons/react/outline'
import { ItemTranSaction } from 'api/nft/nft.api.type'
import React from 'react'
import DataTable, {
  createTheme,
  TableColumn,
  TableStyles,
} from 'react-data-table-component'
import Loading from '../loading/Loading'
import { columnsTransaction } from './columnsTransaction'
type ItemFilter = {
  name: string
  value: string
}

type Props = {
  transactions: any[]
  titleTable: string
  currentFilter: string
  setCurrentFilter: (filter: string) => void
  listFilterTransaction?: ItemFilter[]
  columns?: TableColumn<ItemTranSaction | any>[]
  isLoading: boolean
}

export default function TransactionTable({
  transactions,
  titleTable,
  currentFilter,
  setCurrentFilter,
  listFilterTransaction,
  columns = columnsTransaction,
  isLoading,
}: Props) {
  return (
    <div>
      <div className="w-full pt-3 pb-2 pl-6 bg-secondary1 rounded-t-md ">
        <p className="font-medium text-sm lg:text-base text-txt-primary  ">
          {titleTable}
        </p>
        <div className="md:flex md:flex-row gap-x-4 mt-4  flex-wrap grid-cols-3 grid">
          {listFilterTransaction &&
            listFilterTransaction?.map((itemFilter) => {
              return (
                <div className="flex items-center" key={itemFilter.name}>
                  <input
                    onChange={() => setCurrentFilter(itemFilter.value)}
                    checked={itemFilter.value === currentFilter ? true : false}
                    name="currentFilter"
                    type="radio"
                    className="focus:ring-slate-50 h-6 text-red-700 border-gray-300 "
                  />
                  <label
                    htmlFor="push-everything"
                    className="ml-3 block text-tiny-xs  lg:text-SM font-medium text-txt-primary "
                  >
                    {itemFilter.name}
                  </label>
                </div>
              )
            })}
        </div>
      </div>
      <DataTable
        sortIcon={<ArrowDownIcon />}
        responsive={true}
        title="Transaction"
        columns={columns}
        data={transactions}
        customStyles={customStyles}
        theme="solarized"
        noHeader={true}
        highlightOnHover={true}
        pointerOnHover={true}
        //sort
        onSort={handleSort}
        // loading
        progressPending={isLoading}
        progressComponent={<Loading />}
      />
    </div>
  )
}

const handleSort = (column: any, sortDirection: any) =>
  console.log(column.selector(), sortDirection)

const customStyles: TableStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
    highlightOnHoverStyle: {
      background: 'rgb(31 41 55)',
    },
  },
  headCells: {
    style: {
      paddingLeft: '30px', // override the cell padding for head cells
      paddingRight: '8px',
      fontSize: 14,
    },
  },
  cells: {
    style: {
      paddingLeft: '30px', // override the cell padding for data cells
      paddingRight: '8px',
      fontSize: 12,
      color: 'rgb(226 ,232 ,240)',
      fontWeight: '600',
    },
  },
  header: {
    style: {
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
      backgroundColor: '#302E4C',
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
}

createTheme(
  'solarized',
  {
    text: {
      primary: 'white',
    },
    background: {
      default: 'rgb(20, 20 ,35)',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: 'rgba(120, 122, 145, 0.5)',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  },
  'dark'
)
