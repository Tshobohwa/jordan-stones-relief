import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../assets/images/image4-bw.jpg";
import whatWeDo from "../data/whatWeDo";
import AreaOfExpertize from "../components/AreaOfExpertize";
import existingProjects from "../data/existingProjects";
import ExistingProject from "../components/ExistingProject";

const WhatWeDo = () => {
  return (
    <>
      <Header />
      <section className=" relative">
        <img
          src={image}
          className=" h-[100vh] w-[100vw] object-cover object-center"
        />
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black/50">
          <h1 className=" text-5xl font-light text-gray-50 text-monserat">
            What we do
          </h1>
        </div>
      </section>
      <section className=" pt-[3rem] flex flex-col gap-[2rem]">
        <h2 className=" text-[2.5rem] font-semibold text-gray-900 text-center">
          Areas of expertize
        </h2>
        <div className=" px-[2rem] flex flex-col gap-[2rem]">
          {whatWeDo.map((expertize, index) => (
            <AreaOfExpertize expertize={expertize} index={index} />
          ))}
        </div>
        <div className="bg-gray-100 p-[2rem]">
          <h2 className=" text-[2.5rem] font-semibold text-gray-900 text-center">
            Existing projects
          </h2>
          <div className=" grid grid-cols-4 gap-[2rem] my-[2rem]">
            {existingProjects.map((project) => (
              <ExistingProject project={project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WhatWeDo;
