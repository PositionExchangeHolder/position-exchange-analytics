import Link from 'next/link'
import { getAddressLabel } from 'utils/address';
import { BSC_SCAN_URL } from 'utils/constants'
import { hashFormatter } from 'utils/string'

export enum BscscanType {
  TX_HASH,
  ADDRESS,
  TOKEN,
}

type Props = {
  hash: string,
  type: BscscanType
}

export function BscscanLinkButton({ hash, type }: Props) {
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
    <Link href={`${BSC_SCAN_URL}/${endpoint}`}>
      <a target="_blank" rel="noreferrer">
        {
          type === BscscanType.ADDRESS
            ? getAddressLabel(hash) || hashFormatter(hash)
            : hashFormatter(hash)
        }
      </a>
    </Link>
  )
}
