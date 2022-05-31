import React from 'react'
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const WrappedPagination = ({
  count,
  page,
  onChange
}: {
  count?: number
  page?: number
  onChange?: (e: any, p: number) => void
}) => {
  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: 'white',
      },
    },
  }))
  const classes = useStyles()

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      color="primary"
      count={count}
      size="large"
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={onChange}
    />
  )
}

export default WrappedPagination
