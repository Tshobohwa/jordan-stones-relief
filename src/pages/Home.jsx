import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <img
          src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className=" h-[100vh] w-[100vw] object-cover"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
}
