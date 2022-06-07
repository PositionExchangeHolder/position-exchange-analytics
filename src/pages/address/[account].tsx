import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import BalanceWallet from '@/components/page/address/BalanceWallet'
import TableDataReferralsAddress from '@/components/page/address/TableDataReferralsAddress'
import { transformDataWalletDoughnutChart } from 'helper/nft/transformDataWalletDoughnutChart'
import { useRouter } from 'next/router'
import { convertBigNumberToNumber } from 'utils/number'
import NftListItem from '@/components/page/address/NftListItem'
import HeadSEO from '@/components/layout/HeadSEO'
import AccountInfo from '@/components/page/address/AccountInfo'
import { AccountPosiBalances } from 'types/api/address'
import { getAddressBalances } from 'api/address/balance'
import { isAddress } from 'utils/address'
import TableStaking from '@/components/page/address/TableStaking'
import Activities from '@/components/page/address/Activities'
import AccountStatistics from '@/components/page/address/AccountStatistics'

export default function Account() {
  const router = useRouter()
  const { account: accountWeb3 } = useWeb3React()
  const account = (router?.query?.account as string) || ''
  const isMatchingAccount = accountWeb3?.toLowerCase() === account.toLowerCase()
  
  const [balance, setBalance] = useState<AccountPosiBalances>()
  
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
    if (!isAddress(account)) return
    const fetchAddressBalance = async () => {
      const data = await getAddressBalances(account)
      if (data) {
        setBalance(data)
      }
    }

    fetchAddressBalance()
  }, [account])

  return (
    <main className="relative px-6 mt-8 w-full bg-light-primary dark:bg-primary md:mt-12 xl:px-0">
      <HeadSEO
        title={`Position Address | ${account}`}
        description={`Position Address | ${account}`}
      />

      {/* Address information */}
      <AccountInfo account={account} isMatchingAccount={isMatchingAccount} />

      {/* Address Token Balance */}
      <div className="grid-rows-2 mt-12 lg:grid lg:grid-cols-3 lg:grid-rows-none lg:gap-x-12 lg:mt-12">
        <div className="col-span-1 lg:row-span-1">
          <BalanceWallet
            totalPosiBalance={balance?.totalPosiBalance}
            dataDoughnutWalletChart={dataDoughnutWalletChart}
          />

          <div className="mt-6">
            <AccountStatistics address={account} />
          </div>
        </div>
        <div className="relative row-span-1 mt-12 lg:col-span-2 lg:mt-0 h-a">
          <Activities address={account} />
        </div>
      </div>

      {/* Staking  */}
      <div className="grid-rows-2 mt-12 lg:grid lg:grid-cols-3 lg:grid-rows-none lg:gap-x-12 lg:mt-12">
        <div className="col-span-1 lg:row-span-1">
          <TableStaking
            balances={balance}
            isMatchingAccount={isMatchingAccount}
          />
        </div>
        <div className="relative row-span-1 mt-12 lg:col-span-2 lg:mt-0 h-a">
          <NftListItem address={account} />
        </div>
      </div>

      {/* Referral Table */}
      <div className="pt-16">
        <TableDataReferralsAddress referrerId={account} />
      </div>
    </main>
  )
}
