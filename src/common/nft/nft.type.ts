import { FilterTransaction } from 'api/nft/nft.api.type'

export type PropSSRNft = {
  query: QueryNft
}

export type QueryNft = {
  skip: number
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
    name: 'MINT',
    value: 'Mint',
  },
  {
    name: 'BURN',
    value: 'Burn',
  },
  {
    name: 'TRANSFER',
    value: 'Transfer',
  },
  {
    name: 'TRADE',
    value: 'TradeOnMarketplace',
  },
  {
    name: 'STAKE',
    value: 'Stake',
  },
  {
    name: 'UNSTAKE',
    value: 'Unstake',
  },
]
