import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import "./custom.css";
import Hockey from "./components/Hockey";

export default class App extends Component {
  static displayName = App.name;

  client = new ApolloClient({
    uri:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000/graphql"
        : "https://justin-nhl-stats.azurewebsites.net/graphql"
  });

  render() {
    console.log(process.env.NODE_ENV);

    return (
      <ApolloProvider client={this.client}>
        <Layout>
          <Route exact path="/" component={Hockey} />
        </Layout>
      </ApolloProvider>
    );
  }
}
