import React from "react";
import FirstBody from "./FirstBody";
import Header from "./Header";
import SecondBody from "./SecondBody";
import ThirdBody from "./ThirdBody";

const Container = () => {
  return (
    <div>
      <Header />
      <FirstBody />
      <SecondBody />
      <ThirdBody />
    </div>
  );
};

export default Container;
