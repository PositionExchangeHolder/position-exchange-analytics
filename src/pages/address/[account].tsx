import BalanceWallet from '@/components/address/BalanceWallet'
import SocialButton from '@/components/address/SocialButton'
import StakingListItem from '@/components/address/StakingListItem'
import TableDataReferralsAddress from '@/components/address/TableDataReferralsAddress'
import { DoughnutChart } from '@/components/chart/DoughnutChart'
import LineChart from '@/components/chart/LineChart'
import { BscscanLinkButton, BscscanType } from '@/components/common/BscscanLinkButton'
import PnLChart from '@/components/CusTomPnLChart/PnLChart'
import { fakeDataLineChart, getRealizedPnlAndTradingDataOfAddress, getUserInfoBalance } from 'api/address/address.api'
import { DataBalancerResponse, RealizedPnlAndTradingData } from 'api/address/address.api.type'
import { transformDataWalletDoughnutChart } from 'helper/nft/transformDataWalletDoughnutChart'
import { isEmpty } from 'lodash'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { commasNumberFormat, convertBigNumberToNumber } from 'utils/number'

export default function Account() {
  const router = useRouter()
  const account: string = (router?.query?.account as string) || ''
  const [balance, setBalance] = useState<DataBalancerResponse>()
  const [realizedPnlAndTradingData, setRealizedPnlAndTradingData] = useState<RealizedPnlAndTradingData>()

  const totalWallet = convertBigNumberToNumber(
    balance?.totalPosiBalance?.walletBalance
    || 0
  )
  const totalPending = convertBigNumberToNumber(
    balance?.totalPosiBalance?.pendingBalance
    || 0
  )
  const totalStaking = convertBigNumberToNumber(
    balance?.totalPosiBalance?.stakingBalance
    || 0
  )
  const dataDoughnutWalletChart = transformDataWalletDoughnutChart({
    totalWallet,
    totalPending,
    totalStaking,
  })

  useEffect(() => {
    try {
      if (isEmpty(account)) return
      const fetchBalancer = async () => {
        const data: DataBalancerResponse = await getUserInfoBalance(account)
        setBalance(data)
      }

      const fetchRealizedPnlAndTradingData = async () => {
        const data = await getRealizedPnlAndTradingDataOfAddress(account)
        setRealizedPnlAndTradingData(data)
      }

      fetchBalancer()
      fetchRealizedPnlAndTradingData()
    } catch (error) {}
  }, [account])

  return (
    <main className="relative px-6 mt-10 w-full bg-light-primary dark:bg-primary md:mt-16 xl:px-0">
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
          <span className="mt-6 text-2xl">Kate Horwitz</span>
          <div className="py-2 px-4 mt-3 bg-primary rounded-[30px] ring-1 ring-white/5 shadow-md drop-shadow-[0_1px_2px_#1B2431]">
            <BscscanLinkButton
              hash={account}
              type={BscscanType.ADDRESS}
            />
          </div>
          <SocialButton />
        </div>
      </div>
      <div className="grid-cols-3 gap-x-12 mt-12 w-full md:grid">
        <div className=" group flex flex-col col-span-1 gap-y-4 justify-center items-center py-12 h-32 bg-secondary rounded-md">
          <BalanceWallet totalPosiBalance={balance?.totalPosiBalance} />
        </div>
        <div className="col-span-2 mt-12 w-full  h-72  md:mt-0">
          <LineChart data={fakeDataLineChart} showLabel={false} />
        </div>
      </div>

      <div className="grid-cols-3 gap-x-12 mt-12 w-full md:grid">
        <div className="group flex flex-col col-span-1 gap-y-4 justify-center items-center h-80 bg-secondary rounded-md">
          <div className="w-96 h-96">
            <DoughnutChart
              data={dataDoughnutWalletChart.data}
              total={dataDoughnutWalletChart.total}
            />
          </div>
        </div>
        <div className="flex flex-col col-span-2 justify-between mt-12 w-full h-80 bg-secondary md:mt-0 ">
          <div className="flex flex-row">
            <div className="flex flex-row items-center px-6 h-16 text-xs font-medium md:text-base">
              <div>
                PnL:
              </div>
              <div className={`ml-2
                ${
                  Number(realizedPnlAndTradingData?.realizedPnl) > 0
                    ? 'text-green-500'
                    : 'text-red-500'
                }
              `}>
                {
                  Number(realizedPnlAndTradingData?.realizedPnl) > 0
                    ? `+$${commasNumberFormat(realizedPnlAndTradingData?.realizedPnl || 0)}`
                    : `-$${commasNumberFormat(Math.abs(realizedPnlAndTradingData?.realizedPnl || 0))}`
                }
              </div>
            </div>
            {/* <div className="flex flex-row items-center px-6 h-16 text-xs font-medium md:text-base">
              <div>All-time ROI: </div>
              <div className="ml-2 text-red-500">{'-11%'}</div>
            </div> */}
          </div>
          <div className="py-2 h-64 ">
            <PnLChart />
          </div>
        </div>
      </div>
      
      <StakingListItem
        stakingPoolBalances={balance?.stakingPoolBalances}
        nftPoolBalance={balance?.nftPoolBalance}
      />
      
      <div className="pt-16">
        <TableDataReferralsAddress referrerId={account} />
      </div>
    </main>
  )
}
