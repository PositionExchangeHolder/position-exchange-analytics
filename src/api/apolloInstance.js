import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  ssrMode: true,
  addTypename: false,
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/positionexchanger/tnft3',
    credentials: 'same-origin',
  }),
})

export default client
