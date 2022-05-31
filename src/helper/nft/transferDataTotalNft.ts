import { NftStatistics } from 'types/api/nft'

export type TypeItemNft = {
  currentValue: number
  totalMinted: number
  createdTimestamp: number
  grade: number
  imageUrl?: string
}

export const getDataGrade = (data: NftStatistics) => {
  const {
    totalGrade1Minted,
    totalGrade2Minted,
    totalGrade3Minted,
    totalGrade4Minted,
    totalGrade5Minted,
    totalGrade6Minted,
    totalGrade1Burned,
    totalGrade2Burned,
    totalGrade3Burned,
    totalGrade4Burned,
    totalGrade5Burned,
    totalGrade6Burned,
    createdTimestamp,
  } = data
  return {
    totalGrade1Minted,
    totalGrade2Minted,
    totalGrade3Minted,
    totalGrade4Minted,
    totalGrade5Minted,
    totalGrade6Minted,
    totalGrade1Burned,
    totalGrade2Burned,
    totalGrade3Burned,
    totalGrade4Burned,
    totalGrade5Burned,
    totalGrade6Burned,
    createdTimestamp,
  }
}

export const transferDataTotalNft = (data: NftStatistics) => {
  const itemGrade = (
    totalMinted: string,
    totalBurned: string,
    grade: number
  ) => {
    return {
      currentValue: +totalMinted - +totalBurned,
      totalMinted: +totalMinted,
      createdTimestamp: +createdTimestamp,
      grade,
    } as any
  }

  const {
    totalGrade1Minted,
    totalGrade2Minted,
    totalGrade3Minted,
    totalGrade4Minted,
    totalGrade5Minted,
    totalGrade6Minted,
    totalGrade1Burned,
    totalGrade2Burned,
    totalGrade3Burned,
    totalGrade4Burned,
    totalGrade5Burned,
    totalGrade6Burned,
    createdTimestamp,
  } = getDataGrade(data)
  const listData: TypeItemNft[] = []
  listData.push(itemGrade(totalGrade1Minted, totalGrade1Burned, 1))
  listData.push(itemGrade(totalGrade2Minted, totalGrade2Burned, 2))
  listData.push(itemGrade(totalGrade3Minted, totalGrade3Burned, 3))
  listData.push(itemGrade(totalGrade4Minted, totalGrade4Burned, 4))
  listData.push(itemGrade(totalGrade5Minted, totalGrade5Burned, 5))
  listData.push(itemGrade(totalGrade6Minted, totalGrade6Burned, 6))
  return listData
}
