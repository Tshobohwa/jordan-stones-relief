import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" w-[100%] bg-gray-900 text-gray-50 gap-[2rem] grid lg:grid-cols-3 p-[1.5rem]">
      <div>
        <div>
          <h2 className=" text-[1.5rem]">JORDAN STONES RELIEF</h2>
          <i>Humanity is our priority</i>
        </div>
        <ul className=" pl-[3rem] py-[1rem]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/what-we-do">What we do</Link>
          </li>
          <li>
            <Link to="/where-we-work">Where we work</Link>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col gap-[1rem]">
        <h2>CONTACT US</h2>
        <ul className=" flex flex-col gap-[0.5rem]">
          <li className=" flex gap-[0.5rem]">
            <a
              href="mailto:jsr.juba@hqs.org"
              className=" flex gap-[0.5rem] items-center"
            >
              <BiLogoGmail size={16} />
              <p>jsr.juba@hqs.org</p>
            </a>
          </li>
          <li className=" flex gap-[0.5rem]">
            <a
              href="tel:+211929702237"
              className=" flex gap-[0.5rem] items-center"
            >
              <BsFillTelephoneFill />
              <p>+211 929 702 237</p>
            </a>
          </li>
          <li className=" flex gap-[0.5rem]">
            <a
              href="tel:+211929702237"
              className=" flex gap-[0.5rem] items-center"
            >
              <BsFillTelephoneFill />
              <p>+211 929 702 237</p>
            </a>
          </li>
          <li className=" flex gap-[0.5rem]">
            <FaLocationDot size={16} />
            <p>
              Muniki SDA Roudabout NDA compound,
              <br /> Juba, South Sudan
            </p>
          </li>
        </ul>
        <div className=" flex gap-[1rem]">
          <a
            href=""
            className=" w-[48px] h-[48px] border rounded-[24px] border-white items-center justify-center flex"
          >
            <FaXTwitter size={"24px"} />
          </a>
          <a
            href=""
            className=" w-[48px] h-[48px] border rounded-[24px] border-white items-center justify-center flex"
          >
            <FaInstagram size={"24px"} />
          </a>
          <a
            href=""
            className=" w-[48px] h-[48px] border rounded-[24px] border-white items-center justify-center flex"
          >
            <FaFacebookF size={"24px"} />
          </a>
          <a
            href=""
            className=" w-[48px] h-[48px] border rounded-[24px] border-white items-center justify-center flex"
          >
            <FaLinkedinIn size={"24px"} />
          </a>
        </div>
      </div>
      <div className=" flex flex-col gap-[1.2rem]">
        <h2>DONATE NOW</h2>
        <p className=" text-monserat text-[0.8rem]">
          Join us in making a life-changing difference. Together, we can bring
          about positive change and build a brighter future for South Sudan.
          Please donate today and be a part of this vital mission
        </p>
        <button className=" px-[2rem] h-[3rem] bg-red-400 rounded-[1.5rem] text-lg text-white w-fit">
          Donate now
        </button>
      </div>
    </footer>
  );
};

export default Footer;
