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

const Portfolio = () => {
  return (
    <div className="  ">
      {/*  */}
      <header className=" my-10">
        <Banner />
      </header>

      {/*  */}
      <section id="#about" className=" my-10">
        <div className=" text-center mx-20 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            Get to Know Me
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            About Me
          </h1>
        </div>
        <About />
      </section>

      <section id="#skills" className=" my-10">
        <div className=" text-center mx-20 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I can do
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            My Skills
          </h1>
        </div>
      </section>

      <section id="#education" className=" my-10">
        <div className=" text-center mx-20 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I made
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            EDUCATION & TRAINING
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around px-16 gap-10">
          <Education />
          <Training />
        </div>
      </section>

      <section id="#resent-project" className=" my-10">
        <div className=" text-center mx-20 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I made
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            Recent Project
          </h1>
        </div>
        <Projects />
      </section>

      <section id="#demo-project" className=" my-10">
        <div className=" text-center mx-20 ">
          <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
            What I made
          </h3>
          <h1 className="text-4xl uppercase  text-orange-400 font-bold text-center">
            Demo Project
          </h1>
        </div>
      </section>

      <section id="#contact" className=" my-10">
        <div className=" text-center mx-20 ">
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
