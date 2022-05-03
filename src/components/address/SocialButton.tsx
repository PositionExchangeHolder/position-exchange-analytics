import Image from 'next/image'
import React from 'react'

export default function SocialButton() {
  return (
    <div className="flex flex-row px-4 py-2 gap-x-4 mt-4">
      <div className="flex items-center bg-primary drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5      px-6 rounded-[30px] py-2">
        <Image
          src={'/twitter-logo.svg'}
          alt="logo"
          width={20}
          height={20}
          layout="fixed"
        />
        <div className="ml-2">add</div>
      </div>
      <div className="flex items-center bg-primary drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5      px-6 rounded-[30px] py-2">
        <Image
          src={'/github_logo.svg'}
          alt="logo"
          width={20}
          height={20}
          layout="fixed"
        />
        <div className="ml-2">add</div>
      </div>
      <div className="flex items-center bg-primary drop-shadow-[0_1px_2px_#1B2431] shadow-md ring-1 ring-white ring-opacity-5      px-6 rounded-[30px] py-2">
        <Image
          src={'/mail-logo.svg'}
          alt="logo"
          width={20}
          height={20}
          layout="fixed"
        />
        <div className="ml-2">add</div>
      </div>
    </div>
  )
}
