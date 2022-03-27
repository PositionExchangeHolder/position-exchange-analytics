import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

const nft = [
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

const resources = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-primary w-full border-b-2 border-mineShaft h-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-12  ">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Image
                src="/logo.svg"
                alt="logo"
                width={40}
                height={45}
                priority={true}
              />
              {/* <img className="h-8 w-auto sm:h-10" src="/logo.svg" alt="" /> */}
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-txt-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10 ">
            <Popover className="relative">
              {({ open, close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open && 'bg-secondary ',
                      'group bg-primary rounded-md inline-flex items-center text-base font-medium hover:bg-secondary px-2 py-1 focus:outline-none   text-txt-primary '
                    )}
                  >
                    <span>NFT</span>
                    <ChevronDownIcon
                      className={classNames(
                        open && 'bg-secondary text-opacity-70 ',
                        'ml-2 h-5 w-5 group-hover:text-txt-primary'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-28 lg:left-1/2 lg:-translate-x-1/2 ">
                      <div className="rounded-lg drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5 overflow-hidden   ">
                        <div className="relative grid gap-6 bg-primary px-5 py-6 sm:gap-8 sm:p-8">
                          {nft.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <a
                                onClick={close}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-mineShaft-30"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-txt-primary">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-txt-secondary">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href={'/token'}>
              <a className="text-base font-medium text-txt-primary hover:bg-secondary px-2 py-1 rounded-md">
                Token
              </a>
            </Link>

            <Link href={'/yield'}>
              <a className="text-base font-medium text-txt-primary hover:bg-secondary px-2 py-1 rounded-md">
                Yeild
              </a>
            </Link>
            <Link href={'/referral'}>
              <a className="text-base font-medium text-txt-primary hover:bg-secondary px-2 py-1 rounded-md">
                Referral
              </a>
            </Link>
            <Popover className="relative">
              {({ open, close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open && 'bg-secondary ',
                      'group bg-primary rounded-md inline-flex items-center text-base font-medium hover:bg-secondary px-2 py-1 focus:outline-none   text-txt-primary '
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open && 'bg-secondary text-opacity-70 ',
                        'ml-2 h-5 w-5 group-hover:text-txt-primary'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 ">
                      <div className="rounded-lg drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5 overflow-hidden   ">
                        <div className="relative grid gap-6 bg-primary px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <a
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-mineShaft-30"
                                onClick={close}
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-txt-primary">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-txt-secondary">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          {({ open, close }) => (
            <div className="rounded-lg  bg-primary divide-y-2 divide-mineShaft drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5 ">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      width={40}
                      height={45}
                      priority={true}
                    />
                  </div>

                  <div className="-mr-2">
                    <Popover.Button className="bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-txt-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {nft.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          onClick={close}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30  "
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-txt-primary">
                            {item.name}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="/token">
                    <a
                      onClick={close}
                      className="text-base font-medium text-txt-primary rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30 px-2 py-1 "
                    >
                      Token
                    </a>
                  </Link>

                  <Link href="/yield">
                    <a
                      onClick={close}
                      className="text-base font-medium text-txt-primary rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30 px-2 py-1 "
                    >
                      Yeild
                    </a>
                  </Link>

                  <Link href="/referral">
                    <a
                      onClick={close}
                      className="text-base font-medium text-txt-primary rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30 px-2 py-1 "
                    >
                      Referral
                    </a>
                  </Link>
                  {resources.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={close}
                        className="text-base font-medium text-txt-primary rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30 px-2 py-1 "
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
