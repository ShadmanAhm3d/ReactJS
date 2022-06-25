import React from "react";
import Navbar from "../components/Navbar";
import DisplayBar from "../components/DisplayBar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <DisplayBar />
      <Products />
    </div>
  );
};

export default Home;
