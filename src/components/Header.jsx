import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" w-full flex justify-between px-4 h-[5rem] items-center bg-gray-900 text-white fixed top-0 z-50">
      <h1 className=" text-2xl font-semibold">Jordan Stone Relief</h1>
      <ul className=" flex gap-[2rem]">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about-us"}>About us</Link>
        </li>
        <li>
          <Link to={"/what-we-do"}>What we do</Link>
        </li>
        <li>
          <Link to={"/where-we-work"}>Where we work</Link>
        </li>
      </ul>
      <button className=" h-[3rem] px-[1.5rem] rounded-md bg-red-400">
        Donate now
      </button>
    </header>
  );
};

export default Header;
