import { gql } from '@apollo/client'
import client from '../apolloInstance'
import {
  GetListNftGradeRequestParam,
  GetTransactionNftGradeRequestParam,
  ListDataGradeResponse,
  ListDataTransactionGradeResponse,
} from './nft-grade.type'
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
}: GetTransactionNftGradeRequestParam) => {
  const response: ListDataTransactionGradeResponse = await client.query({
    query: gql`
      query Transactions($where: Transaction_filter, $first: Int) {
        transactions(where: $where, first: $first) {
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
    variables: {
      first: 10,
      where: {
        grade: grade,
      },
    },
  })
  return response
}
