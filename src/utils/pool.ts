import BigNumber from 'bignumber.js'

export const isValidStakingPool = (
  staking: string | number,
  pending: string | number
): boolean => {
  return (
    new BigNumber(staking).gt(new BigNumber(0))
    && new BigNumber(pending).gt(new BigNumber(0))
  )
}
