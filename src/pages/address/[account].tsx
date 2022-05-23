import React, { useEffect, useState } from 'react'
import BalanceWallet from '@/components/address/BalanceWallet'
import { AddressPnL } from '@/components/address/PnL'
import SocialButton from '@/components/address/SocialButton'
import StakingListItem from '@/components/address/StakingListItem'
import TableDataReferralsAddress from '@/components/address/TableDataReferralsAddress'
import {
  BscscanLinkButton,
  BscscanType,
} from '@/components/common/BscscanLinkButton'
import {
  getRealizedPnlAndTradingDataOfAddress,
  getUserInfoBalance,
} from 'api/address/address.api'
import {
  DataBalancerResponse,
  RealizedPnlAndTradingData,
} from 'api/address/address.api.type'
import { transformDataWalletDoughnutChart } from 'helper/nft/transformDataWalletDoughnutChart'
import { isEmpty } from 'lodash'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { convertBigNumberToNumber } from 'utils/number'

export default function Account() {
  const router = useRouter()
  const account: string = (router?.query?.account as string) || ''
  const [balance, setBalance] = useState<DataBalancerResponse>()
  const [realizedPnlAndTradingData, setRealizedPnlAndTradingData] =
    useState<RealizedPnlAndTradingData>()

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

      const fetchRealizedPnlAndTradingData = async () => {
        const data = await getRealizedPnlAndTradingDataOfAddress(account)
        setRealizedPnlAndTradingData(data)
      }

      fetchAddressBalance()
      fetchRealizedPnlAndTradingData()
    } catch (error) {}
  }, [account])

  return (
    <main className="relative px-6 mt-8 w-full bg-light-primary dark:bg-primary md:mt-16 xl:px-0">
      {/* Address information */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-32 h-32 rounded-full ring-1 ring-white/5 shadow-md drop-shadow-[0_1px_2px_#1B2431]">
            <Image
              alt="avatar"
              width={52}
              height={52}
              className="float-left h-full rounded-full"
              src="/user.svg"
            />
          </div>
          <span className="mt-4 text-2xl">
            Kate Horwitz
          </span>
          {
            Number(realizedPnlAndTradingData?.realizedPnl) !== 0  && (
              <AddressPnL realizedPnl={Number(realizedPnlAndTradingData?.realizedPnl)} />
            )
          }
          <div className="py-2 px-4 mt-4 bg-primary rounded-[30px] ring-1 ring-white/5 shadow-md drop-shadow-[0_1px_2px_#1B2431]">
            <BscscanLinkButton hash={account} type={BscscanType.ADDRESS} />
          </div>
          <SocialButton />
        </div>
      </div>
      
      {/* Address Token Balance */}
      <BalanceWallet
        totalPosiBalance={balance?.totalPosiBalance}
        dataDoughnutWalletChart={dataDoughnutWalletChart}
      />
      
      {/* Staking  */}
      <StakingListItem
        stakingPoolBalances={balance?.stakingPoolBalances}
        nftPoolBalance={balance?.nftPoolBalance}
      />

      {/* <NftListItem address={account} /> */}

      {/* Referral Table */}
      <div className="pt-16">
        <TableDataReferralsAddress referrerId={account} />
      </div>
    </main>
  )
}
