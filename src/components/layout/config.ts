
type NavigationItem = {
  name: string
  href: string
  disable?: boolean
}

export const navigations: NavigationItem[] = [
  {
    name: 'NFT',
    href: '/nft'
  },
  {
    name: 'Token',
    href: '/token',
    disable: true
  },
  {
    name: 'Referral',
    href: '/referral'
  },
  {
    name: 'Bond',
    href: '/bond',
    disable: true
  },
  {
    name: 'Vault',
    href: 'vault'
  },
  {
    name: 'Address',
    href: '/address'
  }
]
