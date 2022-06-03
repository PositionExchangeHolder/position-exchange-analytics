import React, { useEffect, useState } from 'react'
import HeadSEO from '@/components/layout/HeadSEO'
import CompoundTransactions from '@/components/page/vault/CompoundTransactions'
import { VaultStatistics } from 'types/api/vault'
import { getVaultSatistics } from 'api/vault/statistics'
import VaultStatisticsComponent from '@/components/page/vault/VaultStatistics'
import GasPriceStatistics from '@/components/page/vault/GasPriceStatistics'

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
    <main className="relative px-6 mt-10 w-full bg-light-primary dark:bg-primary md:mt-16 xl:px-0">
      <HeadSEO title='Position Vaults' description='Position Vaults' />
      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
        <VaultStatisticsComponent statistics={vaultStatistics} />
        <div className="mt-8 h-72 rounded-md xs:mt-0 md:mt-0">
          <div className="w-full h-full rounded-md">
            <GasPriceStatistics />
          </div>
        </div>
      </div>

      <div className="pt-16">
        <CompoundTransactions
          totalTransactions={vaultStatistics.totalCompoundTransactions}
        />
      </div>
    </main>
  )
}
