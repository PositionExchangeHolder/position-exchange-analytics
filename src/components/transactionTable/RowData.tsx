import React, { ReactElement } from 'react'

export default function RowData({
  data,
  children,
}: {
  data?: string
  children?: ReactElement
}) {
  return (
    <div className="flex items-center w-full h-full text-xs font-medium text-gray-400 dark:text-txt-primary bg-light-primary dark:bg-primary md:text-sm">
      {children ? children : data}
    </div>
  )
}
