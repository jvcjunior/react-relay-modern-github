const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

const token = '';

function fetchQuery(
  operation,
  variables,
) {
    return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

export default new Environment({
  network,
  store,
})