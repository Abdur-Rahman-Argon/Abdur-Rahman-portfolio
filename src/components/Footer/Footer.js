import React from "react";

const Footer = () => {
  const year = new Date().toDateString().slice(10, 15);

  return (
    <footer>
      <div className="footer footer-center py-4   shadow-2xl text-base-content">
        <div className="flex  flex-col md:flex-row md:mx-20 gap-5 lg:gap-20 text-white">
          <div className=" text-left w-8/12 mx-auto">
            <h1 className=" text-2xl font-medium my-5 md:my-2 lg:my-7">
              My Career
            </h1>
            <p className=" text-lg">
              I started my coding journey in December 2021. Now, I am learn Web
              development. I want to be a full stack web developer.
            </p>
          </div>
          <div className="flex-1 text-left">
            <h1 className=" text-2xl font-medium my-5">FOLLOW ME</h1>
            <div className="flex flex-row gap-8 my-5">
              <div className=" text-2xl md:text-3xl lg:text-4xl text-white hover:text-green-700">
                <a href="https://web.facebook.com/profile.php?id=100081629926793">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className=" text-2xl md:text-3xl lg:text-4xl text-white hover:text-green-700">
                <a href="https://twitter.com/AbdurRahmanMe7">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className=" text-2xl md:text-3xl lg:text-4xl text-white hover:text-green-700">
                <a href="https://www.linkedin.com/in/md-abdur-rahman-8a1645240/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className=" text-2xl md:text-3xl lg:text-4xl text-white hover:text-green-700">
                <a href="https://github.com/Abdur-Rahman-Argon">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-center flex items-center justify-center  w-full font-semibold text-xs md:text-lg">
          Copyright © {year} - All right reserved by
          <span className="text-orange-500"> Abdur Rahman</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
