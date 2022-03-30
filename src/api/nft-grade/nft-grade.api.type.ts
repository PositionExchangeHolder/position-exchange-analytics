import { ActiveTransaction, FilterTransaction } from 'api/nft/nft.api.type'

export type ItemNftGrade = {
  id: number
  date: number
  dailyTokenLocked: number
  dailyNftMinted: number
  dailyNftBurned: number
  dailyTransactions: number
  createdBlockNumber: number
}

export type DataNftGrade = {
  positionNFTs: ItemNftGrade[]
}
export type ListDataGradeResponse = {
  data: DataNftGrade
}
export type GetListNftGradeRequestParam = {
  grade: string
}
// transaction
export type ItemTransactionNftGrade = {
  id: number
  grade: number
  action: ActiveTransaction
  from: {
    id: string
  }
  to: {
    id: string
  }
  createdTimestamp: string
}

export type DataTransactionNftGrade = {
  transactions: ItemTransactionNftGrade[]
}
export type ListDataTransactionGradeResponse = {
  data: DataTransactionNftGrade
}
export type GetTransactionNftGradeRequestParam = {
  grade?: string
  skip: string | number
  action: FilterTransaction
  id?: string
}
