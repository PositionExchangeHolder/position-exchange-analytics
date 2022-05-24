/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useWeb3React } from '@web3-react/core'
import { Injected } from 'config/connected/InjectedConnect'
import React, { Fragment, useCallback } from 'react'
import { IconCoinbase, IconMetamask, IconWalletConnect } from './IconWallet'

export default function ButtonConnectMetamask() {
  const { active, activate, deactivate, account } = useWeb3React()

  const onConnectMetaMaskWallet = useCallback(async () => {
    await setTimeout(() => {
      activate(Injected)
    }, 50)
  }, [])

  const buttonsConnectWallet = [
    {
      name: 'MetaMask',
      icon: IconMetamask,
      action: onConnectMetaMaskWallet,
    },
    {
      name: 'WalletConnect',
      icon: IconWalletConnect,
      action: onConnectMetaMaskWallet,
    },
    {
      name: 'Coinbase Wallet',
      icon: IconCoinbase,
      action: onConnectMetaMaskWallet,
    },
  ]

  return (
    <div>
      <Popover className="relative ">
        {({ open, close }) => (
          <>
            {active ? (
              <button
                onClick={deactivate}
                className={`
                ${open ? '' : 'text-opacity-90'}
                  w-52 md:w-44 lg:w-56 xl:w-full  md:bg-red-200 text-gray-900 bg-primary hover:bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 `}
              >
                <span className="mr-2 text-xs  truncate ">{account}</span>
                <ChevronDownIcon
                  className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </button>
            ) : (
              <Popover.Button
                className={`
                ${open ? '' : 'text-opacity-90'}
                  text-gray-900 bg-primary hover:bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 `}
              >
                <span className="mr-2 text-xs">Connect Wallet</span>
                <ChevronDownIcon
                  className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
            )}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 px-4 mt-3 w-full max-w-sm  sm:px-0 md:-left-[20%] md:w-screen  md:-translate-x-1/2">
                <div className="overflow-hidden rounded-lg ring-1 ring-white/5  shadow-md  drop-shadow-[0_1px_2px_#1B2431]   ">
                  <div className="relative  gap-8 p-7 bg-primary ">
                    {buttonsConnectWallet.map((item) => {
                      const onClickBtnWallet = () => {
                        item.action(), close()
                      }
                      return (
                        <button
                          onClick={onClickBtnWallet}
                          type="button"
                          key={item.name}
                          className="flex items-center p-2 -m-3 w-full hover:bg-mineShaft-30 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500  transition duration-150 ease-in-out"
                        >
                          <div className="flex shrink-0 justify-center items-center w-10 h-10 text-white sm:w-12 sm:h-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-txt-primary">
                              {item.name}
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
