import { InjectedConnector } from '@web3-react/injected-connector'

export const Injected = new InjectedConnector({
  supportedChainIds: [
    1, // eth Production
    3, // ropsten Test
    4, // rinkeby Test
    5, // goerli Test
    42, // kovan Test
    56, // bsc Production
    97, //  bsc Test
  ],
})
