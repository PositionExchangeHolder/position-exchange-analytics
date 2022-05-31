import React from 'react'
import GithubIcon from '../icons/Github'
import TwitterIcon from '../icons/Twitter'

export default function Footer() {
  return (
    <div className="flex relative items-center py-4 w-full dark:bg-primary ring-1 dark:ring-neutral-900 shadow-md drop-shadow-[0_1px_2px_neutral] md:mt-24">
      <footer className="mx-auto w-full max-w-7xl p-4 sm:p-6">
        <div className="sm:flex sm:justify-between sm:items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Made by a Position Holder with ❤️
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              href="https://twitter.com/home"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              href="https://github.com/PositionExchangeHolder"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
