import { ItemNftStatistic } from 'api/nft/nft.api.type'
import { isEmpty } from 'lodash'

export type CurrentInfoNft = {
  totalMinted: number
  totalBurned: number
}
const getCurrentInfoNft = (data: ItemNftStatistic, grade: number | string) => {
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
