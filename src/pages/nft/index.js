import React from 'react'
import CurrentValueLock from './components/CurrentValueLock'
import ItemNft from './components/ItemNft'
import Transaction from './components/Transaction'
import ValueNftInfo from './components/ValueNftInfo'
const dataNft = [1, 2, 3, 4, 5, 6]
export default function Index() {
  console.log('dataNft', dataNft)
  return (
    <main className="pt-12">
      {/* Current Value Locked */}
      <div className="grid-cols-2 gap-x-2 grid ">
        <CurrentValueLock />
        <ValueNftInfo />
      </div>
      <div className="grid-cols-3 gap-x-8 gap-y-8 grid mt-16">
        {dataNft.map((itemNft, index) => (
          <ItemNft key={index} />
        ))}
      </div>
      <div className="mt-16">
        <Transaction />
      </div>
    </main>
  )
}
