import Link from 'next/link'
import { getAddressLabel } from 'utils/address'
import { BSC_SCAN_URL } from 'utils/constants'
import { hashFormatter } from 'utils/string'

export enum BscscanType {
  TX_HASH,
  ADDRESS,
  TOKEN,
}

type Props = {
  hash: string
  type: BscscanType
  shortLink?: boolean
  isContractAddress?: boolean
}

export function BscscanLinkButton({
  hash,
  type,
  shortLink = true,
  isContractAddress = false,
}: Props) {
  let endpoint
  switch (type) {
    case BscscanType.TX_HASH:
      endpoint = `tx/${hash}`
      break
    case BscscanType.ADDRESS:
      endpoint = `address/${hash}`
      break
    case BscscanType.TOKEN:
      endpoint = `token/${hash}`
      break
    default:
      break
  }
  return (
    <div className="flex items-center w-full h-full text-xs font-medium text-gray-400 dark:text-txt-primary bg-light-primary dark:bg-primary md:text-sm">
      <Link href={`${BSC_SCAN_URL}/${endpoint}`}>
        <a target="_blank" rel="noreferrer" className="line-clamp-1">
          {isContractAddress && '📄 '}
          {type === BscscanType.ADDRESS
            ? getAddressLabel(hash) || hashFormatter(hash, shortLink)
            : hashFormatter(hash, shortLink)}
        </a>
      </Link>
    </div>
  )
}
