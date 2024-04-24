import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const WhatWeDo = () => {
  return (
    <>
      <Header />
      <section>
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className=" h-[100vh] w-[100vw] object-cover"
        />
      </section>
      <Footer />
    </>
  );
};

export default WhatWeDo;
