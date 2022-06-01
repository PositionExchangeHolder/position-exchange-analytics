import React from 'react'

type Props = {
  nftId: string | number
}

export const NotFoundNft: React.FC<Props> = ({ nftId }: Props) => {
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <div className="container flex flex-col justify-center items-center px-5 text-gray-500 md:flex-row">
        <div className="max-w-md">
          <div className="text-5xl font-bold">404</div>
          <p className="text-2xl font-light leading-normal md:text-3xl">
           Sorry we could not find NFT {nftId}
          </p>
        </div>
      </div>
    </div>
  )
}
