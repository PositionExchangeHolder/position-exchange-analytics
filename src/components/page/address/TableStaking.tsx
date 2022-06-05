import TransactionTable from '@/components/transactionTable'
import { columnsStakingAddress } from '@/components/transactionTable/columnsStakingAddress'
import React from 'react'
import { AccountPosiBalances, StakingPool } from 'types/api/address'
import { isValidStakingPool } from 'utils/pool'
import { getPostionExchangeUrl } from 'utils/url'

const getPoolData = (
  balances: AccountPosiBalances | undefined
): StakingPool[] => {
  if (!balances) {
    return []
  }
  
  const poolData: StakingPool[] = []
  const pools = balances.nftPoolBalances.concat(
    balances.stakingPoolBalances,
    balances.vaultBalances
  )
  pools.forEach(e => {
    if (isValidStakingPool(e.pendingReward, e.stakingBalance)) {
      poolData.push({
        pid: e.pid,
        name: e.name,
        stakingBalance: e.stakingBalance,
        pendingReward: e.pendingReward
      })
    }
  })

  return poolData
}

type Props = {
  balances: AccountPosiBalances | undefined
  isMatchingAccount?: boolean
}

const TableStaking = ({
  balances
}: Props) => {
  return (
    <div>
      <TransactionTable
        transactions={getPoolData(balances)}
        titleTable="Staking Pools"
        isLoading={false}
        columns={columnsStakingAddress}
        noDataReferralLink={getPostionExchangeUrl('pools')}
      />
    </div>
  )
}

export default TableStaking
