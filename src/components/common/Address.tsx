import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAddressLabel } from 'utils/address'
import { hashFormatter } from 'utils/string'
import { isContractAddress } from 'utils/address'
import ToolTip from './ToolTip'

type Props = {
  address: string
  shortLink?: boolean
}

export const Address = ({ address, shortLink = true }: Props) => {
  const [isContract, setIsContract] = useState<boolean>(false)
  const addressStr = getAddressLabel(address)
    || hashFormatter(address, shortLink)

  useEffect(() => {
    const checkIsContract = async () => {
      const result = await isContractAddress(address)
      setIsContract(result)
    }

    checkIsContract()
  }, [])

  return (
    <div className="flex items-center w-full h-full text-xs font-medium text-gray-400 dark:text-txt-primary bg-light-primary dark:bg-primary md:text-sm">
      {
        isContract && (
          <div className='mr-1'>
            <ToolTip toolTipText='Contract'>
              📄
            </ToolTip>
          </div>
        )
      }
      <Link href={`/address/${address}`}>
        {addressStr}
      </Link>
    </div>
  )
}
