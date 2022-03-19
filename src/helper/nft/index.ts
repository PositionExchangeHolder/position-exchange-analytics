import { ItemNftStatistic } from 'api/nft/nft.type'
export type TypeItemNft = {
  currentValue: number
  totalMinted: number
  createdTimestamp: number
}
export const transferDataTotalNft = (data: ItemNftStatistic) => {
  const itemGrade = (totalMinted: string, totalBurned: string) => {
    return {
      currentValue: +totalMinted - +totalBurned,
      totalMinted: +totalMinted,
      createdTimestamp: +createdTimestamp,
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
  } = data
  const listData: TypeItemNft[] = []
  listData.push(itemGrade(totalGrade1Minted, totalGrade1Burned))
  listData.push(itemGrade(totalGrade2Minted, totalGrade2Burned))
  listData.push(itemGrade(totalGrade3Minted, totalGrade3Burned))
  listData.push(itemGrade(totalGrade4Minted, totalGrade4Burned))
  listData.push(itemGrade(totalGrade5Minted, totalGrade5Burned))
  listData.push(itemGrade(totalGrade6Minted, totalGrade6Burned))
  return listData
  // const pattern = /Grade/i
  // const patternNumber = [/1/i, /2/i, /3/i, /4/i, /5/i, /6/i]
  // const patternMinted = /Minted/i
  // const patternBurned = /Burned/i
  // const flatObject = Object.entries(data)
  // flatObject.map(([key, value], index) => {
  //   if (!isEmpty(key.match(pattern))) {
  //     // if(!isEmpty(key.patternNumber))
  //   }
  // })
  // console.log('data', data)
}