import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// IMPORTA LAS REFERENCIAS DE APOLLO
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// PERMITIRA LA INSTANCIA ENTRE GRAPHQL CON APOLO - LOCALHOST (CONSTANTE QUE ALMACENA EL SERVIDOR DE GRAPQL)
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// INSTANCIA CON APOLLO CLIENT CON EL LA CONSTANTE ANTERIOR
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// RENDERIZA LA APLICACION DE REACT CON LOS COMPONENTES DE APOLLO
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
