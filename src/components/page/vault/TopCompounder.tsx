import { getTopCompounder } from 'api/vault/leaderboard'
import React, { useEffect, useState } from 'react'
import { Compounder } from 'types/api/vault'

const TopCompounder = () => {
  const [topCompounder, setTopCompounder] = useState<Compounder[]>([])
  
  useEffect(() => {
    const fetchTopCompounder = async () => {
      const res = await getTopCompounder({})
      if (res) {
        setTopCompounder(res)
      }
    }

    fetchTopCompounder()
  }, [])
  console.log(topCompounder)
  
  return (
    <div>
      {/* {
        topCompounder.map((e) => (
          <p>
            {`${e.id}: ${e.totalCompoundTransactions}`}
          </p>
        ))
      } */}
    </div>
  )
}

export default TopCompounder
