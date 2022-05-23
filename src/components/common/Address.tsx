import Link from 'next/link'
import { getAddressLabel } from 'utils/address'
import { hashFormatter } from 'utils/string'

type Props = {
  address: string
  shortLink?: boolean
}

export const Address = ({ address, shortLink = true }: Props) => {
  const addressStr = getAddressLabel(address)
    || hashFormatter(address, shortLink)

  return (
    <div className="flex items-center w-full h-full text-xs font-medium text-gray-400 dark:text-txt-primary bg-light-primary dark:bg-primary md:text-sm">
      <Link href={`/address/${address}`}>
        {addressStr}
      </Link>
    </div>
  )
}
