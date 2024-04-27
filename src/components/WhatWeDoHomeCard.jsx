import React from "react";

const WhatWeDoHomeCard = ({ action }) => {
  const { image, title, text } = action;
  return (
    <div className=" w-[100%] bg-white">
      <img
        src={image}
        alt={title}
        className=" w-[100%] h-[70vw] lg:h-[20vw] object-cover object-center"
      />
      <div className=" p-[2rem] relative">
        <div className=" absolute h-[4rem] bg-white w-[80%] px-[1.5rem] top-[-2rem] flex items-center justify-center">
          <h3 className=" text-2xl text-gray-900">{title}</h3>
        </div>
        <p className=" text-monserat">{text}</p>
      </div>
    </div>
  );
};

export default WhatWeDoHomeCard;
