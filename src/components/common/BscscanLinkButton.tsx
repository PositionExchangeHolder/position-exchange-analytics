import { checkIsAddress } from 'utils/address'
import { BSC_SCAN_URL } from 'utils/constants'

export function BscscanLinkButton(props: { hash: string }) {
  const { hash } = props
  const endpoint = checkIsAddress(hash) ? `address/${hash}` : `tx/${hash}`

  return (
    <a href={`${BSC_SCAN_URL}/${endpoint}`} target="_blank" rel="noreferrer">
      {props.hash}
    </a>
  )
}
