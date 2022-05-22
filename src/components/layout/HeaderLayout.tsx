/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { PopoverType, resources } from 'common/header/header.type'
import Link from 'next/link'
import { Fragment } from 'react'
import ButtonConnectMetamask from '../wallet/ButtonConnectMetamask'
import { navigations } from './config'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

type NavigationItemProps = {
  href: string,
  name: string,
  onClick?: any
}

const NavigationItem = ({ href, name, onClick }: NavigationItemProps) => {
  return (
    <div className="py-2 px-4 text-base font-medium text-txt-light-txt-primary dark:text-txt-primary hover:bg-light-primary-hv dark:hover:bg-mineShaft-30 rounded-md">
      <Link href={href}>
        <button onClick={onClick}>
          {name}
        </button>
      </Link>
    </div>
  )
}

export default function HeaderLayout() {
  return (
    <Popover className="flex relative items-center w-full h-16 bg-light-primary dark:bg-primary ring-1 ring-light-primary dark:ring-neutral-900 shadow-md drop-shadow-[0_1px_2px_neutral]">
      <div className="flex px-4 mx-auto w-full max-w-7xl sm:px-6">
        <div className="flex w-full">
          <div className="flex justify-between items-center py-2 w-full md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-12  ">
              <Link href="/">
                <img
                  className="w-auto h-8 sm:h-10"
                  src="/vectary.svg"
                  alt="Home Page"
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-txt-primary bg-white hover:bg-gray-100 dark:bg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              {
                navigations.map(nav => (
                  <NavigationItem
                    key={nav.href}
                    href={nav.href}
                    name={nav.name}
                  />
                ))
              }

              <Popover className="relative">
                {({ open, close }: PopoverType) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open && 'bg-secondary ',
                        'group bg-white dark:bg-primary rounded-md inline-flex items-center text-base font-medium dark:hover:bg-mineShaft-30 hover:bg-light-primary-hv px-4 py-2 focus:outline-none text-txt-light-txt-primary dark:text-txt-primary'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames('ml-2 h-5 w-5 ')}
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
                      <Popover.Panel className="absolute left-1/2 z-10 px-2 mt-3 w-screen max-w-md -translate-x-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg ring-1 ring-white/5 shadow-md drop-shadow-[0_1px_2px_#F1F1F1] dark:drop-shadow-[0_1px_2px_#1B2431]">
                          <div className="grid relative gap-6 py-6 px-5 bg-white dark:bg-primary sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <Link href={item.href} key={item.name}>
                                <a
                                  className="flex items-start p-3 -m-3 hover:bg-light-primary-hv dark:hover:bg-mineShaft-30 rounded-lg"
                                  onClick={close}
                                >
                                  <item.icon
                                    className="shrink-0 w-6 h-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-txt-light-txt-primary dark:text-txt-primary">
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
          {/* <div className="hidden lg:w-full  md:flex flex-row justify-end items-center  ">
            <div className="w-8 h-8">
              <ChangeThemes />
            </div>
          </div> */}
          <div className="hidden flex-row justify-end items-center md:flex lg:w-full">
            <ButtonConnectMetamask />
          </div>
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
          className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right md:hidden"
        >
          {({ close }: PopoverType) => (
            <div className="bg-white dark:bg-primary rounded-lg divide-y dark:divide-mineShaft ring-1 ring-white/5  shadow-md drop-shadow-[0_1px_2px_#F1F1F1] dark:drop-shadow-[0_1px_2px_#1B2431]">
              <div className="pt-5 pb-6">
                <div className="flex justify-between items-center px-5">
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="/vectary.svg"
                    alt=""
                  />

                  <div className="-mr-2">
                    <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-txt-primary bg-white hover:bg-gray-100 dark:bg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {/* <div className="px-5 w-full rounded-sm mt-4 bg-white dark:bg-primary dark:drop-shadow-[0_1px_1px_#1B2431] drop-shadow-[0_1px_2px_#F1F1F1] py-4 ring-1 ring-neutral-300">
                  <div className="w-6 h-6">
                    <ChangeThemes />
                  </div>
                </div> */}

                <div className="py-4 px-5 mt-4 w-full bg-white dark:bg-primary rounded-sm ring-1 ring-neutral-300  drop-shadow-[0_1px_2px_#F1F1F1] dark:drop-shadow-[0_1px_1px_#1B2431]">
                  <ButtonConnectMetamask />
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {
                    navigations.map(nav => (
                      <NavigationItem
                        key={nav.href}
                        onClick={close}
                        href={nav.href}
                        name={nav.name}
                      />
                    ))
                  }
                  
                  {resources.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={close}
                        className="py-2 px-4 text-base font-medium text-txt-light-txt-primary dark:text-txt-primary hover:bg-mineShaft-30 active:bg-mineShaft-30 rounded-md"
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
