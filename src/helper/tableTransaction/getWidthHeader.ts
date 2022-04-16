import { TableColumn } from 'react-data-table-component'

export const getWidthHeader = <T>(data: TableColumn<T>[]) => {
  const initialValue = 0
  const sumWithInitial = data.reduce(
    (previousValue, currentValue) =>
      previousValue + getWidthColumnStyle(currentValue),
    initialValue
  )
  return sumWithInitial
}
const getWidthColumnStyle = (item: any) => {
  const width = item?.width?.replace('px', '')
  return +width
}
