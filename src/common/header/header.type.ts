import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
export const nft = [
  {
    name: 'NFT',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/nft',
    icon: CursorClickIcon,
  },
  {
    name: 'NFT Marketplace',
    description: "Connect with third-party tools that you're already using.",
    href: '/nft-marketplace',
    icon: ViewGridIcon,
  },
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
]

export const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]

export type PopoverType = {
  open?: boolean
  close?: () => void
}
