import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
// import Header from "./components/Header/Header";
import ContactForm from "./components/Contact Form/ContactForm";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh"></div>
        <Navbar />
        <div className="container"></div>
        <Switch></Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <ContactForm />
        </Route>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
