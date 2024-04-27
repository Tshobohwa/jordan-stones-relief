import React from "react";

const AreaOfOperation = ({ area, index }) => {
  const { state, county, payam, focalPoint } = area;
  return (
    <tr>
      <td className=" border-2 border-gray-900 px-[2rem] h-[3rem]">
        {index + 1}
      </td>
      <td className=" border-2 border-gray-900 px-[3rem] h-[3rem]">{state}</td>
      <td className=" border-2 border-gray-900 px-[3rem] h-[3rem]">{county}</td>
      <td className=" border-2 border-gray-900 px-[3rem] h-[3rem]">{payam}</td>
      <td className=" border-2 border-gray-900 px-[3rem] h-[3rem]">
        {focalPoint}
      </td>
    </tr>
  );
};

export default AreaOfOperation;
