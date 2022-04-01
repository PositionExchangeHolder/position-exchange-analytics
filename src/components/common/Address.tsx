import Link from 'next/link'
import { getAddressLabel } from 'utils/address'

type Props = {
  address: string
}

export function Address({ address }: Props) {
  const label = getAddressLabel(address)
  
  return (
    <Link href={`/address/${address}`}>
      <a>
        {label || address}
      </a>
    </Link>
  )
}
