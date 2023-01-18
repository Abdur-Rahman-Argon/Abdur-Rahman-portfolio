import React from "react";

const Project = () => {
  return (
    <div>
      <div class="md:ml-8 flex-1 relative overflow-hidden rounded-lg shadow-2xl hover:transform  hover:scale-105 ease-in-out duration-100 ">
        <div class=" overflow-hidden   w-full h-52">
          <img
            src="https://i.ibb.co/swHBBNB/shoping.png"
            class="w-full mx-auto  hover:translate-y-[-500px] animate-pulse duration-500 ease-in-out  relative "
            alt=""
          />
        </div>
        <div class="text-center my-3">
          <h1 class="text-2xl text-center font-semibold"> Shopping.com</h1>
          <div class="flex my-3 justify-between items-center px-5">
            <a href="https://manufacturer-assignment-12.web.app/">
              <button class="text-base text--600 font-medium btn bg-slate-800 hover:text-lime-400">
                Live Site
              </button>
            </a>
            <a
              class="text-base text-center text--600 font-medium btn hover:text-lime-400 bg-slate-800 "
              href="/projectDetails03"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
