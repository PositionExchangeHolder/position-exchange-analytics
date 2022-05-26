import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
  description: string
  children?: any
}

const HeadSEO = ({ title, description, children }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {children}
    </Head>
  )
}

export default HeadSEO
