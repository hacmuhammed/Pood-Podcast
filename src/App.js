import React from "react";
import { Header, Populer, Recommended, Categori,Pricing,Footer } from "./containers";
import { Navbar } from "./components";

import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Populer />
      <Recommended />
      <Categori />
      <Pricing/>
      <Footer/>
    </>
  );
};
export default App;
