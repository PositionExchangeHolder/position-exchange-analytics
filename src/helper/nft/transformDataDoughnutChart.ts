import { NftStatistics } from 'types/api/nft'
import { getDataGrade } from './transferDataTotalNft'

export type TypeItemNft = {
  currentValue: number
  totalMinted: number
  createdTimestamp: number
  grade: number
}

const calculatePercentageCirculate = (
  minted: string | number,
  burned: string | number
) => {
  return +minted - +burned
}
export type DataDoughnutChart = {
  data: []
  total: number
}

export const transformDataDoughnutChart = (dataNftStatistic: NftStatistics) => {
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

  // const
  const data: any[] = []
  data.push({
    value: calculatePercentageCirculate(totalGrade1Minted, totalGrade1Burned),
    id: 'Grade1',
    label: 'Grade 1',
    color: 'rgba(57, 70, 238, 0.4)',
  })
  data.push({
    value: calculatePercentageCirculate(totalGrade2Minted, totalGrade2Burned),
    id: 'Grade2',
    label: 'Grade 2',
    color: 'rgba(251, 173, 55, 0.4)',
  })
  data.push({
    value: calculatePercentageCirculate(totalGrade3Minted, totalGrade3Burned),
    id: 'Grade3',
    label: 'Grade 3',
    color: 'rgba(187, 107, 217, 0.4)',
  })
  data.push({
    value: calculatePercentageCirculate(totalGrade4Minted, totalGrade4Burned),
    id: 'Grade4',
    label: 'Grade 4',
    color: 'rgba(171, 5, 242, 0.4)',
  })
  data.push({
    value: calculatePercentageCirculate(totalGrade5Minted, totalGrade5Burned),
    id: 'Grade5',
    label: 'Grade 5',
    color: 'rgba(110, 192, 242, 0.4)',
  })
  data.push({
    value: calculatePercentageCirculate(totalGrade6Minted, totalGrade6Burned),
    id: 'Grade6',
    label: 'Grade 6',
    color: 'rgba(114, 216, 218, 0.4)',
  })
  const total =
    +dataNftStatistic.totalNftsMinted - +dataNftStatistic.totalNftsBurned

  return { data, total } as DataDoughnutChart
}
