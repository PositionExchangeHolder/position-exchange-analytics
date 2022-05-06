import { StakingPoolBalances } from 'api/address/address.api.type'
import React from 'react'

export default function StakingListItem({
  stakingPoolBalances,
}: {
  stakingPoolBalances: StakingPoolBalances | undefined
}) {
  return (
    <div className="mt-12 flex flex-col bg-secondary m-auto p-auto rounded-md">
      <div className="flex overflow-x-scroll py-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-20 md:ml-10  ">
          {stakingPoolBalances?.map((item) => {
            return (
              <div key={item?.pid} className="inline-block px-3">
                <div className=" justify-center items-center flex flex-col border rounded-md bg-secondary  border-waterloo w-64 h-64 max-w-xs overflow-hidden  shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <p className="  lg:text-xl text-lg dark:text-txt-primary text-txt-light-secondary text-center  ">
                    {item?.name}
                  </p>
                  <p className="mt-4 font-medium text-sm lg:text-lg dark:text-txt-primary text-txt-light-txt-primary text-center">
                    Staked: {item.stakingBalance}
                  </p>
                  <p className=" mt-2 font-medium text-sm lg:text-lg dark:text-txt-primary text-txt-light-txt-primary text-center">
                    Earend: {item.stakingBalance}
                  </p>
                  <div className=" gap-x-2 mt-4 flex justify-center">
                    <button
                      type="button"
                      className="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    >
                      UnStake
                    </button>

                    <button
                      type="button"
                      className="text-white bg-emerald-800 hover:bg-emerald-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    >
                      Harvest
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
