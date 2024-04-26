import React from "react";

const ExistingProject = ({ project }) => {
  const { title, list } = project;
  return (
    <div className=" p-[2rem] bg-white ">
      <h3 className=" font-semibold text-[1.25rem]  mb-[1.5rem]">{title}</h3>
      <ul className=" list-disc ml-[2.5rem]">
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingProject;
