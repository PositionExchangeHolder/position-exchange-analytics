import React from 'react'
import HeadSEO from '@/components/layout/HeadSEO'

export default function Home() {
  return (
    <>
      <HeadSEO
        title='Position Exchange Analytics | Home Page'
        description='All data you need to know about Position Exchange project'
      />
      <div className="w-full h-full bg-light-primary dark:bg-primary">
        Home Page
      </div>
    </>
  )
}
