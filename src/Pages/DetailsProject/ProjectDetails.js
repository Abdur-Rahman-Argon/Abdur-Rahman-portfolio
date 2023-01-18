import React from "react";

const ProjectDetails = () => {
  return (
    <div>
      <div>
        <div class="flex flex-col gap-10 md:flex-row md:p-10 px-3">
          <div class="flex-1">
            <img
              src="https://i.ibb.co/1Z1tq2L/Store-2.png"
              alt=""
              class="w-10/12 mx-auto"
            />
          </div>
          <div class="flex-1">
            <div>
              <h1 class=" text-5xl font-semibold my-3 text-orange-500">
                P-Store House
              </h1>
              <h4 class="text-lg text-green-600 font-medium">
                #1 MERN Project
              </h4>
            </div>

            {/*  */}
            <div class="w-11/12 mx-auto md:mx-0">
              <div class="flex gap-2 lg:gap-9 my-5">
                <a href="https://product-store-house.web.app/">
                  <button class="btn btn-outline normal-case text-xs md:text-lg text-cyan-700">
                    Live Preview
                  </button>
                </a>
                <a href="https://product-store-house.web.app/">
                  <button class="btn btn-outline normal-case text-xs md:text-lg text-cyan-700">
                    Client Site Code
                  </button>
                </a>
                <a href="https://product-store-house.web.app/">
                  <button class="btn btn-outline normal-case text-xs md:text-lg text-cyan-700">
                    Server Site Code
                  </button>
                </a>
              </div>
            </div>

            {/*  */}
            <div className="mt-8">
              <h4 class="text-2xl text-cyan-600 font-medium">Key Features:</h4>
              <ul class="list-disc pl-8">
                <li class=" my-1 text-sm md:text-base font-medium text-gray-400 ">
                  {"o"}
                </li>
              </ul>
            </div>

            {/*  */}
            <div className="mt-8">
              <h4 class="text-lg mt-5 ml-2 text-cyan-600 font-medium">
                Client Site Technologies :
              </h4>
              <ul class=" my-2 list-none ml-2 flex gap-2 flex-wrap">
                <li class=" text-sm md:text-base font-medium text--400 bg-green-800 px-2 py-1 rounded-full ">
                  HTML5
                </li>
              </ul>
            </div>

            {/*  */}
            <div className="mt-8">
              <h4 class="text-lg mt-5 ml-2 text-cyan-600 font-medium">
                Server Site Technologies :
              </h4>
              <ul class=" m-2 list-none flex gap-2 flex-wrap">
                <li class=" text-sm md:text-base font-medium text--400 bg-green-800 px-2 py-1 rounded-full ">
                  Node.Js
                </li>
              </ul>
            </div>

            {/*  */}
            <div className="mt-8">
              <h4 class="text-lg mt-5 ml-2 text-cyan-600 font-medium">
                Usage Tools & Software :
              </h4>
              <ul class=" m-2 list-none flex gap-2 flex-wrap">
                <li class=" text-sm md:text-base font-medium text--400 bg-green-800 px-2 py-1 rounded-full ">
                  Node.Js
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 class=" text-center text-4xl font-semibold text-cyan-700 mt-10">
            Others Features
          </h2>
        </div>
        <div class="text-right mr-10 my-10">
          <button class="btn btn-wide btn-outline text-green-700 normal-case ">
            See More Project Preview
            <i class="fa-solid fa-arrow-right font-extrabold ml-2 text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
