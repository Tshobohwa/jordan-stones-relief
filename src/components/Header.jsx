import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" w-full h-[5rem] bg-gray-900 flex justify-between px-[2rem] items-center fixed top-0 z-10">
      <p className="text-2xl font-bold text-white">Jordan Stones Relief</p>
      <ul className=" flex gap-5 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/what-we-do">What we do</Link>
        </li>
        <li>
          <Link to="/where-we-work">Where we work</Link>
        </li>
      </ul>
      <button className="h-[3rem] bg-red-400 text-white font-semibold text-lg px-5 rounded-md">
        Donate
      </button>
    </header>
  );
};

export default Header;
