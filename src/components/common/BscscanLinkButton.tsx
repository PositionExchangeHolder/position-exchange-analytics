import Link from 'next/link'
import { checkIsAddress } from 'utils/address'
import { BSC_SCAN_URL } from 'utils/constants'

export function BscscanLinkButton(props: { hash: string }) {
  const { hash } = props
  const endpoint = checkIsAddress(hash) ? `address/${hash}` : `tx/${hash}`

  return (
    <Link href={`${BSC_SCAN_URL}/${endpoint}`}>
      <a target="_blank" rel="noreferrer">
        {props.hash}
      </a>
    </Link>
  )
}
