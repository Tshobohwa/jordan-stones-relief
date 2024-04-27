import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image1_bw from "../assets/images/image1-bw.jpg";
import image2 from "../assets/images/vision.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import ReadMoreLink from "../components/ReadMoreLink";
import whatWeDo from "../data/whatWeDo";
import WhatWeDoHomeCard from "../components/WhatWeDoHomeCard";
import south_sudan from "../assets/images/south-sudan.png";
const Home = () => {
  return (
    <>
      <Header />
      <section className=" relative">
        <img
          src={image1_bw}
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
        <div className="w-[72vw] lg:h-[20vw] grid lg:grid-cols-3 gap-0">
          <img src={image2} className=" h-[100%] object-cover object-center" />
          <img src={image3} className=" h-[100%] object-cover object-center" />
          <img src={image4} className=" h-[100%] object-cover object-center" />
        </div>
        <ReadMoreLink path={"/about-us"} />
      </section>
      <section className=" bg-gray-100 flex flex-col gap-[3rem] pt-[3rem]">
        <h2 className=" text-monserat text-4xl text-gray-900 text-center">
          Area of expertize
        </h2>
        <div className=" w-[100%] grid lg:grid-cols-3 gap-[1.5rem] px-[2rem] self-center">
          {whatWeDo.map((action) => (
            <WhatWeDoHomeCard action={action} />
          ))}
        </div>
        <div className="flex items-center justify-center m-[1rem]">
          <ReadMoreLink path={"/what-we-do"} />
        </div>
      </section>
      <section className=" py-[3rem]">
        <h2 className=" text-monserat text-4xl text-gray-900 text-center mb-[2rem]">
          Where we work
        </h2>
        <div className=" w-[80%] mx-auto grid lg:grid-cols-2 gap-[2rem] ">
          <img src={south_sudan} alt="" />
          <div className=" flex flex-col gap-3 justify-center">
            <h3 className="text-2xl font-semibold">
              Jordan Stones Relief is an NGO that operates in south sudan
            </h3>
            <p className=" text-monserat text-xl">
              JSR has identified gaps in areas where there are no Humanitarian
              actors in most locations mentioned on the field workforce sheet
              attached, therefore JSR is committed to access deep remote areas
              to save the lives of the vulnerable people and provide necessary
              support with its projects.
            </p>
            <div className="w-[100%] flex items-center justify-center">
              <ReadMoreLink path={"/where-we-work"} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
