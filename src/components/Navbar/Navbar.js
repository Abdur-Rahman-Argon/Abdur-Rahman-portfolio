import React from "react";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Contact Me</a>
            </li>
            <li>
              <a href="/">Education</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
          </ul>
        </div>

        <a href="/" className="btn btn-ghost normal-case text-xl">
          Md. Abdur Rahman
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Education</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https:/drive.google.com/file/d/1SrhuJbqwv6M_Hi_opTWxYa1T0rNItAPR/view?usp=sharing"
          className="btn btn-ghost normal-case text-sm md:text-xl text-orange-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"></svg>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
