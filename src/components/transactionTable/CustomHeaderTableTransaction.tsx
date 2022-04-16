import { ArrowDownIcon } from '@heroicons/react/outline'
import { ItemTranSaction } from 'api/nft/nft.api.type'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { useAppDispatch } from 'store/hooks'

type Props = {
  columns?: TableColumn<ItemTranSaction | any>[]
}
export default function CustomHeaderTableTransaction({ columns }: Props) {
  const dispatch = useAppDispatch()
  return (
    <>
      {columns?.map((column, index) => {
        const onClickFilter = () => {}
        return (
          <div
            className="pl-[20px]"
            style={{ width: column?.width }}
            key={index}
          >
            <div className="flex items-center">
              <p
                onClick={onClickFilter}
                className={`text-sm text-[#6987FF] ${
                  column?.sortable && 'cursor-pointer'
                } `}
              >
                {column.name}
              </p>
              {column?.sortable && (
                <div
                  onClick={onClickFilter}
                  className={`w-4 h-4 text-[#6987FF] ml-2 ${
                    column?.sortable && 'cursor-pointer'
                  }`}
                >
                  <ArrowDownIcon />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
