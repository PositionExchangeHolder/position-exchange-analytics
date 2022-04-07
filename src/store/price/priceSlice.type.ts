export type PriceItem = {
  pair: string
  price: string
}

export type DataPrice = {
  prices: PriceItem[] | null
}

export const initialStatePrice: DataPrice = {
  prices: null,
}

export type DataPriceResponse = {
  data: DataPrice
}
