// APIs
export const POSITION_API =
  process.env.POSITION_API
  || 'https://position-token-api.vercel.app/api'
export const PRICE_ENDPOINT = `${POSITION_API}/v1/prices`
export const BALANCER_ENDPOINT = `${POSITION_API}/v1/address`

// Subgraphs
export const SUBGRAPH_POSITION_TOKEN =
  process.env.SUBGRAPH_POSITION_TOKEN
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-token'
export const SUBGRAPH_POSITION_NFT =
  process.env.SUBGRAPH_POSITION_NFT
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-nft'
export const SUBGRAPH_POSITION_REFERRAL =
  process.env.SUBGRAPH_POSITION_REFERRAL
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-referral'
export const SUBGRAPH_POSITION_VAULT_BUSD =
  process.env.SUBGRAPH_POSITION_VAULT_BUSD
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-busd-vault'
export const SUBGRAPH_POSITION_VAULT_BNB =
  process.env.SUBGRAPH_POSITION_VAULT_BNB
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bnb-vault'
export const SUBGRAPH_POSITION_BOND_01 =
  process.env.SUBGRAPH_POSITION_BOND_01
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-01'
export const SUBGRAPH_POSITION_BOND_02 =
  process.env.SUBGRAPH_POSITION_BOND_02
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-02'
export const SUBGRAPH_POSITION_BOND_03 =
  process.env.SUBGRAPH_POSITION_BOND_03
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-03'
export const SUBGRAPH_POSITION_PUBLIC_SALE =
  process.env.SUBGRAPH_POSITION_PUBLIC_SALE
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-public-sale'
export const SUBGRAPH_POSITION_STAKING_NFT_POOL =
  process.env.SUBGRAPH_POSITION_STAKING_NFT_POOL
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/nft-reward-pool'
export const SUBGRAPH_POSITION_STAKING_POOL =
  process.env.SUBGRAPH_POSITION_STAKING_POOL
  || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-staking-pool'

export const BSC_SCAN_URL = 'https://bscscan.com'

export const DAY_IN_SECONDS = 86400
