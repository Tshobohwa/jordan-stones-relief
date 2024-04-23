import React from "react";

const HomeItem = ({ index, item }) => {
  const { title, text, image } = item;
  return (
    <div className=" w-full grid grid-cols-2 gap-[2vw]">
      <div className=" w-[46vw] h-[30vw] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-[100%] h-[100%] object-cover object-center"
        />
      </div>
      <div className="">
        <h3 className=" text-[2rem] font-semibold">{title}</h3>
        <p className=" text-[1.25rem]">{text}</p>
      </div>
    </div>
  );
};

export default HomeItem;
