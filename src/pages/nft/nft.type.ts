import { FilterTransaction } from 'api/nft/nft.type'

export type PropSSRNft = {
  query: QueryNft
}

export type QueryNft = {
  skip: string
  action: FilterTransaction
}

export type TypeFilter = {
  value: FilterTransaction
  name: string
}
export const listFilterTransaction: TypeFilter[] = [
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
