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
      <section>
        <div className="w-[100%] flex flex-col items-center">
          <h2>What we do</h2>
          <p className=" w-[80%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis
            deserunt dicta est placeat quaerat dolor numquam, dolorum adipisci!
            Temporibus assumenda atque officiis. Dolorum velit similique
            deserunt, minus sunt, eum ducimus eaque ipsa cupiditate possimus
            suscipit optio, atque impedit neque quo nisi cum. Deleniti quo at
            laborum iste eius fugiat.
          </p>
        </div>
        <h2>Our recents activities</h2>
        <div className=" w-[100%] grid grid-cols-5 p-[2rem]">{/* {wh} */}</div>
      </section>
      <Footer />
    </>
  );
};

export default WhatWeDo;
