import Image from 'next/image'
import React from 'react'

export default function PageNotFound() {
  return (
    <div className="flex  justify-center items-center w-full">
      <div className="container flex flex-col justify-center items-center px-5 text-gray-500 md:flex-row">
        <div className="max-w-md">
          <div className="text-5xl font-bold ">404</div>
          <p className="text-2xl font-light leading-normal md:text-3xl">
            Sorry we could not find this page.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <button className="inline py-2 px-4 text-sm font-medium leading-5 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-600 to-blue-600 rounded-lg border border-transparent focus:outline-none focus:ring-1 shadow focus:shadow-md transition-colors duration-150">
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
