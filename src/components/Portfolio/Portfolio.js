import React from "react";
import ContactUs from "./ContactUs";
import { saveAs } from "file-saver";
import resume from "../../file/Abdur-Rahman-Front-End-Web-Developer-Resume.pdf";

const Portfolio = () => {
  const saveFile = () => {
    saveAs(resume);
  };
  return (
    <div className="  ">
      <header>
        <div className="hero my-10 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" flex-1">
              <img src="https://i.ibb.co/0FxzTnM/abdr-pic.png" />
            </div>

            <div className=" flex-1 text-left mt-8 mx-auto">
              <h3 className=" text-white text-[15px] bg-green-700 rounded-l-full w-28 p-3 rounded-tr-full  font-medium">
                Hello There !
              </h3>
              <h1 className="text-4xl my-2 font-bold">I'M Abdur Rahman</h1>
              <h1 className="text-2xl ">Font End Webdeveloper</h1>
              <div>
                <ul>
                  <li className="my-2">
                    {" "}
                    <span className="">Address:</span>{" "}
                    <span className="mr-2">
                      Joypurhat, Rajshahi, Dhaka, Bangladesh
                    </span>{" "}
                  </li>
                  <li className="my-2">
                    {" "}
                    <span className="">Phone:</span>{" "}
                    <span className="mr-2">+8801763378457</span>{" "}
                  </li>
                  <li className="my-2">
                    {" "}
                    <span className="">Email:</span>{" "}
                    <span className="mr-2">abdurrahmanargon7@gmail.com</span>{" "}
                  </li>
                  <li className="my-2">
                    {" "}
                    <span className="">Website:</span>{" "}
                    <span className="mr-2">https//www.website.com/</span>{" "}
                  </li>
                </ul>
              </div>

              {/* <p className="py-6">
                I am a font end web developer. now i am training in
                programing-hero's webdevelopement chorse. Now I hope, I can
                working very easy in a job.
              </p> */}
              <button className=" my-6 py-2 btn bg-green-700">
                See About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="hero my-10 mx-20 ">
          <div className="hero-content flex-col lg:flex-row ">
            <div className=" flex-1">
              <img
                src="https://i.ibb.co/Fmk5rGr/about.png"
                className="w-40 lg:w-96 mx-auto  rounded-lg shadow-2xl"
              />
            </div>
            <div className=" flex-1">
              <h1 className="text-4xl  my-5 font-bold">About Me</h1>
              <p className="py-6 text-left w-9/12">
                I am MERN stack Web-developer, I am offering fully functional
                dynamic MERN stack websites. How I'm helping you- <br /> ??? Fully
                functional MERN stack personal/business blog websites. <br /> ???
                Professional e-commerce site with payment integration system.{" "}
                <br /> ??? Professional MERN stack websites for doctors'
                appointments. <br /> ??? Inventory Management system for wholesale
                business using MERN stack. ??? Point of sale management system for
                retail business. <br />??? Professional MERN stack Websites for a
                consultancy business.
              </p>
              <button onClick={saveFile} className="btn bg-green-700">
                Download Resume{" "}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="hero my-20">
          <h1 className="text-4xl my-5 font-bold">My Skill</h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section>

      <section>
        <div className="hero my-10">
          <h1 className="text-4xl my-5 font-bold">My Educational</h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section>

      <section>
        <div className="hero my-10 ">
          <h1 className="text-4xl my-5 font-bold">My Project</h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section>

      <section>
        <div className="hero my-10 ">
          <h1 className="text-4xl my-5 font-bold">Review </h1>
          <div className="hero-content flex-col lg:flex-row "></div>
        </div>
      </section>

      <section>
        <div className="w-full my-10 ">
          <ContactUs></ContactUs>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
