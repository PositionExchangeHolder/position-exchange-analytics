import Web3 from 'web3'

const BSC_MAINNET_RPC = process.env.BSC_MAINNET_RPC || 'https://bsc-dataseed.binance.org/'

const web3 = new Web3(new Web3.providers.HttpProvider(BSC_MAINNET_RPC))

export default web3
