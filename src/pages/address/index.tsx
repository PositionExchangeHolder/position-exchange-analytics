import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56],
})
export default function Address() {
  const { active, account, activate, deactivate } = useWeb3React()
  const router = useRouter()
  const autoConnectMetamask = async () => {
    if (active) {
    } else {
      await setTimeout(() => {
        activate(Injected)
      }, 50)
    }
  }
  useEffect(() => {
    autoConnectMetamask()
  }, [active])

  useEffect(() => {
    // if (!isEmpty(account)) {
    //   router.push({
    //     pathname: `/address/${account}`,
    //   })
    // }
  }, [account])

  return (
    <div className="relative  w-full  mt-10  md:mt-16   px-6  xl:px-0">
      {/* <div>
        <button
          onClick={() => {
            activate(Injected)
          }}
          type="button"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-2 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
          <span className="mr-2">Connect MetaMask</span>
          <Image
            src="/icon_metamask.svg"
            alt="icon_metamask"
            width={30}
            height={30}
            layout="fixed"
          />
        </button>
      </div> */}
    </div>
  )
}
