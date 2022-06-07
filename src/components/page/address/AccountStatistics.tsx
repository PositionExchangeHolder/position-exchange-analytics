import Loading from '@/components/loading/Loading'
import { getAddressStatistics } from 'api/address/statistics'
import React, { useEffect, useState } from 'react'
import { AddressStatistics } from 'types/api/address'
import { isAddress } from 'utils/address'
import { convertBigNumberToNumber, convertBigNumberToStringNumber } from 'utils/number'
import { formatMoney } from 'utils/price'

type Props = {
  address: string
}

const AccountStatistics = ({ address }: Props) => {
  const [statistics, setStatistics] = useState<AddressStatistics>()

  useEffect(() => {
    const fetchAddressStatistics = async () => {
      const statistics = await getAddressStatistics(address)
      if (statistics) {
        setStatistics(statistics)
      }
    }

    if (isAddress(address)) {
      fetchAddressStatistics()
    }

  }, [address])

  return (
    <div className="w-full lg:bg-secondary p-4">
      <div className="justify-center items-center w-full text-center">
        <p className="text-sm font-medium uppercase text-txt-light-txt-primary dark:text-txt-primary lg:text-base">
          Statistics
        </p>
      </div>

      {
        !statistics
          ? <Loading />
          : (
            <div className="mt-2">
              <p className="ml-2 mt-1.5">
                Buy: {convertBigNumberToNumber(statistics.totalTokensBuy)} POSI
              </p>
              <p className="ml-2 mt-1.5">
                Sell: {convertBigNumberToNumber(statistics.totalTokensSell )} POSI
              </p>
              <p className="ml-2 mt-1.5">
                Volumes: {formatMoney(convertBigNumberToNumber(statistics.totalVolumeInBUSD))}
              </p>
              <p className="ml-2 mt-1.5">
                Trade: {statistics.totalSwapTransactions}
              </p>
              <p className="ml-2 mt-1.5">
                Transactions: {statistics.totalTransactions}
              </p>
            </div>
          )
      }
    </div>
  )
}

export default AccountStatistics
