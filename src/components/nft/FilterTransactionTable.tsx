import React from 'react'

type ItemFilter = {
  name: string
  value: string
}
type Props = {
  listFilterTransaction: ItemFilter[]
  setCurrentFilter?: (filter: string) => void
  currentFilter: string
}
export default function FilterTransactionTable({
  listFilterTransaction,
  setCurrentFilter,
  currentFilter,
}: Props) {
  return (
    <div className="grid flex-wrap grid-cols-3 gap-x-4 md:flex md:flex-row">
      {listFilterTransaction &&
        listFilterTransaction?.map((itemFilter) => {
          const onSetCurrentFilter = () => {
            typeof setCurrentFilter === 'function' &&
              setCurrentFilter(itemFilter.value)
          }

          return (
            <div className="flex items-center" key={itemFilter.name}>
              <input
                onChange={onSetCurrentFilter}
                checked={itemFilter.value === currentFilter ? true : false}
                name="currentFilter"
                type="radio"
                className="h-6 text-red-700 border-gray-300 focus:ring-slate-50"
              />
              <label
                htmlFor="push-everything"
                className="block ml-3 text-tiny-xs font-medium text-txt-secondary dark:text-txt-primary lg:text-sm"
              >
                {itemFilter.name}
              </label>
            </div>
          )
        })}
    </div>
  )
}
