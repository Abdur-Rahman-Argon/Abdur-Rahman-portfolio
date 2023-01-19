import React from "react";
import resume from "../../file/Abdur-Rahman-Front-End-Web-Developer-Resume.pdf";
import { saveAs } from "file-saver";

const About = () => {
  const saveFile = () => {
    saveAs(resume);
  };

  return (
    <div>
      <div className="hero-content flex-col lg:flex-row ">
        <div className=" flex-1">
          <img
            src="https://i.ibb.co/Fmk5rGr/about.png"
            className="w-48 w-80 lg:w-96 mx-auto  rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className=" flex-1">
          <div className=" text-left">
            <h3 className="  text-gray-500 text-[15px]  rounded-l-full rounded-tr-full  font-medium">
              Who am I?
            </h3>
            <h1 className="   text-2xl font-bold">
              I am a Professional Web Developer
            </h1>
          </div>
          <p className="py-6 text-left w-9/12">
            Front-end Developer with proven skills-building professional MERN
            projects. Capable of continuous learning new and updated
            technologies as I possess tremendous zeal about technology.
            <br />
            <br />
            Passionate about learning and developing with a desire to apply
            skills. Eger to tackle more complex problems and continue to find
            ways to maximize user efficiency.
          </p>

          <div className="flex items-center gap-4 lg:gap-8 my-5">
            <button
              onClick={saveFile}
              className=" flex items-center gap-1 btn bg-green-700"
            >
              Download CV
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
            <div className=" text-2xl md:text-3xl lg:text-4xl text- hover:text-green-700">
              <a href="https://web.facebook.com/profile.php?id=100081629926793">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className=" text-2xl md:text-3xl lg:text-4xl text- hover:text-green-700">
              <a href="https://twitter.com/AbdurRahmanMe7">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className=" text-2xl md:text-3xl lg:text-4xl text- hover:text-green-700">
              <a href="https://www.linkedin.com/in/md-abdur-rahman-8a1645240/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className=" text-2xl md:text-3xl lg:text-4xl text- hover:text-green-700">
              <a href="https://github.com/Abdur-Rahman-Argon">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
