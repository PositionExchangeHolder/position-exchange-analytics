import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Token', href: '/token', current: true },
  { name: 'Yield', href: '/yield', current: false },
  { name: 'NFT', href: '/nft', current: false },
  { name: 'NFT Marketplace', href: '/nft-marketplace', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderLayout({ children }) {
  const [currentMenu, setCurrentMenu] = useState(0)

  return (
    <div className=" bg-primary h-screen w-screen  ">
      <div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            {navigation.map((item, index) => (
              <Link href={item.href} key={item.name}>
                <a
                  onClick={() => setCurrentMenu(index)}
                  key={item.name}
                  className={classNames(
                    index === currentMenu
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
