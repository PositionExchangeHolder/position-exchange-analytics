import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { StakingPoolBalances } from 'api/address/address.api.type'
import { getNftGradeImageUrl } from 'helper/nft/getNftImageUrl'
import { isEmpty } from 'lodash'
import Image from 'next/image'
import React, { useState } from 'react'
const PER_PAGE = 6

export default function NftListItem({
  stakingPoolBalances,
}: {
  stakingPoolBalances: StakingPoolBalances | undefined
}) {
  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: 'white',
      },
    },
  }))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentPages, setCurrentPages] = useState<number>(1)
  const handleChange = (e: any, p: number) => {
    setCurrentPages(p)
  }
  const classes = useStyles()
  const count = Math.ceil(totalPage / PER_PAGE)

  return (
    <div className="flex flex-col m-auto mt-12 bg-secondary rounded-md ">
      <div className="flex pt-10 pb-6 scrollbar-hide ">
        <div className="grid grid-cols-2 gap-3 px-3 w-full  md:grid-cols-4  md:gap-0 md:gap-x-6  md:px-12 ">
          {stakingPoolBalances?.slice(0, 4).map((item, index) => {
            return (
              <div key={item?.pid} className="grid-rows-1  md:grid-cols-1 ">
                <div className=" flex overflow-hidden flex-col justify-center items-center max-w-xs  h-56 bg-secondary rounded-md border border-waterloo shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out md:h-64">
                  <Image
                    src={getNftGradeImageUrl(index + 1)}
                    alt="logo"
                    width={120}
                    height={150}
                    layout="fixed"
                  />
                  <p className="mt-4 text-xs dark:font-medium text-txt-light-txt-primary dark:text-txt-white md:text-base  ">
                    id: 1088351
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mb-6 ">
        <Pagination
          disabled={isEmpty(stakingPoolBalances)}
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
