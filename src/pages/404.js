import Image from 'next/image'
import React from 'react'

export default function PageNotFound() {
  return (
    <div className="flex  justify-center items-center w-full">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-500">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we could not find this page.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
            back to homepage
          </button>
        </div>
        <div className="max-w-lg">
          <Image
            src="/page_not_found.svg"
            alt="page_not_found logo"
            width={700}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
