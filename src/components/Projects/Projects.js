import React, { useState, useEffect } from "react";
import Project from "./Project";
import useProduct from "../../utils/useProduct";

const Projects = () => {
  const [data] = useProduct();

  const small = data?.slice(0, 3);
  const medium = data?.slice(0, 4);
  const large = data?.slice(0, 6);

  return (
    <>
      <div className=" hidden lg:flex">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 ">
          {large?.map((p) => (
            <Project projectInfo={p} />
          ))}
        </div>
      </div>

      <div className=" hidden sm:flex lg:hidden">
        <div className="hero-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {medium?.map((p) => (
            <Project projectInfo={p} />
          ))}
        </div>
      </div>
      <div className=" flex sm:hidden">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {small?.map((p) => (
            <Project projectInfo={p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
