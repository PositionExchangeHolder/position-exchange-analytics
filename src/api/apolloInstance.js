import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'

//Declare your endpoints
const nft = createHttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-nft',
})
const referral = createHttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-referral',
})

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  ssrMode: true,
  addTypename: false,
  link: ApolloLink.split(
    (operation) => operation.getContext().endPointName === 'nft',
    nft,
    ApolloLink.split(
      (operation) => operation.getContext().endPointName === 'referral',
      referral // <= apollo will send to this if clientName is "link2"
    )
  ),
})

export default client
