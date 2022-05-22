import React, { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Injected } from 'config/connected/InjectedConnect'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'

export default function Address() {
  const { account, activate } = useWeb3React()
  const router = useRouter()

  useEffect(() => {
    if (!isEmpty(account)) {
      router.push({
        pathname: `/address/${account}`,
      })
    }
  }, [account])

  const connectMetamask = () => {
    activate(Injected)
  }

  if (!account) {
    return (
      <div className="">
        <button
          onClick={connectMetamask}
          type="button"
          className="bg-cyan-700 p-2 rounded-md"
        >
          Connect Wallet
        </button>
      </div>
    )
  } else {
    return (
      <div className="relative px-6 mt-10 w-full md:mt-16 xl:px-0">

      </div>
    )
  }
}
