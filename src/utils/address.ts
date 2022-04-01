import web3 from 'web3'
import { ADDRESS_LABELS } from './constants'

export function isAddress(address: string): boolean {
  return web3.utils.isAddress(address)
}

export function getAddressLabel(address: string): string | undefined {
  return ADDRESS_LABELS[address]
}
