import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div id="up"></div>
      <Navbar />
      <Outlet />
      <div className=" fixed  bottom-10 right-16">
        <a href="#up">
          <button className=" cursor-pointer px-2 text-2xl text-green-700">
            <i className="fa-solid fa-arrow-up-from-bracket "></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
