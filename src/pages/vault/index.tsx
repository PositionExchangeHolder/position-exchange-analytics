import React, { useEffect, useState } from 'react'
import HeadSEO from '@/components/layout/HeadSEO'
import CompoundTransactions from '@/components/page/vault/CompoundTransactions'
import { VaultStatistics } from 'types/api/vault'
import { getVaultSatistics } from 'api/vault/statistics'
import VaultStatisticsComponent from '@/components/page/vault/VaultStatistics'

export default function Index() {
  const [vaultStatistics, setVaultStatistics] = useState<VaultStatistics>({
    totalCompoundTransactions: 0,
    totalUniqueCompounders: 0
  })
  
  useEffect(() => {
    const fetchVaultStatistics = async () => {
      const statistics = await getVaultSatistics()

      if (statistics) {
        setVaultStatistics(statistics)
      }
    }

    fetchVaultStatistics()
  }, [])

  
  return (
    <>
      <HeadSEO
        title='Position Vaults'
        description='Position Vaults'
      />
      <div className="relative px-6 mt-8 w-full md:mt-10 xl:px-0">
        <VaultStatisticsComponent statistics={vaultStatistics} />

        <div className="pt-16">
          <CompoundTransactions
            totalTransactions={vaultStatistics.totalCompoundTransactions}
          />
        </div>
      </div>
    </>
  )
}
