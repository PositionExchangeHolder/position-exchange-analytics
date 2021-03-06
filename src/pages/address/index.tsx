import React, { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Injected } from 'config/connected/InjectedConnect'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import HeadSEO from '@/components/layout/HeadSEO'

const ConnectMetamaskButton = () => {
  const { activate } = useWeb3React()

  const connectMetamask = () => {
    activate(Injected)
  }

  return (
    <button
      onClick={connectMetamask}
      type="button"
      className="p-3 bg-cyan-700 rounded-md"
    >
      Connect Wallet
    </button>
  )
}

export default function AddressPage() {
  const { account } = useWeb3React()
  const router = useRouter()

  useEffect(() => {
    if (!isEmpty(account)) {
      router.push({
        pathname: `/address/${account}`,
      })
    }
  }, [account])

  if (!account) {
    return (
      <>
        <HeadSEO
          title='Position Address'
          description='Position Address'
        />
        <div className="flex justify-center px-6 mt-8 ">
          <ConnectMetamaskButton />
        </div>
      </>
    )
  } else {
    return <div className="relative px-6 mt-6 w-full md:mt-16 xl:px-0"></div>
  }
}
