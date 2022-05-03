// APIs
export const POSITION_API =
  process.env.POSITION_API || 'https://position-token-api.vercel.app/api'
// Subgraphs
export const SUBGRAPH_POSITION_TOKEN =
  process.env.SUBGRAPH_POSITION_TOKEN ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-token'
export const SUBGRAPH_POSITION_NFT =
  process.env.SUBGRAPH_POSITION_NFT ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-nft'
export const SUBGRAPH_POSITION_REFERRAL =
  process.env.SUBGRAPH_POSITION_REFERRAL ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-referral'
export const SUBGRAPH_POSITION_VAULT_BUSD =
  process.env.SUBGRAPH_POSITION_VAULT_BUSD ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-busd-vault'
export const SUBGRAPH_POSITION_VAULT_BNB =
  process.env.SUBGRAPH_POSITION_VAULT_BNB ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bnb-vault'
export const SUBGRAPH_POSITION_BOND_01 =
  process.env.SUBGRAPH_POSITION_BOND_01 ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-01'
export const SUBGRAPH_POSITION_BOND_02 =
  process.env.SUBGRAPH_POSITION_BOND_02 ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-02'
export const SUBGRAPH_POSITION_BOND_03 =
  process.env.SUBGRAPH_POSITION_BOND_03 ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-03'
export const SUBGRAPH_POSITION_PUBLIC_SALE =
  process.env.SUBGRAPH_POSITION_PUBLIC_SALE ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-public-sale'
export const SUBGRAPH_POSITION_STAKING_NFT_POOL =
  process.env.SUBGRAPH_POSITION_STAKING_NFT_POOL ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/nft-reward-pool'
export const SUBGRAPH_POSITION_STAKING_POOL =
  process.env.SUBGRAPH_POSITION_STAKING_POOL ||
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-staking-pool'

// api end point
export const PRICE_ENDPOINT = `${POSITION_API}/v1/prices`
export const BALANCER_ENDPOINT = `${POSITION_API}/v1/address`

// api end point

export const BSC_SCAN_URL = 'https://bscscan.com'

export const DAY_IN_SECONDS = 86400

export const ADDRESS_LABELS: any = {
  '0x0000000000000000000000000000000000000000': 'Null Address (0x000...000)',
  '0x000000000000000000000000000000000000dead': 'Null Address (0x000...dEaD)',
  '0x0fb07a8527f45d7625ab6486718910ce44a608b5': 'Posi NFT Mint Proxy',
  '0x00222d964a2077301309809ab3bf56485c126a9c': 'LP_POSI_BUSD',
  '0x84c518d8e8bdb30cf02407c2443e8897eab79478': 'POSI Company Reserve',
  '0x254baa324a7e8876f4d51c3eff4b962f16672c5f': 'LP_POSI_WBNB',
  '0x849b333f2235819719a40c71bae150fe9afb4e99':
    'POSITeamRewardsLockingContract',
  '0xd3462c5c15f90d41eb920888f9080ac64488d16b': 'Position Bond003',
  '0xbe9ff181bfa9dd78191b81b23fd4ff774a3fb4f1': 'NFT Reward Pool V1',
  '0x77d2e86c25792ed30d17e6fc8334a09f6347f5a4': 'Position Bond002',
  '0x0c54b0b7d61de871db47c3ad3f69feb0f2c8db0b': 'Staking Pool',
  '0x79eaa59d796aa10960bb29917c5daaa641adde17': 'PosiV2 Migrate',
  '0x79f93984517d5ee29bed9ddac4f4dd44b8056753': 'Vault Referral Treasury',
  '0xf89d7b9c864f589bbf53a82105107622b35eaa40': 'Bybit',
  '0x1d3639ebc0afb09185f87187a3b9431a40370bd6': 'POSITeam Rewards Locking',
  '0xd4c9123e011066a971fb78d4015cd3f0b8126e75': 'Position Bond01',
  '0x7ab2cb9913213d249f0cfdd871aa696c9529ac6b': 'NFT Reward Team Wallet',
  '0xf7224c91baf653ef46f498a92e2fff35ad0588a2': 'Posi Treasury',
  '0x0d0707963952f2fba59dd06f2b425ace40b492fe': 'Gate.io',
  '0x89a0380d83a53310141308ea6b113173ff6f1200': 'Position Token Governor',
  '0x4982085c9e2f89f2ecb8131eca71afad896e89cb': 'MEXC',
  '0x5ca42204cdaa70d5c773946e69de942b85ca6706': 'Position Token',
  '0xa3772e9b69b5877dde7580d17ae9716d228aafde': 'Position Deployer',
  '0x6257229fa379afdbb91732091b5de32cdb759845': 'NFT Reward Pool V2',
  '0x9d95b5ea6c8f678b7486be7a6331ec10a54156bd': 'NFT Factory',
  '0x05e5b3cd263c4cd40cfa74b5e221dbede60c632e': 'Marketplace',
}
