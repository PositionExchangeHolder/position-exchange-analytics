// APIs
export const POSITION_API = process.env.POSITION_API || 'https://position-token-api.vercel.app/api'

// Subgraphs
export const SUBGRAPH = {
  TOKEN: process.env.SUBGRAPH_POSITION_TOKEN || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-token',
  NFT: process.env.SUBGRAPH_POSITION_NFT || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-nft',
  REFERRAL: process.env.SUBGRAPH_POSITION_REFERRAL || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-referral',
  VAULTS: process.env.SUBGRAPH_POSITION_VAULT || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-vaults',
  BONDS: {
    _1: process.env.SUBGRAPH_POSITION_BOND_01 || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-01',
    _2: process.env.SUBGRAPH_POSITION_BOND_02 || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-02',
    _3: process.env.SUBGRAPH_POSITION_BOND_03 || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-03'
  },
  PUBLIC_SALE: process.env.SUBGRAPH_POSITION_PUBLIC_SALE || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-public-sale',
  STAKING: {
    STAKING_POOL: process.env.SUBGRAPH_POSITION_STAKING_POOL || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-staking-pool',
    NFT_POOL: process.env.SUBGRAPH_POSITION_STAKING_NFT_POOL || 'https://api.thegraph.com/subgraphs/name/gafranslotteria/nft-reward-pool'
  }
}

export const BSC_SCAN_URL = 'https://bscscan.com'

export const DAY_IN_SECONDS = 86400
