import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { getNftGradeImageUrl } from 'helper/nft/getNftImageUrl'
import { isEmpty } from 'lodash'
import Image from 'next/image'
import { getNftsOfAddress } from 'api/nft/nft.api'

const PER_PAGE = 6

type Props = {
  address: string
}

export default function NftListItem({ address }: Props) {
  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: 'white',
      },
    },
  }))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentPages, setCurrentPages] = useState<number>(1)
  const [nftList, setNftList] = useState<any>([])
  
  const handleChange = (e: any, p: number) => {
    setCurrentPages(p)
  }
  const classes = useStyles()
  const count = Math.ceil(totalPage / PER_PAGE)

  useEffect(() => {
    if (address) {
      getNfts()
    }
  }, [address, currentPages])

  const getNfts = async () => {
    try {
      if (isLoading) {
        return
      }
      setIsLoading(true)
  
      const nftList = await getNftsOfAddress(
        address.toLowerCase(),
        (currentPages - 1) * PER_PAGE
      )
      setNftList(nftList)
      setTotalPage(nftList.totalNfts)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  console.log(nftList)

  return (
    <div className="flex flex-col m-auto mt-12 bg-secondary rounded-md">
      <div className="flex pt-10 pb-6 scrollbar-hide">
        <div className="grid grid-cols-2 gap-3 px-3 w-full md:grid-cols-4 md:gap-0 md:gap-x-6 md:px-12">
          {nftList.nft && nftList.nft.map((nft: any) => {
            return (
              <div key={nft} className="grid-rows-1 md:grid-cols-1">
                <div className="flex overflow-hidden flex-col justify-center items-center max-w-xs h-56 bg-secondary rounded-md border border-waterloo shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out md:h-64">
                  <Image
                    src={getNftGradeImageUrl(nft.grade)}
                    alt="logo"
                    width={120}
                    height={150}
                    layout="fixed"
                  />
                  <p className="mt-4 text-xs dark:font-medium text-txt-light-txt-primary dark:text-txt-white md:text-base">
                    {nft.id}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mb-6">
        <Pagination
          disabled={isEmpty(nftList)}
          classes={{ ul: classes.ul }}
          color="primary"
          count={count}
          size="large"
          page={currentPages}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
