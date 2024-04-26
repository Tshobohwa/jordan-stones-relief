import React from "react";

const AreaOfExpertize = ({ expertize, index }) => {
  const { title, image, fullText } = expertize;
  return (
    <div className=" grid grid-cols-2 gap-[2rem]">
      <img
        src={image}
        alt={title}
        className=" w-[100%] h-[30vw] object-cover object-center"
      />
      <div className={` ${index % 2 !== 0 && "order-first"}`}>
        <h3 className=" text-[2rem] font-semibold text-red-400">{title}</h3>
        <p className=" text-[1.15rem]">{fullText}</p>
      </div>
    </div>
  );
};

export default AreaOfExpertize;
