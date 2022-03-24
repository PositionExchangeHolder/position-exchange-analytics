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
    <div className="px-5 py-5 bg-secondary border-t flex flex-col items-end ">
      <span className="text-xs xs:text-sm text-txt-primary">
        {renderEntries(currentItem, skip)}
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={currentItem === 0 ? true : false}
          onClick={onPrePage}
          className={`${
            currentItem === 0
              ? ' disabled:transform-none disabled:transition-none disabled:bg-gray disabled:cursor-not-allowed bg-gray-600'
              : 'hover:bg-gray-700 '
          } " disabled:cursor-not-allowed text-sm bg-primary  text-txt-primary font-semibold py-2 px-4 rounded-l"`}
        >
          Prev
        </button>
        <button
          onClick={onNextPage}
          className="text-sm bg-primary hover:bg-gray-700 text-txt-primary font-semibold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  )
}

const renderEntries = (entries: number, skip: number) => {
  if (entries < skip) {
    return `Showing 1 to ${skip} of 9999 Entries`
  } else {
    return `Showing ${entries} to ${skip + entries} of 9999 Entries`
  }
}
