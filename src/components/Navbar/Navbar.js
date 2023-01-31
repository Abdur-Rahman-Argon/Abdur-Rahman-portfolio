import React from "react";
import useProduct from "../../utils/useProduct";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <a href="/#skills"> Skills </a>
      </li>
      <li>
        <a href="/#education">Education</a>
      </li>
      <li>
        <a href="/#resent-project">Resent Project</a>
      </li>

      <li>
        <a href="/#about">About</a>
      </li>

      <li>
        <a href="/#contact">Contact Me</a>
      </li>

      <li>
        <Link to="/projects">Projects</Link>
      </li>

      <li>
        <a href="/">Blogs</a>
      </li>
    </>
  );

  return (
    <div className="navbar md:px-10">
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
            className="menu menu-compact bg-slate-700 dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>

        <Link to="/">
          {" "}
          <h1 className=" text-sm sm:text-lg"> Md. Abdur Rahman </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https:/drive.google.com/file/d/1SrhuJbqwv6M_Hi_opTWxYa1T0rNItAPR/view?usp=sharing"
          className="btn btn-ghost normal-case text-sm md:text-xl text-orange-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          ></svg>
          Download Resume <i className="fa-solid fa-download mx-2"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
