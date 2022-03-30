import { gql } from '@apollo/client'
import client from '../apolloInstance'
import {
  GetListNftGradeRequestParam,
  GetTransactionNftGradeRequestParam,
  ListDataGradeResponse,
  ListDataTransactionGradeResponse,
} from './nft-grade.api.type'
export const getListNftGrade = async ({
  grade,
}: GetListNftGradeRequestParam) => {
  const response: ListDataGradeResponse = await client.query({
    query: gql`
      query PositionNFT($first: Int, $where: PositionNFT_filter) {
        positionNFTs(first: $first, where: $where) {
          id
          grade
        }
      }
    `,
    variables: {
      first: 10,
      where: {
        grade: grade,
      },
    },
  })
  return response
}

export const getListTransactionNftGrade = async ({
  grade,
  skip,
  action,
}: GetTransactionNftGradeRequestParam) => {
  const filter: any = {
    first: 10,
    skip,
    grade,
  }
  if (action !== 'All') {
    filter.where = {
      action,
    }
  }
  const response: ListDataTransactionGradeResponse = await client.query({
    query: gql`
      query Transactions($skip: Int, $first: Int, $where: Transaction_filter) {
        transactions(skip: $skip, first: $first, where: $where) {
          id
          grade
          action
          from {
            id
          }
          to {
            id
          }
          createdTimestamp
        }
      }
    `,
    variables: filter,
  })
  return response
}
