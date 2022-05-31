import { isEmpty } from 'lodash'
import { NftStatistics } from 'types/api/nft'

export type CurrentInfoNft = {
  totalMinted: number
  totalBurned: number
}
const getCurrentInfoNft = (data: NftStatistics, grade: number | string) => {
  const patternMinted = `${grade}Minted`
  const patternBurned = `${grade}Burned`

  let totalMinted = 0
  let totalBurned = 0
  const flatObject = Object.entries(data)
  flatObject.map(([key, value]) => {
    if (!isEmpty(key.match(patternMinted))) {
      totalMinted = +value
    }
    if (!isEmpty(key.match(patternBurned))) {
      totalBurned = +value
    }
  })
  return {
    totalMinted,
    totalBurned,
  } as CurrentInfoNft
}
export { getCurrentInfoNft }
