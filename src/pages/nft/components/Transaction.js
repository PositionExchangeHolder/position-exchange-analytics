import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component'

export default function Transaction(props) {
  console.log('props', props)
  return (
    <div>
      <DataTable
        title="Transaction"
        columns={columnsUser}
        data={data}
        customStyles={customStyles}
        theme="solarized"
      />
    </div>
  )
}

const customStyles = {
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
const data = [
  {
    event: 'transfer',
    price: 999999,
    from: 'SOS NFT',
    to: '0x1123',
    date: '2 month ago',
  },
  {
    event: 'transfer',
    price: 999999,
    from: 'SOS NFT',
    to: '0x1123',
    date: '2 month ago',
  },
  {
    event: 'transfer',
    price: 999999,
    from: 'SOS NFT',
    to: '0x1123',
    date: '2 month ago',
  },
  {
    event: 'transfer',
    price: 999999,
    from: 'SOS NFT',
    to: '0x1123',
    date: '2 month ago',
  },
  {
    event: 'transfer',
    price: 999999,
    from: 'SOS NFT',
    to: '0x1123',
    date: '2 month ago',
  },
  {
    event: 'transfer',
    price: 999999,
    from: 'SOS NFT',
    to: '0x1123',
    date: '2 month ago',
  },
  {
    event: 'transfer',
    price: 999999,
    from: 'SOS NFT',
    to: '0x1123',
    date: '2 month ago',
  },
  {
    event: 'transfer',
    price: 999999,
    from: 'SOS NFT',
    to: '0x1123',
    date: '2 month ago',
  },
]

export const columnsUser = [
  {
    name: 'Type of user',
    selector: (row) => row.event,
  },
  {
    name: 'Price',
    selector: (row) => row.price,
  },
  {
    name: 'From',
    selector: (row) => row.from,
  },

  {
    name: 'To',
    selector: (row) => row.to,
  },
  {
    name: 'Date',
    selector: (row) => row.date,
  },
]
