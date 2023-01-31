import React from "react";

import Banner from "../Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";
import SideInfo from "../Contact/SideInfo";
import Footer from "../Footer/Footer";
import Education from "../Qualification/Education";
import Training from "../Qualification/Training";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import { useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [resent, setResent] = useState(true);
  const [demo, setDemo] = useState(false);

  const change1 = () => {
    setResent(true);
    setDemo(false);
  };

  const change2 = () => {
    setResent(false);
    setDemo(true);
  };

  return (
    <div className="  ">
      {/*  */}
      <header className=" mx-6 my-10">
        <Banner />
      </header>

      {/*  */}
      <section
        id="about"
        className="text-black w-full mx-auto mt-0 bg-gray-200 px-5 py-4"
      >
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-600 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            Get to Know Me
          </h3>
          <h1 className=" text-xl md:text-4xl uppercase  text-orange-400 font-bold text-center">
            About Me
          </h1>
        </div>
        <About />
      </section>

      <section
        id="skills"
        className="text-white w-full mx-auto mt-0 bg-slate-900 my-10"
      >
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-600 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I can do
          </h3>
          <h1 className=" text-lg md:text-4xl uppercase  text-orange-400 font-bold text-center">
            My Skills
          </h1>
        </div>
        <Skills />
      </section>

      <section
        id="education"
        className="text-black w-full mx-auto mt-0 bg-gray-200 pb-8 pt-1"
      >
        <div className=" text-center mx-20 my-8 ">
          <h3 className="  text-gray-600 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I Learn
          </h3>
          <h1 className=" text-lg md:text-4xl uppercase  text-orange-500 font-bold text-center">
            EDUCATION & Learning
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-around px-8 sm:px-16 gap-10">
          <Education />
          <Training />
        </div>
      </section>

      {/* projects */}
      <section id="resent-project" className=" my-10">
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-600 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I made?
          </h3>
          <h1 className=" text-lg md:text-3xl my-[4px] uppercase  text-orange-400 font-bold text-center">
            Portfolio Projects Show
          </h1>
        </div>
        <div>
          <p className=" w-10/12 lg:6/12 mx-auto text-center font-normal">
            FWR blocks contains a variety of blocks and elements that you can
            mix and match to create various layouts. FWR blocks follow a similar
            pattern and design style so you can reuse it in your websites and
            web applications.
          </p>
        </div>
        <div className=" flex justify-center items-center gap-2 md:gap-10 my-8">
          <button
            onClick={change1}
            className={` px-8 py-3 border-[1px] ${
              resent
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }    rounded-md text-center font-semibold`}
          >
            Resent Project
          </button>
          <button
            onClick={change2}
            className={` px-8 py-3 border-[1px] ${
              demo
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            Demo Project
          </button>
        </div>
        <div className="mx-8 lg:mx-1 gap-4 md:gap-10">
          <Projects />
          <div class="text-center mr-10 my-10 pb-9 ">
            <Link
              to="/projects"
              class="btn btn-wide btn-outline text-green-700 normal-case "
            >
              See More Project Preview
              <i class="fa-solid fa-arrow-right font-extrabold ml-2 text-xl"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* <section id="demo-project" className=" my-10">
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-600 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I made
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            Demo Project
          </h1>
        </div>
      </section> */}

      <section
        id="contact"
        className="text-black w-full mx-auto mt-0 bg-gray-200 py-4"
      >
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-600 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            Get in Touch
          </h3>
          <h1 className=" text-lg sm:text-4xl uppercase  text-orange-400 font-bold text-center">
            Contact Me
          </h1>
        </div>
        <div className="flex my-5  flex-col md:flex-row items-start mx-2 md:gap-16 md:mx-10">
          <SideInfo />
          <Contact />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
