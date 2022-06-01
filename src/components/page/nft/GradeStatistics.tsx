import Loading from '@/components/loading/Loading'
import { TypeItemNft } from 'helper/nft/transferDataTotalNft'
import Link from 'next/link'
import React from 'react'
import ItemNft from './ItemNft'

type Props = {
  gradeStatistics: TypeItemNft[] | undefined
}

const GradeStatistics = ({ gradeStatistics }: Props) => {
  const pathRedirect = '/nft/grade/[slug]'
  
  return (
    <div className="grid gap-8 mt-12 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3">
      {
        !gradeStatistics
          ? <Loading />
          : (
            gradeStatistics.map((itemNft, index) => {
              return (
                <Link
                  key={index}
                  href={{
                    pathname: pathRedirect,
                    query: { slug: itemNft.grade },
                  }}
                >
                  <a>
                    <ItemNft item={itemNft} />
                  </a>
                </Link>
              )
            })
          )
      }
    </div>
  )
}

export default GradeStatistics
