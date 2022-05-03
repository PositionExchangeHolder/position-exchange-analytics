import SocialButton from '@/components/address/SocialButton'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { hashFormatter } from 'utils/string'

export default function Account() {
  const router = useRouter()

  const account: string = (router?.query?.account as string) || ''
  return (
    <main className="relative bg-light-primary dark:bg-primary w-full  mt-10  md:mt-16   px-6  xl:px-0">
      <div className="flex justify-center">
        <div className="flex flex-col  items-center">
          <div className=" rounded-full bg-primary-1 w-32 h-32 flex items-center justify-center drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5">
            <Image
              alt="avatar"
              width={52}
              height={52}
              className="rounded-full float-left h-full"
              src="/user.svg"
            />
          </div>
          <span className="mt-6 text-2xl">Kate Horwitz</span>
          <div className="bg-primary drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5  mt-3    px-4 rounded-[30px] py-2">
            <span className=" text-sm  ">{hashFormatter(account, true)}</span>
          </div>
          <SocialButton />
        </div>
      </div>
    </main>
  )
}
