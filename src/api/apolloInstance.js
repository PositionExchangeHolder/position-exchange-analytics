import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  // uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache({ addTypename: false }),
  ssrMode: true,
  addTypename: false,
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/positionexchanger/tnft3',
    credentials: 'same-origin',
    // addTypename: false,

    // headers: {
    //   cookie: req.header('Cookie'),
    // },
  }),
})

export default client
