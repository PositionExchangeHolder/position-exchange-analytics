/* eslint-disable @next/next/no-img-element */
import { getAccountInfo, getRealizedPnlAndTradingDataOfAddress } from 'api/address/address.api'
import { AccountInfo, RealizedPnlAndTradingData } from 'api/address/address.api.type'
import React, { useEffect, useState } from 'react'
import { isContractAddress } from 'utils/address'
import { getJoinedDate } from 'utils/date'
import { BscscanLinkButton, BscscanType } from '../common/BscscanLinkButton'
import { AddressPnL } from './PnL'
import SocialButton from './SocialInfo'

type Props = {
  account: string
  isMatchingAccount: boolean
}

const AccountInfo = ({ account, isMatchingAccount }: Props) => {
  const [realizedPnlAndTradingData, setRealizedPnlAndTradingData] = useState<RealizedPnlAndTradingData>()
  const [accountInfo, setAccountInfo] = useState<AccountInfo>()
  const [isContract, setIsContract] = useState<boolean>(false)
  
  useEffect(() => {
    if (account === '') {
      return
    }
    
    const fetchRealizedPnlAndTradingData = async () => {
      const data = await getRealizedPnlAndTradingDataOfAddress(account)
      setRealizedPnlAndTradingData(data)
    }

    const checkIsContract = async () => {
      const result = await isContractAddress(account)
      setIsContract(result)
    }

    const fetchAccountInfo = async () => {
      const result = await getAccountInfo(account)
      setAccountInfo(result)
    }

    fetchRealizedPnlAndTradingData()
    fetchAccountInfo()
    checkIsContract()
  }, [account])

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center w-32 h-32 rounded-full ring-1 ring-white/5 shadow-md drop-shadow-[0_1px_2px_#1B2431]">
          <img
            alt="avatar"
            className="float-left h-full rounded-full"
            src={accountInfo?.image || '/robot.svg'}
          />
        </div>
        <span className="mt-4 text-2xl">
          {accountInfo?.name || 'Unnamed'}
        </span>
        {
          Number(realizedPnlAndTradingData?.realizedPnl) !== 0  && (
            <AddressPnL realizedPnl={Number(realizedPnlAndTradingData?.realizedPnl)} />
          )
        }
        {
          realizedPnlAndTradingData?.createdTimestamp && (
            <span className="pt-1 text-sm text-gray-400">
              Joined {getJoinedDate(realizedPnlAndTradingData?.createdTimestamp)}
            </span>
          )
        }
        <div className="py-2 px-4 mt-3 bg-primary rounded-[30px] ring-1 ring-white/5 shadow-md drop-shadow-[0_1px_2px_#1B2431]">
          <BscscanLinkButton
            hash={account}
            type={BscscanType.ADDRESS}
            isContractAddress={isContract}
          />
        </div>
        <SocialButton isMatchingAccount={isMatchingAccount} />
      </div>
    </div>
  )
}

export default AccountInfo
