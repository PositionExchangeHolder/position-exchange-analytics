import { BigNumber } from 'bignumber.js'

export function getNftMiningEfficiency(grade: number | string, productivity: number | string): number {
  grade = Number(grade)
  productivity = Number(productivity)
  let miningEfficiency
  
  switch (grade) {
    case 1:
      miningEfficiency = 1.1 + 0.1 * productivity / 5000
      break
    case 2:
      miningEfficiency = 1.2 + 0.1 * (productivity - 5000) / 3000
      break
    case 3:
      miningEfficiency = 1.3 + 0.1 * (productivity - 8000) / 1000
      break
    case 4:
      miningEfficiency = 1.4 + 0.2 * (productivity - 9000) / 800
      break
    case 5:
      miningEfficiency = 1.6 + 0.2 * (productivity - 9800) / 180
      break
    case 6:
      miningEfficiency = 1.8 + 0.2 * (productivity - 9980) / 20
      break
    default:
      miningEfficiency = 0
      break
  }

  return miningEfficiency * 100
}

export function getNftMiningPower(parValue: string, grade: number | string, productivity: number | string): number {
  const digits = 5
  return Number(
      new BigNumber(parValue)
        .times(new BigNumber(getNftMiningEfficiency(grade, productivity)))
        .div(100)
        .div(1e18)
        .toFixed(digits)
        .toString()
    )
}
