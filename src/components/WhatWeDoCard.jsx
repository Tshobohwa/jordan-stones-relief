import React from "react";

const WhatWeDoCard = ({ WhatWeDo }) => {
  const { image, title, text } = WhatWeDo;
  return (
    <div className=" p-4 bg-white shadow-md">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default WhatWeDoCard;
