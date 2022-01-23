import React from "react";
import FirstBody from "./FirstBody";
import FourthBody from "./FourthBody";
import Header from "./Header";
import SecondBody from "./SecondBody";
import ThirdBody from "./ThirdBody";
import Footer from "./Footer";

const Container = () => {
  return (
    <div>
      <Header />
      <FirstBody />
      <SecondBody />
      <ThirdBody />
      <FourthBody />
      <Footer />
    </div>
  );
};

export default Container;
