import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './i18n'

import App from "./App";
import client from "./apollo";
import { ApolloProvider, gql } from "@apollo/client";

client

  .query({

    query: gql`

  query {
    exposition {
      _id
      applications
      curiosities
      description
      history
      math_workshop
      previous_knowledge
      title
      visual_workshop
    }
  }

  `,

  })

  .then((result) => console.log(result));

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);