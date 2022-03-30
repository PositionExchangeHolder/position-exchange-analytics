import web3 from 'web3'

export function isAddress(address: string): boolean {
  return web3.utils.isAddress(address)
}
