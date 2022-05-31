import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { SUBGRAPH } from 'utils/constants'

//Declare your endpoints
const nft = createHttpLink({ uri: SUBGRAPH.NFT })
const referral = createHttpLink({ uri: SUBGRAPH.REFERRAL })

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  ssrMode: true,
  addTypename: false,
  link: ApolloLink.split(
    (operation) => operation.getContext().endpoint === 'nft',
    nft,
    ApolloLink.split(
      (operation) => operation.getContext().endpoint === 'referral',
      referral // <= apollo will send to this if clientName is "link2"
    )
  ),
})

export default client
