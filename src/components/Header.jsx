import React from "react";

const Header = () => {
  return (
    <header className=" w-full h-[5rem] bg-gray-900 flex justify-between px-[2rem] items-center fixed top-0">
      <p className="text-2xl font-bold text-white">Jordan Stones Relief</p>
      <ul className=" flex gap-5 text-white">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">What we do</a>
        </li>
        <li>
          <a href="">Where we work</a>
        </li>
      </ul>
      <button className="h-[3rem] bg-red-400 text-white font-semibold text-lg px-5 rounded-md">
        Donate now
      </button>
    </header>
  );
};

export default Header;
