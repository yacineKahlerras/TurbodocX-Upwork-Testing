import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => (
  <Fragment>
    <NavBar />
    <Hero />
    <hr />
    <Content />
    <Footer />
  </Fragment>
);

export default Home;
