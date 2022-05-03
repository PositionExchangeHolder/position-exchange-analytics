import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56],
})
export default function Address() {
  const { active, account, activate } = useWeb3React()
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
    if (!isEmpty(account)) {
      router.push({
        pathname: `/address/${account}`,
      })
    }
  }, [account])

  return (
    <div className="relative  w-full  mt-10  md:mt-16   px-6  xl:px-0"></div>
  )
}
