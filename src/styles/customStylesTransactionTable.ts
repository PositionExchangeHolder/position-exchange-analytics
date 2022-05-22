import { TableStyles } from 'react-data-table-component'
export const customStylesTransactionTable: TableStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '20px', // override the cell padding for head cells
      paddingRight: '0px',
      fontSize: 14,
    },
  },
  cells: {
    style: {
      paddingLeft: '20px', // override the cell padding for data cells
      paddingRight: '0px',
      fontSize: 12,
      color: 'red',
      fontWeight: '600',
    },
  },
  header: {
    style: {
      borderTopRightRadius: 6,
      borderTopLeftRadius: 6,
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  noData: {
    style: {
      height: 100,
    },
  },
}
