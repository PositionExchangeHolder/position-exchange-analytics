import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import AppProvider from './AppProvider'

export default function StoreProvider({
  children,
}: {
  children: ReactElement
}) {
  return (
    <Provider store={store}>
      <AppProvider>{children}</AppProvider>
    </Provider>
  )
}
