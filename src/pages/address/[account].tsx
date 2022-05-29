import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import BalanceWallet from '@/components/address/BalanceWallet'
import StakingListItem from '@/components/address/StakingListItem'
import TableDataReferralsAddress from '@/components/address/TableDataReferralsAddress'
import { getUserInfoBalance } from 'api/address/address.api'
import { DataBalancerResponse } from 'api/address/address.api.type'
import { transformDataWalletDoughnutChart } from 'helper/nft/transformDataWalletDoughnutChart'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import { convertBigNumberToNumber } from 'utils/number'
import NftListItem from '@/components/address/NftListItem'
import HeadSEO from '@/components/layout/HeadSEO'
import AccountInfo from '@/components/address/AccountInfo'

export default function Account() {
  const router = useRouter()
  const { account: accountWeb3 } = useWeb3React()
  const account = (router?.query?.account as string) || ''
  const isMatchingAccount = accountWeb3?.toLowerCase() === account.toLowerCase()

  const [balance, setBalance] = useState<DataBalancerResponse>()

  const totalWallet = convertBigNumberToNumber(
    balance?.totalPosiBalance?.walletBalance || 0
  )
  const totalPending = convertBigNumberToNumber(
    balance?.totalPosiBalance?.pendingBalance || 0
  )
  const totalStaking = convertBigNumberToNumber(
    balance?.totalPosiBalance?.stakingBalance || 0
  )
  const dataDoughnutWalletChart = transformDataWalletDoughnutChart({
    totalWallet,
    totalPending,
    totalStaking,
  })

  useEffect(() => {
    try {
      if (isEmpty(account)) return
      const fetchAddressBalance = async () => {
        const data: DataBalancerResponse = await getUserInfoBalance(account)
        setBalance(data)
      }

      fetchAddressBalance()
    } catch (error) {}
  }, [account])

  return (
    <main className="relative px-6 mt-8 w-full bg-light-primary dark:bg-primary md:mt-16 xl:px-0">
      <HeadSEO
        title={`Position Address | ${account}`}
        description={`Position Address | ${account}`}
      />

      {/* Address information */}
      <AccountInfo account={account} isMatchingAccount={isMatchingAccount} />

      {/* Address Token Balance */}
      <div className="grid grid-rows-2 mt-12 lg:grid-cols-3 lg:grid-rows-none lg:gap-x-12 lg:mt-16">
        <div className="col-span-1 lg:row-span-1">
          <BalanceWallet
            totalPosiBalance={balance?.totalPosiBalance}
            dataDoughnutWalletChart={dataDoughnutWalletChart}
          />
        </div>
        <div className="row-span-1 mt-12  lg:col-span-2 lg:mt-0 h-a">
          <NftListItem address={account} />
        </div>
      </div>

      {/* Staking  */}
      <StakingListItem
        stakingPoolBalances={balance?.stakingPoolBalances}
        nftPoolBalances={balance?.nftPoolBalances}
        vaultBalances={balance?.vaultBalances}
        isMatchingAccount={isMatchingAccount}
      />

      {/* Referral Table */}
      <div className="pt-16">
        <TableDataReferralsAddress referrerId={account} />
      </div>
    </main>
  )
}
