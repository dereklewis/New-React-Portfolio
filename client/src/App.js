import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
// import Header from "./components/Header/Header";
import ContactForm from "./components/Contact Form/ContactForm";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />

      <Project />

      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
