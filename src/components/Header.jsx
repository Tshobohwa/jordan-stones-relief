import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleIsMenuOpened = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <header className=" w-full flex px-4 py-[1rem] bg-gray-900 text-white fixed top-0 z-50 flex-col lg:flex-row lg:justify-between lg:items-center">
      <h1 className=" text-2xl font-semibold hidden lg:inline-block">
        Jordan Stone Relief
      </h1>
      <div className=" w-full flex justify-between items-center lg:hidden">
        <h1 className=" text-2xl font-semibold lg:hidden">JSR</h1>
        {isMenuOpened ? (
          <button
            className=" border-2 border-white h-[3rem] w-[3rem] text-white flex items-center justify-center lg:hidden"
            onClick={toggleIsMenuOpened}
          >
            <IoIosClose size={64} />
          </button>
        ) : (
          <button
            className=" border-2 border-white h-[3rem] w-[3rem] text-white flex items-center justify-center lg:hidden"
            onClick={toggleIsMenuOpened}
          >
            <GiHamburgerMenu size={24} />
          </button>
        )}
      </div>
      <div
        className={` flex flex-col w-full gap-[1.5rem] items-left lg:hidden
      ${!isMenuOpened && "hidden"}
      `}
      >
        <ul className={` flex flex-col gap-[2rem] items-start`}>
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
      </div>
      <ul className="hidden lg:flex flex-col lg:flex-row gap-[2rem]">
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
      <button className=" hidden lg:block h-[3rem] px-[1.5rem] rounded-md bg-red-400">
        Donate now
      </button>
    </header>
  );
};

export default Header;
