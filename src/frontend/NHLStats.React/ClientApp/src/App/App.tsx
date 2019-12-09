import React, { FC, ReactElement } from "react";
// import { Route } from "react-router";
import Layout from "./Layout/Layout";
import ApolloClient from "apollo-boost";
import Hockey from "./Hockey/Hockey";
import DefaultClient from "apollo-boost";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://justin-nhl-stats.azurewebsites.net/";
interface ApolloClientMap {
  playerClient: DefaultClient<any>;
  statsClient: DefaultClient<any>;
}
export const apolloClients: ApolloClientMap = {
  playerClient: new ApolloClient({
    uri: `${baseUrl}hockey-player/graphql`
  }),
  statsClient: new ApolloClient({
    uri: `${baseUrl}stats/graphql`
  })
};

const App: FC = (): ReactElement => {
  console.log("app function called");

  return (
    <Layout title="NHLStats React GraphQL" secondaryTitle="Hockey Stats">
      <Hockey></Hockey>
    </Layout>
  );
};

export default App;
