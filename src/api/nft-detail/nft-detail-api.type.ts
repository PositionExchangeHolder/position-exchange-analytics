import { ActiveTransaction } from 'api/nft/nft.api.type'

type PositionNFT = {
  totalTransactions: string | number
  transactions: ItemTransactionActivities[]
}
export type DataActivitiesNftDetail = {
  positionNFT: PositionNFT
}

// transaction
export type ItemTransactionActivities = {
  id: number
  txHash: string
  action: ActiveTransaction
  from: {
    id: string
  }
  to: {
    id: string
  }
  createdTimestamp: string
}

export type OrderDirection = 'asc' | 'desc'
export type OrderBy =
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | 'gasPrice'
  | 'gasLimit'
  | 'to'
  | 'from'
  | 'sender'
  | 'nft'
  | 'grade'
  | 'action'
  | 'id'
  | 'Values'

////
export type GetListActivitiesNftRequestParam = {
  positionNftId: string
  skip?: number
  first?: number
  orderBy?: OrderBy
  orderDirection?: OrderDirection
}

export type ListDataActivitiesNftResponse = {
  data: DataActivitiesNftDetail
}

//
export type PositionNFTInfo = {
  id: string
  grade: string
  quality: string
  amount: string
  author: { id: string }
  owner: { id: string }
  lockedDays: string
  totalTransactions: string
  totalOwners: string
  burned: boolean
  createdBlockNumber: string
  createdTime: string
  updatedTimestamp: string
}

export type DataNftDetailResponse = {
  positionNFT: PositionNFTInfo
}

export type NftDetailResponse = {
  data: DataNftDetailResponse
}

export type PropSSRNftDetail = {
  query: {
    nft_id: string
  }
}
