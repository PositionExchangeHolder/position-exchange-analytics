import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import { getNftsOfAddress } from 'api/nft/nft.api'
import { isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { SortOrder } from 'react-data-table-component'
import getPageCount from 'utils/getPageCount'
import TransactionTable from '../transactionTable'
import { ColumnsNftAddress } from '../transactionTable/ColumnsNftAddress'

const PER_PAGE = 8

type Props = {
  address: string
}

export default function NftListItem({ address }: Props) {
  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: 'white',
      },
    },
  }))
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [currentPages, setCurrentPages] = useState<number>(1)
  const [orderBy, setOrderBy] = useState<string>('id')
  const [orderDirection, setOrderDirection] = useState<string>('asc')

  const [nftList, setNftList] = useState<any>([])

  const handleChange = (e: any, p: number) => {
    setCurrentPages(p)
  }
  const count = getPageCount(totalPage, PER_PAGE)

  useEffect(() => {
    if (address) {
      getNfts()
    }
  }, [address, currentPages, orderBy, orderDirection])

  const getNfts = async () => {
    try {
      if (isLoading) {
        return
      }
      setIsLoading(true)

      const nftList = await getNftsOfAddress(
        address.toLowerCase(),
        (currentPages - 1) * PER_PAGE,
        PER_PAGE,
        orderBy,
        orderDirection
      )
      setNftList(nftList)
      setTotalPage(nftList.totalNfts)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }
  const handleSort = (column: any, sortDirection: SortOrder) => {
    setOrderBy(column.sortField)
    setOrderDirection(sortDirection)
    setCurrentPages(1)
  }

  return (
    <div className="">
      <TransactionTable
        transactions={nftList?.nft || []}
        titleTable={`NFTs`}
        isLoading={isLoading}
        columns={ColumnsNftAddress}
        onSort={handleSort}
      />
      {!isEmpty(nftList?.nft) && (
        <div className="flex justify-center items-center my-6">
          <Pagination
            classes={{ ul: classes.ul }}
            color="primary"
            count={count}
            size="large"
            page={currentPages}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  )
}
