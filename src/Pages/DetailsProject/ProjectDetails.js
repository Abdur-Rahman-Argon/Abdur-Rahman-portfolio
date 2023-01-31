import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../utils/useProduct";
import OthersFeature from "./OthersFeature";

const ProjectDetails = () => {
  const { id } = useParams();

  const [data] = useProduct();

  const project = data?.find((p) => p._id === id);
  // console.log(project);

  return (
    <div>
      <div>
        <div class="flex flex-col gap-10 md:flex-row md:p-10 px-3">
          <div class="flex-1">
            <img src={project?.imgURL} alt="" class="w-10/12 mx-auto" />
            <p className=" text-center font-medium my-4">
              {project?.imgCaption}{" "}
            </p>
          </div>
          <div class="flex-1">
            <div>
              <h1 class=" text-5xl font-semibold my-3 text-orange-500">
                {project?.projectTittle}
              </h1>
              <h4 class="text-lg text-green-600 cursor-pointer font-medium">
                #{project?._id} {project?.projectKeyword}
              </h4>
            </div>

            {/*  */}
            <div class="w-11/12 mx-auto md:mx-0">
              <div class="flex gap-2 lg:gap-9 my-5">
                <a href={project?.liveSiteLink}>
                  <button class="btn btn-outline normal-case text-xs md:text-lg text-cyan-700">
                    Live Preview
                  </button>
                </a>
                <a href={project?.clientSiteLink}>
                  <button class="btn btn-outline normal-case text-xs md:text-lg text-cyan-700">
                    Client Site Code
                  </button>
                </a>

                {project?.serverSiteLink && (
                  <a href={project?.serverSiteLink}>
                    <button class="btn btn-outline normal-case text-xs md:text-lg text-cyan-700">
                      Server Site Code
                    </button>
                  </a>
                )}
              </div>
            </div>

            {/*  */}
            <div className="mt-8">
              <h4 class="text-2xl text-cyan-600 font-medium">Key Features:</h4>
              <ul class="list-disc pl-8">
                {project?.KeyFeatures?.map((f) => (
                  <li class=" my-1 text-sm md:text-base font-medium text-gray-400 ">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/*  */}
            <div className="mt-8">
              <h4 class="text-lg mt-5 ml-2 text-cyan-600 font-medium">
                Client Site Technologies :
              </h4>
              <ul class=" my-2 list-none ml-2 flex gap-2 flex-wrap">
                {project?.ClientSiteTechnologies?.map((t) => (
                  <li class=" text-sm md:text-base font-medium text--400 bg-green-800 px-2 py-1 rounded-full ">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/*  */}
            {project?.serverSiteLink && (
              <div className="mt-8">
                <h4 class="text-lg mt-5 ml-2 text-cyan-600 font-medium">
                  Server Site Technologies :
                </h4>
                <ul class=" m-2 list-none flex gap-2 flex-wrap">
                  {project?.ServerSiteTechnologies?.map((t) => (
                    <li class=" text-sm md:text-base font-medium text--400 bg-green-800 px-2 py-1 rounded-full ">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/*  */}
            <div className="mt-8">
              <h4 class="text-lg mt-5 ml-2 text-cyan-600 font-medium">
                Usage Tools & Software :
              </h4>
              <ul class=" m-2 list-none flex gap-2 flex-wrap">
                {project?.UsageToolsSoftware?.map((t) => (
                  <li class=" text-sm md:text-base font-medium text--400 bg-green-800 px-2 py-1 rounded-full ">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="divider"></div>

        {/*  */}
        {project?.othersFeatures?.length > 0 && (
          <div>
            <h2 class=" text-center text-4xl font-semibold text-cyan-700 my-5">
              Others Features
            </h2>
            <div>
              {project?.othersFeatures?.map((data) => (
                <OthersFeature data={data} />
              ))}
            </div>
          </div>
        )}

        {/*  */}
        <div class="text-right mr-10 my-10 pb-9 ">
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
