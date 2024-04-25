import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image1_bw from "../assets/images/image1-bw.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import ReadMoreLink from "../components/ReadMoreLink";
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
      <section className="w-[100%] py-[5rem] flex flex-col items-center gap-[2.5rem]">
        <div className=" w-full flex flex-col gap-[2.5rem] items-center">
          <h2 className=" text-monserat text-4xl">Who are we?</h2>
          <p className=" text-monserat text-center w-[70%]">
            JORDAN STONE RELIEF (JSR) is a non-governmental, non-profit making,
            Christian faith-based organization. Founded in 2015, under article
            chapter, 3; Section 10, of NGOs act, 2016 ,to elevate the sufferings
            of vulnerable people and enhance resilience and recovery across
            South Sudan.
          </p>
        </div>
        <div className="w-[72vw] h-[20vw] grid grid-cols-3 gap-0">
          <img src={image2} className=" h-[100%] object-cover object-center" />
          <img src={image3} className=" h-[100%] object-cover object-center" />
          <img src={image4} className=" h-[100%] object-cover object-center" />
        </div>
        <ReadMoreLink path={"/about-us"} />
      </section>
      <Footer />
    </>
  );
};

export default Home;
