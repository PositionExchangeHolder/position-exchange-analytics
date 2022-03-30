/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'

export default function NftDetail() {
  const router = useRouter()

  const nftId: string = (router?.query?.nft_id as string) || ''
  console.log('nftId', nftId)

  return (
    <div>
      <section>
        <div className="max-w-screen-xl py-16 mx-auto ">
          <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2 xl:grid-cols-3 lg:gap-12 ">
            <div className="relative h-96 rounded-lg  ">
              <img
                className="absolute inset-0 object-contain w-full h-full"
                src="/grade1.png"
                alt="Man using a computer"
              />
            </div>
            <div className="xl:col-span-2 px-6">
              <h2 className="text-lg font-bold sm:text-2xl text-txt-primary">
                Token ID: {nftId}
              </h2>
              <p className="mt-8 text-txt-secondary   sm:text-xl ">
                NFT Atributes: grade, quality, owner, totalTxs...
              </p>
              <p className="mt-6 text-txt-secondary">
                State: Staking, Burn,....
              </p>
              <p className="mt-6 text-txt-secondary">@SoftSkillNFT</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
