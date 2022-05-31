import { BigNumber } from 'bignumber.js'

export const commasNumberFormat = (data: string | number) => {
  return new Intl.NumberFormat().format(+data)
}

export function nFormatter(num: number | string, digits: number) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return +num >= item.value
    })
  return item
    ? (+num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0'
}

export function percentage(
  partialValue: number | string,
  totalValue: number | string
) {
  return (100 * Number(partialValue)) / Number(totalValue)
}

export function convertBigNumberToStringNumber(
  num: BigNumber | number | string,
  digits = 2
): string {
  return commasNumberFormat(
    new BigNumber(num).div(1e18).toFixed(digits).toString()
  )
}

export const convertBigNumberToNumber = (
  num: BigNumber | number | string,
  digits = 2
): number => {
  return Number(new BigNumber(num).div(1e18).toFixed(digits))
}

export const toGwei = (
  num: number | string,
  digits = 2
) => {
  return Number(new BigNumber(num).div(1e9)).toFixed(digits)
}
