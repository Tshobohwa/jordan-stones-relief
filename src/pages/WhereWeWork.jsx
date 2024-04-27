import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import charity_bw from "../assets/images/charity-bw.jpg";
import south_sudan from "../assets/images/south-sudan.png";
import areasOfOperation from "../data/areasOfOperation";
import AreaOfOperation from "../components/AreaOfOperation";

const WhereWeWork = () => {
  return (
    <>
      <Header />
      <section className=" relative">
        <img
          src={charity_bw}
          className=" h-[100vh] w-[100vw] object-cover object-center"
        />
        <div className=" absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black/50">
          <h1 className=" text-5xl font-light text-gray-50 text-monserat">
            Where we work
          </h1>
        </div>
      </section>
      <section className=" py-[3rem]">
        <div className=" w-[80%] mx-auto grid grid-cols-2 gap-[2rem] ">
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
          </div>
        </div>
      </section>
      <section className=" flex flex-col items-center gap-[2rem] py-[2rem]">
        <h3 className=" text-monserat text-4xl text-gray-900 text-center mb-[2rem]">
          Areas of operation
        </h3>
        <table className=" border border-gray-900">
          <thead className=" bg-red-400 text-[1.25rem] font-semibold">
            <tr className=" border border-gray-900">
              <td className=" border-2 border-gray-900 px-[2rem] h-[3rem]">
                S/No
              </td>
              <td className=" border-2 border-gray-900 px-[3rem] h-[3rem]">
                STATE
              </td>
              <td className=" border-2 border-gray-900 px-[3rem] h-[3rem]">
                COUNTY
              </td>
              <td className=" border-2 border-gray-900 px-[3rem] h-[3rem]">
                PAYAM
              </td>
              <td className=" border-2 border-gray-900 px-[3rem] h-[3rem]">
                FOCAL POINT
              </td>
            </tr>
          </thead>
          <tbody>
            {areasOfOperation.map((area, index) => (
              <AreaOfOperation area={area} index={index} />
            ))}
          </tbody>
        </table>
      </section>

      <Footer />
    </>
  );
};

export default WhereWeWork;
