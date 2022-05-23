import React from 'react'

type Props = {
  currentItem: number
  setNextItem: (skip: number) => void
  skip: number
}

export default function Pagination({ currentItem, setNextItem, skip }: Props) {
  const onNextPage = () => {
    if (currentItem === 9999) return
    setNextItem(currentItem + skip)
  }
  
  const onPrePage = () => {
    if (currentItem === 0) return
    setNextItem(currentItem - skip)
  }
  
  return (
    <div className="flex flex-col items-end px-5 pt-5 pb-8 bg-light-primary dark:bg-secondary border dark:border-0 dark:border-t border-b dark:border-b-gray-400">
      <div className="inline-flex gap-x-1 mt-2 xs:mt-0">
        <button
          disabled={currentItem === 0 ? true : false}
          onClick={onPrePage}
          className={`${
            currentItem === 0
              ? ' disabled:transform-none disabled:transition-none disabled:bg-gray disabled:cursor-not-allowed dark:bg-gray-600 bg-gray-200'
              : 'hover:bg-gray-700 '
          } "disabled:cursor-not-allowed text-sm bg-light-primary dark:bg-primary dark:text-txt-catskill-white text-txt-light-txt-primary font-semibold py-2 px-4 rounded-l border dark:border-0 dark:hover:bg-gray-700 hover:bg-light-primary-hv"`}
        >
          Prev
        </button>
        <button
          onClick={onNextPage}
          className="py-2 px-4 text-sm font-semibold text-txt-light-txt-primary dark:text-txt-catskill-white bg-light-primary hover:bg-light-primary-hv dark:bg-primary dark:hover:bg-gray-700 rounded-r border dark:border-0"
        >
          Next
        </button>
      </div>
    </div>
  )
}

