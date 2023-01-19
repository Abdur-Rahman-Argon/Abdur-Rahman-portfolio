import React from "react";

const Skill = ({ skills, tittle }) => {
  return (
    <div className="md:ml-8 border-[1px] border-gray-700 px-4 py-2 flex-1 shadow-xl rounded-lg ">
      <div>
        <h1 className=" border-b-[1px] border-gray-800 pb-3 text-2xl font-semibold text-center my-3">
          {tittle}
        </h1>
      </div>

      <div className="grid grid-cols-2 justify-center items-start my-1">
        {skills.map((s) => (
          <div className="flex flex-col justify-center items-start my-1">
            <h2 className=" text-gray-400 font-bold flex flex-row justify-between text-lg">
              <span>
                <i class="fa-regular fa-circle-check mx-3"></i>
              </span>
              <span>{s.name}</span>
            </h2>
            <h3 className=" ml-10 text-gray-400 text-sm text-center">
              <span></span> <span>{s.level}</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
