import React, { useState, useEffect } from "react";
import Project from "./Project";
import useProduct from "../../utls/useProduct";

const Projects = () => {
  const [data] = useProduct();

  return (
    <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 ">
      {data?.map((p) => (
        <Project projectInfo={p} />
      ))}
    </div>
  );
};

export default Projects;
