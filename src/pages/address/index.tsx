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
    <div className="relative  w-full  mt-10  md:mt-16   px-6  xl:px-0"></div>
  )
}
