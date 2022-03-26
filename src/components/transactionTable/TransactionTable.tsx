import { ItemTranSaction } from 'api/nft/nft.api.type'
import { format, fromUnixTime } from 'date-fns'
import React from 'react'
import DataTable, {
  createTheme,
  TableColumn,
  TableStyles,
} from 'react-data-table-component'
import { nFormatter } from 'utils/number'

type ItemFilter = {
  name: string
  value: string
}

type Props = {
  transactions: any[]
  titleTable: string
  currentFilter: string
  setCurrentFilter: (filter: string) => void
  listFilterTransaction: ItemFilter[]
}
export default function TransactionTable({
  transactions,
  titleTable,
  currentFilter,
  setCurrentFilter,
  listFilterTransaction,
}: Props) {
  return (
    <div>
      <div className="w-full pt-3 pb-3 pl-6  bg-secondary rounded-t-md ">
        <p className="font-medium md:text-2xl lg:text-3xl text-txt-primary ">
          {titleTable}
        </p>
        <div className=" md:flex md:flex-row gap-x-4 mt-4 my-2 flex-wrap grid-cols-3  grid ">
          {listFilterTransaction?.map((itemFilter) => {
            return (
              <div className="flex items-center  " key={itemFilter.name}>
                <input
                  onChange={() => setCurrentFilter(itemFilter.value)}
                  checked={itemFilter.value === currentFilter ? true : false}
                  name="currentFilter"
                  type="radio"
                  className="focus:ring-slate-50 h-6   text-red-700 border-gray-300 "
                />
                <label
                  htmlFor="push-everything"
                  className="ml-3 block text-tiny-xs md:text-sm font-medium text-txt-primary "
                >
                  {itemFilter.name}
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <DataTable
        responsive={true}
        title="Transaction"
        columns={columnsTransaction}
        data={transactions}
        customStyles={customStyles}
        theme="solarized"
        noHeader={true}
      />
    </div>
  )
}

const customStyles: TableStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '30px', // override the cell padding for head cells
      paddingRight: '8px',
      fontSize: 18,
    },
  },
  cells: {
    style: {
      paddingLeft: '30px', // override the cell padding for data cells
      paddingRight: '8px',
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
      default: '#29263C',
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

export const columnsTransaction: TableColumn<ItemTranSaction>[] = [
  {
    name: 'Action',
    selector: (row) => row?.action,
    width: '170px',
  },
  {
    name: 'Value',
    selector: (row) => nFormatter(row?.createdBlockNumber, 2),
    width: '100px',
  },
  {
    name: 'Transaction',
    selector: (row) => row?.id,
    width: '280px',
  },
  {
    name: 'From',
    selector: (row) => row?.from?.id,
    width: '280px',
  },
  {
    name: 'To',
    selector: (row) => row?.to?.id,
    width: '280px',
  },
  {
    name: 'Time',
    selector: (row) =>
      format(fromUnixTime(+row?.createdTimestamp), 'dd-MM-yyyy'),
    width: '170px',
  },
]
