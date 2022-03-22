import Image from 'next/image'
import React from 'react'
import Transaction from '../components/Transaction'

export default function index() {
  return (
    <main className="pt-12  w-full">
      <div className="flex flex-row">
        <div className="border-charade border  rounded-md bg-secondary  h-400 w-400  px-6  flex justify-center items-center">
          <Image
            src="/fake_nft.png"
            alt="logo"
            width={300}
            height={300}
            layout="fixed"
          />
        </div>
        <div className="ml-12 pt-10">
          <p className="text-txt-primary font-medium text-sm ">
            ID:100300483357
          </p>
          <p className="text-txt-primary font-medium text-sm mt-8">
            NFT Atributes: grade, quality, owner, totalTxs NFT Atributes: grade,
            quality, owner, totalTxs ...
          </p>
          <p className="text-txt-primary font-medium text-sm mt-12">
            State: Staking, Burn,....
          </p>
          <p className="text-txt-primary font-medium text-sm mt-10">
            @SoftSkillNFT
          </p>
        </div>
      </div>
      <div className="mt-16">
        <Transaction transactions={[]} titleTable={'Transaction'} />
      </div>
    </main>
  )
}
