/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { nft, PopoverType, resources } from 'common/header/header.type'
import Link from 'next/link'
import { Fragment } from 'react'
import ButtonConnectMetamask from '../wallet/ButtonConnectMetamask'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderLayout() {
  return (
    <Popover className="flex  items-center relative bg-light-primary dark:bg-primary w-full h-16  shadow-md ring-1 ring-light-primary ring-opacity-5 drop-shadow-[0_1px_2px_neutral] dark:ring-neutral-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex w-full">
        <div className="flex w-full">
          <div className="flex justify-between items-center  py-2 md:justify-start md:space-x-10 w-full">
            <div className="flex justify-start lg:w-12  ">
              <a href="#">
                <span className="sr-only">Workflow</span>

                <img className="h-8 w-auto sm:h-10" src="/vectary.svg" alt="" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white dark:bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-txt-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10 ">
              <Popover className="relative">
                {({ open, close }: PopoverType) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open && 'bg-secondary ',
                        'group bg-white dark:bg-primary rounded-md inline-flex items-center text-base font-medium dark:hover:bg-mineShaft-30 hover:bg-light-primary-hv px-4 py-2 focus:outline-none   text-txt-light-txt-primary dark:text-txt-primary '
                      )}
                    >
                      <span>NFT</span>
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
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-28 lg:left-1/2 lg:-translate-x-1/2 ">
                        <div className="rounded-lg dark:drop-shadow-[0_1px_2px_#1B2431] drop-shadow-[0_1px_2px_#F1F1F1] shadow-md ring-1 ring-white ring-opacity-5 overflow-hidden   ">
                          <div className="relative grid gap-6 bg-white dark:bg-primary px-5 py-6 sm:gap-8 sm:p-8">
                            {nft.map((item) => (
                              <Link href={item.href} key={item.name}>
                                <a
                                  onClick={close}
                                  className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-mineShaft-30 hover:bg-light-primary-hv "
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
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

              <Link href={'/token'}>
                <a className="text-base font-medium text-txt-light-txt-primary dark:text-txt-primary dark:hover:bg-mineShaft-30 hover:bg-light-primary-hv px-4 py-2 rounded-md">
                  Token
                </a>
              </Link>

              <Link href={'/address'}>
                <a className="text-base font-medium text-txt-light-txt-primary dark:text-txt-primary dark:hover:bg-mineShaft-30 hover:bg-light-primary-hv px-4 py-2 rounded-md">
                  Address
                </a>
              </Link>
              <Link href={'/referral'}>
                <a className="text-base font-medium text-txt-light-txt-primary dark:text-txt-primary dark:hover:bg-mineShaft-30 hover:bg-light-primary-hv px-4 py-2 rounded-md">
                  Referral
                </a>
              </Link>
              <Popover className="relative">
                {({ open, close }: PopoverType) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open && 'bg-secondary ',
                        'group bg-white dark:bg-primary rounded-md inline-flex items-center text-base font-medium  dark:hover:bg-mineShaft-30 hover:bg-light-primary-hv  px-4 py-2 focus:outline-none   text-txt-light-txt-primary dark:text-txt-primary '
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
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 ">
                        <div className="rounded-lg dark:drop-shadow-[0_1px_2px_#1B2431] drop-shadow-[0_1px_2px_#F1F1F1] shadow-md ring-1 ring-white ring-opacity-5 overflow-hidden   ">
                          <div className="relative grid gap-6 bg-white dark:bg-primary px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <Link href={item.href} key={item.name}>
                                <a
                                  className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-mineShaft-30 hover:bg-light-primary-hv"
                                  onClick={close}
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
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
          <div className="hidden lg:w-full  md:flex flex-row justify-end items-center  ">
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          {({ close }: PopoverType) => (
            <div className="rounded-lg bg-white dark:bg-primary divide-y dark:divide-mineShaft dark:drop-shadow-[0_1px_2px_#1B2431] drop-shadow-[0_1px_2px_#F1F1F1] shadow-md ring-1 ring-white ring-opacity-5 ">
              <div className="pt-5 pb-6">
                <div className="flex items-center justify-between  px-5">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/vectary.svg"
                    alt=""
                  />

                  <div className="-mr-2">
                    <Popover.Button className="bg-white dark:bg-primary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-txt-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {/* <div className="px-5 w-full rounded-sm mt-4 bg-white dark:bg-primary  dark:drop-shadow-[0_1px_1px_#1B2431] drop-shadow-[0_1px_2px_#F1F1F1] py-4 ring-1 ring-neutral-300 ring-opacity-5">
                  <div className="w-6 h-6">
                    <ChangeThemes />
                  </div>
                </div> */}

                <div className="px-5 w-full rounded-sm mt-4 bg-white dark:bg-primary  dark:drop-shadow-[0_1px_1px_#1B2431] drop-shadow-[0_1px_2px_#F1F1F1] py-4 ring-1 ring-neutral-300 ring-opacity-5">
                  <ButtonConnectMetamask />
                </div>
                <div className="mt-6  px-5">
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
                          <span className="ml-3 text-base font-medium text-txt-light-txt-primary dark:text-txt-primary">
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
                      className="text-base font-medium text-txt-light-txt-primary dark:text-txt-primary rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30 px-4 py-2 "
                    >
                      Token
                    </a>
                  </Link>

                  <Link href="/address">
                    <a
                      onClick={close}
                      className="text-base font-medium text-txt-light-txt-primary dark:text-txt-primary rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30 px-4 py-2 "
                    >
                      Address
                    </a>
                  </Link>

                  <Link href="/referral">
                    <a
                      onClick={close}
                      className="text-base font-medium text-txt-light-txt-primary dark:text-txt-primary rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30 px-4 py-2 "
                    >
                      Referral
                    </a>
                  </Link>
                  {resources.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={close}
                        className="text-base font-medium text-txt-light-txt-primary dark:text-txt-primary rounded-md hover:bg-mineShaft-30  active:bg-mineShaft-30 px-4 py-2 "
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
