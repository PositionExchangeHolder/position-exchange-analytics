import web3 from 'web3'

export function checkIsAddress(address: string): boolean {
  return web3.utils.isAddress(address)
}
