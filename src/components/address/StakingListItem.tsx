import {
  NftPoolBalance,
  StakingPoolBalances,
} from 'api/address/address.api.type'
import React from 'react'
import { convertBigNumberToNumber } from 'utils/number'
import { isValidStakingPool } from 'utils/pool'

type StakingItemProps = {
  id: string | number
  name: string
  stakingBalance: string
  pendingReward: string
}

const StakingItem = ({
  id,
  name,
  stakingBalance,
  pendingReward,
}: StakingItemProps) => {
  return (
    <div key={id} className="inline-block px-3">
      <div className="flex overflow-hidden flex-col justify-center items-center w-64 max-w-xs h-64 bg-secondary rounded-md border border-waterloo shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <p className="text-lg text-center text-txt-light-secondary dark:text-txt-primary lg:text-xl">
          {name}
        </p>
        <p className="mt-4 text-sm font-medium text-center text-txt-light-txt-primary dark:text-txt-primary lg:text-lg">
          Staked: {convertBigNumberToNumber(stakingBalance, 4)}
        </p>
        <p className="mt-2 text-sm font-medium text-center text-txt-light-txt-primary dark:text-txt-primary lg:text-lg">
          Earned: {convertBigNumberToNumber(pendingReward, 4)}
        </p>
        <div className=" flex gap-x-2 justify-center mt-4">
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg"
          >
            Unstake
          </button>

          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg"
          >
            Harvest
          </button>
        </div>
      </div>
    </div>
  )
}

type StakingListItemProps = {
  stakingPoolBalances: StakingPoolBalances | undefined
  nftPoolBalance: NftPoolBalance | undefined
}

export default function StakingListItem({
  stakingPoolBalances,
  nftPoolBalance,
}: StakingListItemProps) {
  return (
    <div className="flex flex-col m-auto mt-12 bg-secondary rounded-md">
      <p className="pt-3 pb-2 pl-6 text-sm font-medium text-txt-light-txt-primary dark:text-txt-primary lg:text-base uppercase">
        Staking Pools
      </p>
      <div className="flex overflow-x-scroll py-6 scrollbar-hide">
        <div className="flex flex-nowrap md:ml-10 lg:ml-20">
          {nftPoolBalance &&
            isValidStakingPool(
              nftPoolBalance?.stakingBalance,
              nftPoolBalance?.pendingReward
            ) && (
              <StakingItem
                id={nftPoolBalance.pool}
                name={'NFT Pool ' + nftPoolBalance.pool.toUpperCase()}
                stakingBalance={nftPoolBalance.stakingBalance}
                pendingReward={nftPoolBalance.pendingReward}
              />
            )}

          {stakingPoolBalances?.map((item) => {
            if (isValidStakingPool(item.stakingBalance, item.pendingReward)) {
              return (
                <StakingItem
                  id={item.pid}
                  name={item.name}
                  stakingBalance={item.stakingBalance}
                  pendingReward={item.pendingReward}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
