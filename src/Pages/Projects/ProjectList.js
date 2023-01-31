import React from "react";
import Project from "../../components/Projects/Project";
import useProduct from "../../utils/useProduct";

const ProjectList = ({ data }) => {
  //   const [data] = useProduct();

  return (
    <div className="hero-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 ">
      {data?.map((p) => (
        <Project projectInfo={p} />
      ))}
    </div>
  );
};

export default ProjectList;
