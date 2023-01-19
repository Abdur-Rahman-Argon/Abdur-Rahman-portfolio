import React from "react";

import Banner from "../Banner/Banner";
import About from "../About/About";
import Contact from "../Contact/Contact";
import SideInfo from "../Contact/SideInfo";
import Footer from "../Footer/Footer";
import Education from "../Qualification/Education";
import Training from "../Qualification/Training";
import Projects from "../Projects/Projects";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import { useState } from "react";

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
      <header className=" my-10">
        <Banner />
      </header>

      {/*  */}
      <section
        id="#about"
        className="text-black w-full mx-auto mt-0 bg-gray-200 py-4"
      >
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            Get to Know Me
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            About Me
          </h1>
        </div>
        <About />
      </section>

      <section
        id="#skills"
        className="text-white w-full mx-auto mt-0 bg-slate-900 my-10"
      >
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I can do
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            My Skills
          </h1>
        </div>
        <Skills />
      </section>

      <section
        id="#education"
        className="text-black w-full mx-auto mt-0 bg-gray-200 py-4"
      >
        <div className=" text-center mx-20 my-4 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I Learn
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            EDUCATION & Learning
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around px-16 gap-10">
          <Education />
          <Training />
        </div>
      </section>

      <section id="#resent-project" className=" py-4">
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I made?
          </h3>
          <h1 className="text-3xl my-[4px] uppercase  text-orange-400 font-bold text-center">
            Portfolio Projects Show
          </h1>
        </div>
        <div>
          <p className=" w-8/12 lg:6/12 mx-auto text-center">
            FWR blocks contains a variety of blocks and elements that you can
            mix and match to create various layouts. FWR blocks follow a similar
            pattern and design style so you can reuse it in your websites and
            web applications.
          </p>
        </div>
        <div className=" flex justify-center items-center gap-10 my-8">
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
        <div>
          <Projects />
          <div class="text-center mr-10 my-5  ">
            <button class="btn btn-wide btn-outline text-green-700 normal-case ">
              See More Project Preview
              <i class="fa-solid fa-arrow-right font-extrabold ml-2 text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      <section
        id="#contact"
        className="text-black w-full mx-auto mt-0 bg-gray-200 py-4"
      >
        <div className=" text-center mx-20 my-5 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            Get in Touch
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            Contact Me
          </h1>
        </div>
        <div className="flex my-5  flex-col md:flex-row items-start md:gap-16 mx-10">
          <SideInfo />
          <Contact />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
