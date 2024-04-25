import React from "react";
import { Link } from "react-router-dom";

const ReadMoreLink = ({ path }) => {
  return (
    <Link to={path}>
      <div className="h-[2.5rem] rounded-[1.25rem] bg-gray-900 flex items-center justify-center text-monserat text-white text-[1rem] px-[3rem] cursor-pointer">
        Read more
      </div>
    </Link>
  );
};

export default ReadMoreLink;
