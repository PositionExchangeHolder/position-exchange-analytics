import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import {
  SUBGRAPH_POSITION_NFT,
  SUBGRAPH_POSITION_REFERRAL
} from 'utils/constants'

//Declare your endpoints
const nft = createHttpLink({ uri: SUBGRAPH_POSITION_NFT })
const referral = createHttpLink({ uri: SUBGRAPH_POSITION_REFERRAL })

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  ssrMode: true,
  addTypename: false,
  link: ApolloLink.split(
    (operation) => operation.getContext().endpointName === 'nft',
    nft,
    ApolloLink.split(
      (operation) => operation.getContext().endpointName === 'referral',
      referral // <= apollo will send to this if clientName is "link2"
    )
  ),
})

export default client
