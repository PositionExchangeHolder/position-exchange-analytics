import React from 'react'
import HeadSEO from '@/components/layout/HeadSEO'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeadSEO
        title='Position Exchange Analytics | Home Page'
        description='All data you need to know about Position Exchange project'
      />
      <div className="sticky h-96 flex flex-col items-center justify-center">
        <p className="text-3xl text-transparent font-normal bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
          POSITION EXCHANGE ANALYTICS
        </p>
        <span className="text-gray-400">
          Unofficial
        </span>
        <Link href={'/nft'} >
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 mt-4">
            <span className="relative text-1xl px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Explore
            </span>
          </button>
        </Link>
      </div>
    </>
  )
}
