import Link from 'next/link'
import { BSC_SCAN_URL } from 'utils/constants'
import { hashFormatter } from 'utils/string'

export enum BscscanType {
  TX_HASH,
  ADDRESS,
  TOKEN,
}

export function BscscanLinkButton(props: { hash: string; type: BscscanType }) {
  const { hash, type } = props
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
        {hashFormatter(hash)}
      </a>
    </Link>
  )
}
