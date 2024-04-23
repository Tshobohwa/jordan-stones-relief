import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoLocationSharp, IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-900 text-white ">
      <div className="w-full grid grid-cols-4 pt-6 pb-3 gap-2 px-7">
        <div>
          <h4>JORDAN STONES RELIEF</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            corporis assumenda? Asperiores magnam doloribus obcaecati suscipit
            ut modi quia. Fugiat voluptatum libero beatae?
          </p>
        </div>
        <div>
          <p>CONNECT WITH US</p>
          <ul>
            <li>
              <RiTwitterXLine />
              <p>x (formerly twitter)</p>
            </li>
            <li>
              <IoLogoInstagram />
              <p>instagram</p>
            </li>
            <li>
              <FaFacebookSquare />
              <p>facebook</p>
            </li>
            <li>
              <FaLinkedin />
              <p>linkedin</p>
            </li>
          </ul>
        </div>
        <div>
          <p className=" mb-4">CONTACT US</p>
          <ul>
            <li>
              <a href="tel:+211929702237" className=" gap-2 flex">
                <BsTelephoneFill />
                <p>+211-929-702-237</p>
              </a>
            </li>
            <li>
              <a href="mailto:jsr.juba@gmail.com" className="gap-2 flex">
                <SiGmail />
                <p>jsr.juba@gmail.com</p>
              </a>
            </li>
            <li>
              <div className="flex gap-2">
                <IoLocationSharp size={"48px"} />
                <p>
                  Tong Piny, SDA, roundabout, in Mine Action Authority (SSMAA)
                  compound, opposite, civil defense, Juba, South-Sudan
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p>DONATE</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            unde itaque laborum sint pariatur quis quam a doloribus at aliquid!
          </p>
          <button className=" h-[3rem] px-[2rem] rounded-md bg-red-400 my-4">
            Donate now
          </button>
        </div>
      </div>
      <div className="h-[3rem] w-full bg-gray-950 flex items-center justify-center text-white">
        <p>&copy;2024 | all right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
