import React from "react";
import { HashRouter, Routes as Switch, Route } from "react-router-dom";

import MyProvider from "../context/MyProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";

import About from "../components/pages/About";
import Home from "../components/pages/Home";
import ObjectDetails from "../components/pages/ObjectDetails"
import NotFound from "../components/pages/NotFound";

const Routes = () => {
  return (
    <MyProvider>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" element={<About />} />
          <Route path="/object-details" element={<ObjectDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Switch>
        <Footer />
      </HashRouter>
    </MyProvider>
  );
};

export default Routes;
