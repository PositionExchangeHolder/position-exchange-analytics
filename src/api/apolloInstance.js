import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  // uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
  ssrMode: true,
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/positionexchanger/tnft3',
    credentials: 'same-origin',
    // headers: {
    //   cookie: req.header('Cookie'),
    // },
  }),
})

export default client
