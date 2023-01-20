import React from "react";

const Training = () => {
  return (
    <div className="flex-1">
      <div className="  my-0 py-0">
        <h1 className="text-3xl font-semibold text-gray-700 ">
          Training & Course
        </h1>
        <div className="mt-8 ">
          <div className="w-10/12 px-5 border-l-2 relative border-orange-500">
            <div className="text-orange-500 absolute text-2xl -top-4 -left-4">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h2 className=" text-xl font-semibold">
              Complete Web Development Course With Jhankar Mahbub.
            </h2>
            <h2 className=" text-lg">
              Programing-Hero /
              <span className="text- text-gray-500">
                January 2022 to May 2022.
              </span>
            </h2>
            <p className=" text-[14px] text-gray-500">
              Programming Hero Is my Best Training Center. Our trainer Ghankar
              Mahbub sir is best trainer. He present every topic very smartly.
              Every team member are always supported us. I am satisfied got
              their service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
