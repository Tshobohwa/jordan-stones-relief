import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image1_bw from "../assets/images/image1-bw.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <section className=" relative">
        <img
          src={image1_bw}
          alt=""
          className=" h-[100vh] w-[100vw] object-cover object-center"
        />
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black/50">
          <h1 className=" text-5xl font-light text-gray-50 text-monserat">
            JORDAN STONES RELIEF
          </h1>
          <h3 className=" text-gray-100 italic text-[2rem] font-extralight">
            Humanity is our priority
          </h3>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
