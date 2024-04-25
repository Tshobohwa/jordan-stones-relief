import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" w-[100%] bg-gray-900 text-gray-50 grid grid-cols-3">
      <div>
        <h2>Jordan Stone Relief</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem amet
          id repellat corrupti autem, omnis ad, praesentium molestias fugiat
          voluptatibus quasi enim recusandae modi. Cumque.
        </p>
        <ul>
          <li>
            <a href="#">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="#">instagram</a>
          </li>
          <li>
            <a href="#">facebook</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>CONTACT US</h2>
      </div>
      <div>
        <h2>DONATE NOW</h2>
      </div>
    </footer>
  );
};

export default Footer;
