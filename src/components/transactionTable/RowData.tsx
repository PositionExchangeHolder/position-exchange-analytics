import React, { ReactElement } from 'react'

export default function RowData({
  data,
  children,
}: {
  data?: string
  children?: ReactElement
}) {
  return (
    <div className="ont-medium  text-xs md:text-sm dark:text-txt-primary text-gray-400 bg-light-primary dark:bg-primary flex items-center w-full h-full">
      {children ? children : data}
    </div>
  )
}
