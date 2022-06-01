import { POSITION_EXCHANGE_URL, POSITION_EXCHANGE_REF_CODE } from 'utils/constants'

export const getPostionExchangeUrl = (endpoint: string): string => {
  let url = `${POSITION_EXCHANGE_URL}/${endpoint.replaceAll('/', '')}`

  return POSITION_EXCHANGE_REF_CODE
    ? url + `/?ref=${POSITION_EXCHANGE_REF_CODE}`
    : url
}
