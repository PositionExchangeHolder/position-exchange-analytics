import { ActiveTransaction, ItemTranSaction } from 'api/nft/nft.type'
import { format, fromUnixTime } from 'date-fns'
import React, { useState } from 'react'
import DataTable, {
  createTheme,
  TableColumn,
  TableStyles,
} from 'react-data-table-component'
import { nFormatter } from 'utils/number'
type TypeFilter = {
  value: ActiveTransaction
  name: string
}
const listFilterTransaction: TypeFilter[] = [
  {
    name: 'All',
    value: 'Burn',
  },
  {
    name: 'Swap',
    value: 'Burn',
  },
  {
    name: 'Stake',
    value: 'Stake',
  },
]
type Props = {
  transactions: ItemTranSaction[]
  titleTable: string
}
export default function Transaction({ transactions, titleTable }: Props) {
  const [currentFilter, setCurrentFilter] = useState(0)
  return (
    <div>
      <div className="w-full pt-3 pb-3 pl-6  bg-secondary rounded-t-md ">
        <p className="font-medium text-3xl text-txt-primary ">{titleTable}</p>
        <div className="flex flex-row gap-x-4 mt-4 ">
          {listFilterTransaction.map((itemFilter, index) => {
            return (
              <div className="flex items-center  " key={itemFilter.name}>
                <input
                  onChange={() => setCurrentFilter(index)}
                  // onClick={() => setCurrentFilter(index)}
                  checked={index === currentFilter ? true : false}
                  name="currentFilter"
                  type="radio"
                  className="focus:ring-slate-50 h-6 w-6 text-red-700 border-gray-300 "
                />
                <label
                  htmlFor="push-everything"
                  className="ml-3 block text-xl font-medium text-txt-primary "
                >
                  {itemFilter.name}
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <DataTable
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
  },
  {
    name: 'Value',
    selector: (row) => nFormatter(row?.createdBlockNumber, 2),
  },
  {
    name: 'Transaction',
    selector: (row) => row?.id,
  },
  {
    name: 'From',
    selector: (row) => row?.from?.id,
  },
  {
    name: 'To',
    selector: (row) => row?.to?.id,
  },
  {
    name: 'Time',
    selector: (row) =>
      format(fromUnixTime(+row?.createdTimestamp), 'dd-MM-yyyy'),
  },
]
