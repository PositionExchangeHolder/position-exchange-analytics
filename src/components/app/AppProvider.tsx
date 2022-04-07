import { isEmpty } from 'lodash'
import React, { ReactElement, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getPrice, selectPrice } from 'store/price/priceSlice'

export default function AppProvider({ children }: { children: ReactElement }) {
  const dispatch = useAppDispatch()
  const { prices } = useAppSelector(selectPrice)
  useEffect(() => {
    if (isEmpty(prices)) {
      dispatch(getPrice())
    }
  }, [])
  return <div>{children}</div>
}
