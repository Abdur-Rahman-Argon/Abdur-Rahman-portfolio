import React from "react";
import { Link, a } from "react-router-dom";
import useProduct from "../../utls/useProduct";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/#skills">Skills</Link>
      </li>
      <li>
        <Link to="/#education">Education</Link>
      </li>
      <li>
        <Link to="/#resent-project">Resent Project</Link>
      </li>
      <li>
        <Link to="/#resent-project">Projects</Link>
      </li>
      <li>
        <Link to="/#about">About</Link>
      </li>
      <li>
        <Link to="/#contact">Contact Me</Link>
      </li>
    </>
  );

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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Md. Abdur Rahman
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https:/drive.google.com/file/d/1SrhuJbqwv6M_Hi_opTWxYa1T0rNItAPR/view?usp=sharing"
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
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
