import React from "react";

const HomeCard = ({ title, text, img }) => {
  return (
    <div className="w-[30%] relative z-0">
      <img
        src={img}
        alt={title}
        className=" border-b-[20px] border-b-red-400 w-[100%] h-[20vw] object-cover object-center"
      />
      <div className=" absolute top-0 py-[2rem] px-[3rem] text-white">
        <h2 className=" text-xl">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomeCard;
