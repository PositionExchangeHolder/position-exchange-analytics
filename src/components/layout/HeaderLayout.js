import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'TOKEN', href: '/token', current: true },
  { name: 'YIELD', href: '/yield', current: false },
  { name: 'NFT', href: '/nft', current: false },
  { name: 'NFT MARKETPLACE', href: '/nft-marketplace', current: false },
  { name: 'COMPETITION', href: '/competition', current: false },
  { name: 'REFERRAL', href: '/referral', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderLayout() {
  const [currentMenu, setCurrentMenu] = useState()
  const router = useRouter()
  const currentPath = router.route.split('/')[1]
  useEffect(() => {
    switch (currentPath) {
      case 'token':
        setCurrentMenu(0)
        break

      case 'yield':
        setCurrentMenu(1)
        break

      case 'nft':
        setCurrentMenu(2)
        break

      case 'nft-marketplace':
        setCurrentMenu(3)
        break

      case 'competition':
        setCurrentMenu(4)
        break
      case 'referral':
        setCurrentMenu(5)
        break
      default:
        setCurrentMenu(0)
        break
    }
  }, [])

  return (
    <div className=" bg-primary flex flex-row items-center px-24 border-b border-charade py-2">
      <div className="flex-row flex items-center">
        <Image src="/logo.svg" alt="logo" width={50} height={55} />
        <p className="font-bold text-2xl text-txt-primary mx-4 mr-10">
          MATERIO
        </p>
      </div>
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4">
          {navigation.map((item, index) => (
            <Link href={item.href} key={item.name}>
              <a
                onClick={() => setCurrentMenu(index)}
                key={item.name}
                className={classNames(
                  index === currentMenu
                    ? 'bg-secondary text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md  font-medium text-sm'
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
  )
}
