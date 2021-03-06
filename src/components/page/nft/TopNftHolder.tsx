import { DoughnutChart } from '@/components/chart/DoughnutChart'
import Loading from '@/components/loading/Loading'
import { getTopNftHolder } from 'api/nft/leaderboard'
import React, { useEffect, useState } from 'react'
import { getAddressLabel } from 'utils/address'
import { hashFormatter } from 'utils/string'

type Props = {
  totalNfts: number
}

const TopNftHolder = ({ totalNfts }: Props) => {
  const [topHolder, setTopHolder] = useState<any[]>()
  
  useEffect(() => {
    const fetchTopTenHolder = async () => {
      const top = await getTopNftHolder() || []

      const data: any[] = []
      top.forEach((e) => {
        const address = getAddressLabel(e.id) || hashFormatter(e.id, true, 4)
        data.push({
          id: address,
          label: address,
          value: Number(e.totalNfts)
        })
      })
      setTopHolder(data)
    }

    fetchTopTenHolder()
  }, [])

  return (
    <div>
      <p>Top 10 NFT Holder</p>
      <div className="grid-cols-3 gap-x-12 w-full md:grid">
        <div className="group flex flex-col col-span-1 gap-y-4 justify-center items-center h-80 bg-secondary">
          <div className="w-96 h-96">
            {
              !topHolder
                ? <Loading />
                : (
                  <DoughnutChart
                    data={topHolder as []}
                    total={Number(totalNfts)}
                  />
                ) 
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNftHolder
