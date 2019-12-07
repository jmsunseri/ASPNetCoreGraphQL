import React from "react";
import { Route } from "react-router";
import { Layout } from "./Layout/Layout";
import ApolloClient from "apollo-boost";
import "bootstrap/dist/css/bootstrap.min.css";
import "flexboxgrid/css/flexboxgrid.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./custom.css";
import Hockey from "./Hockey/Hockey";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://justin-nhl-stats.azurewebsites.net/";

export const apolloClients = {
  playerClient: new ApolloClient({
    uri: `${baseUrl}hockey-player/graphql`
  }),
  statsClient: new ApolloClient({
    uri: `${baseUrl}stats/graphql`
  })
};

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Hockey} />
    </Layout>
  );
};

export default App;
