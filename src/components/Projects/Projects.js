import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 ">
      {<Project />}
    </div>
  );
};

export default Projects;
