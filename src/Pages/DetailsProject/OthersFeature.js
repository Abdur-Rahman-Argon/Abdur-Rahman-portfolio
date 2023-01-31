import React from "react";

const OthersFeature = ({ data }) => {
  return (
    <div className=" w-11/12 mx-auto flex flex-col justify-center items-center">
      <div>
        <img src={data.imgURL} alt="" className=" w-10/12 mx-auto" />
        <p className=" text-lg font-medium text-center my-2 ">
          {data.imgCaption}
        </p>
      </div>
      <div>
        <h2 className=" my-2 font-semibold text-xl text-center">
          {" "}
          {data.featureTittle}
        </h2>
        <p className=" font-normal text-base text-center">{data.description}</p>
      </div>
    </div>
  );
};

export default OthersFeature;
