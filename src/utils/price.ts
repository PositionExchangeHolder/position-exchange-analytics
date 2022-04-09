import BigNumber from 'bignumber.js'
import { PriceItem } from 'store/price/priceSlice.type'

export const getPosiBusdPrice = (prices: PriceItem[] | null): number => {
  return prices ? Number(prices[0].price) : 0
}

export const calculateWorthOfToken = (amountToken: number | string, price: number | string): string => {
  const worthOfToken = new BigNumber(amountToken)
    .times(new BigNumber(price))
    .div(1e18)
    .toString()
  
  return worthOfToken
}

export const formatMoney = (amount: number | string): string => {
  return (
    Number(amount).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  )
}
