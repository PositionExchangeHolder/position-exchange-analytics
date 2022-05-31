import { FilterTransaction } from 'types/api/nft'

export type PropSSRNftGrade = {
  query: QueryNftGrade
}

export type QueryNftGrade = {
  slug: string
  skip: string
  action: FilterTransaction
}

export type TypeFilter = {
  value: FilterTransaction
  name: string
}
export const listFilterTransactionNftGrade: TypeFilter[] = [
  {
    name: 'All',
    value: 'All',
  },
  {
    name: 'Mint',
    value: 'Mint',
  },
  {
    name: 'Burn',
    value: 'Burn',
  },
  {
    name: 'Transfer',
    value: 'Transfer',
  },
  {
    name: 'Trade',
    value: 'TradeOnMarketplace',
  },
  {
    name: 'Stake',
    value: 'Stake',
  },
  {
    name: 'Unstake',
    value: 'Unstake',
  },
]
