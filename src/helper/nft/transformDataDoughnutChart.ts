import { ItemNftStatistic } from 'api/nft/nft.api.type'
import { getDataGrade } from './transferDataTotalNft'

export type TypeItemNft = {
  currentValue: number
  totalMinted: number
  createdTimestamp: number
  grade: number
}

const backgroundColor = [
  'rgba(57, 70, 238, 0.4)',
  'rgba(251, 173, 55, 0.4)',
  'rgba(187, 107, 217, 0.4)',
  'rgba(171, 5, 242, 0.4)',
  'rgba(110, 192, 242, 0.4)',
  'rgba(114, 216, 218, 0.4)',
]
const calculatePercentageCirculate = (
  minted: string | number,
  burned: string | number
) => {
  return +minted - +burned
}
export const transformDataDoughnutChart = (
  dataNftStatistic: ItemNftStatistic,
  grade: string
) => {
  const labels = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
  ]
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
  } = getDataGrade(dataNftStatistic)

  const data: number[] = []
  data.push(calculatePercentageCirculate(totalGrade1Minted, totalGrade1Burned))
  data.push(calculatePercentageCirculate(totalGrade2Minted, totalGrade2Burned))
  data.push(calculatePercentageCirculate(totalGrade3Minted, totalGrade3Burned))
  data.push(calculatePercentageCirculate(totalGrade4Minted, totalGrade4Burned))
  data.push(calculatePercentageCirculate(totalGrade5Minted, totalGrade5Burned))
  data.push(calculatePercentageCirculate(totalGrade6Minted, totalGrade6Burned))
  const borderColor = [
    'rgba(57, 70, 238, 0.2)',
    'rgba(251, 173, 55, 0.2)',
    'rgba(187, 107, 217, 0.2)',
    'rgba(171, 5, 2422, 0.2)',
    'rgba(110, 192, 242, 0.2)',
    'rgba(114, 216, 218, 0.2)',
  ]

  const newBorderHeightLight = borderColor[+grade - 1].replace('0.2', '1')
  borderColor[+grade - 1] = newBorderHeightLight

  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  }
}
