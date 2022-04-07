import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

//Declare your endpoints
const nft = createHttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-nft',
})
const referral = createHttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-referral',
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  }
})
const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  ssrMode: true,
  addTypename: false,
  link: ApolloLink.split(
    (operation) => operation.getContext().endPointName === 'nft',
    authLink.concat(nft),
    (operation) => operation.getContext().clientName === 'referral',
    authLink.concat(referral)
  ),
})

export default client
