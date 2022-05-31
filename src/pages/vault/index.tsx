import HeadSEO from '@/components/layout/HeadSEO'
import { getCompoundTransactions } from 'api/vault/transactions'
import React, { useEffect, useState } from 'react'
import { CompoundTransaction } from 'types/api/vault'

export default function Index() {
  const [compoundTxs, setCompoundTxs] = useState<CompoundTransaction[]>()
  
  useEffect(() => {
    const fetchCompoundTransactions = async () => {
      const txs = await getCompoundTransactions({})
      setCompoundTxs(txs)
    }

    fetchCompoundTransactions()
  }, [])
  console.log(compoundTxs)
  
  return (
    <>
      <HeadSEO
        title='Position Vaults'
        description='Position Vaults'
      />
      <div>
        Vault
      </div>
    </>
  )
}
