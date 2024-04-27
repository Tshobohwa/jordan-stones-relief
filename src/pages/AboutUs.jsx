import { MdOutlineTaskAlt } from "react-icons/md";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cross from "../assets/images/cross.jpg";
import { TbLicense } from "react-icons/tb";
import { MdOutlineCardMembership } from "react-icons/md";
import AboutUsCard from "../components/AboutUsCard";
import abouts from "../data/abouts";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className=" relative">
        <img
          src={cross}
          alt=""
          className=" h-[100vh] w-[100vw] object-cover object-center"
        />
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black/50">
          <h1 className=" text-5xl font-light text-gray-50 text-monserat">
            About us
          </h1>
        </div>
      </section>
      <section className=" bg-gray-100 py-[3rem] flex flex-col items-center gap-[5rem]">
        <div className=" bg-white h-fit p-[1.5rem] flex flex-col gap-[1.5rem] items-center w-[70%]">
          <h1 className=" text-red-500 text-3xl font-semibold text-monserat">
            Who are we?
          </h1>
          <p className="text-center w-[70] text-monserat text-[1.25rem] ">
            JORDAN STONE RELIEF (JSR) is a non-governmental, non-profit making,
            Christian faith-based organization. Founded in 2015, under article
            chapter, 3; Section 10, of NGOs act, 2016 ,to elevate the sufferings
            of vulnerable people and enhance resilience and recovery across
            South Sudan.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[1.5rem] mx-[1.5rem]">
          <div className="p-[1rem] bg-white w-[100%] relative pt-[1.5rem]">
            <div className=" absolute top-[-2rem] text-gray-900 left-[1rem]">
              <TbLicense size={64} />
            </div>
            <h1 className="text-[1.5rem] text-red-400 text-center">License</h1>
            <p className="text-center">
              JSR is licensed by South Sudan Relief and Rehabilitation
              Commission (RRC) and endorsed by NGO Forum in the working groups,
              to carry out and deliver humanitarian services to the most
              affected population by natural calamities and made disasters
              across the country.
            </p>
          </div>
          <div className="p-[1rem] bg-white w-[100%] relative pt-[1.5rem]">
            <div className=" absolute top-[-2rem] text-gray-900 left-[1rem]">
              <MdOutlineCardMembership size={64} />
            </div>
            <h1 className="text-[1.5rem] text-red-400 text-center">
              Membership
            </h1>
            <p className="text-center">
              JRS, Platforms. A member of NGO- Forum, a partner on UN, Partners
              portal, a member of Education cluster, protection cluster and
              other clusters .a member of National Education Coalition ,NEC
              having Humanitarian ID under UNOCHA.
            </p>
          </div>
          <div className="p-[1rem] bg-white w-[100%] relative pt-[1.5rem]">
            <div className=" absolute top-[-2rem] text-gray-900 left-[1rem]">
              <MdOutlineTaskAlt size={64} />
            </div>
            <h1 className="text-[1.5rem] text-red-400 text-center">Role</h1>
            <p className="text-center">
              JSR offers equal opportunities to people regardless of their race,
              religion, ethnicity, tribe, gender, sex, and political
              affiliations in the course of delivering humanitarian services.
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-gray-100 px-[15%] flex flex-col gap-[2rem] py-[3rem]">
        {abouts.map((about, index) => (
          <AboutUsCard item={about} index={index} />
        ))}
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
