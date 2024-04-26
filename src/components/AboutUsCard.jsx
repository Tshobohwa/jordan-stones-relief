import React from "react";

const AboutUsCard = ({ item, index }) => {
  const { title, image, text, list } = item;
  return (
    <div className=" grid grid-cols-2 w-[100%] gap-4">
      <img
        src={image}
        alt={title}
        className="h-[20vw] object-cover object-center w-full"
      />
      <div className={`flex flex-col ${index % 2 === 1 && "order-first"}`}>
        <h2 className=" text-[2rem] font-semibold text-gray-900">{title}</h2>
        <p>{text}</p>
        {list && (
          <ul className=" ml-[5rem] list-disc">
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AboutUsCard;
