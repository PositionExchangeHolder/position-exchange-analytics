import { useRouter } from 'next/router'
import React from 'react'

export default function Account() {
  const router = useRouter()

  const account: string = (router?.query?.account as string) || ''
  console.log('router', account)

  return <div>accountA</div>
}
