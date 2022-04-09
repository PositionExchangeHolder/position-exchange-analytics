import Link from 'next/link'
import { getAddressLabel } from 'utils/address'
import { BSC_SCAN_URL } from 'utils/constants'

export enum BscscanType {
  TX_HASH,
  ADDRESS,
  TOKEN,
}

type Props = {
  hash: string
  type: BscscanType
}

export function BscscanLinkButton({ hash, type }: Props) {
  console.log('hash', hash)
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
    <div className="font-medium  text-xs md:text-sm dark:text-txt-primary text-gray-400 bg-light-primary dark:bg-primary flex items-center w-full h-full">
      <Link href={`${BSC_SCAN_URL}/${endpoint}`}>
        <a target="_blank" rel="noreferrer" className="line-clamp-1 ">
          {type === BscscanType.ADDRESS ? getAddressLabel(hash) || hash : hash}
        </a>
      </Link>
    </div>
  )
}
