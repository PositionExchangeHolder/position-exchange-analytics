import { useWeb3React } from '@web3-react/core'
import { Injected } from 'config/connected/InjectedConnect'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Address() {
  const { active, account, activate } = useWeb3React()
  const router = useRouter()
  const autoConnectMetamask = async () => {
    await setTimeout(() => {
      activate(Injected)
    }, 250)
  }
  useEffect(() => {
    console.log('active', active)
    if (!active) {
      autoConnectMetamask()
    }
  }, [active])

  useEffect(() => {
    if (!isEmpty(account)) {
      router.push({
        pathname: `/address/${account}`,
      })
    }
  }, [account])

  return (
    <div className="relative  px-6  mt-10  w-full   md:mt-16  xl:px-0"></div>
  )
}