import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Main = (props) => {
  return (
    <>
      <Header />
      <main id="main" role="main">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
