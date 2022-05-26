const SUBGRAPH_SKIP_LIMIT = 5000

const getPageCount = (total: number, perPage: number): number => {
  const page = Math.ceil(total / perPage)
  const pageLimit = SUBGRAPH_SKIP_LIMIT / perPage
  
  return (
    page >= pageLimit
    ? pageLimit
    : page
  )
}

export default getPageCount
