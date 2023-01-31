import React from "react";
import emailjs from "@emailjs/browser";

import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setSuccess("Message Send Successfully");
            setError("");
          }
          // console.log(result);
        },
        (error) => {
          if (error.text !== "") {
            setSuccess("");
            setError("Message Send Failed");
          }
          // console.log();
        }
      );

    // console.log(e.target.name.value);
    e.target.reset();
  };

  return (
    <div className="w-full mx-auto text-left flex-1 text-gray-600 font-medium  ">
      <div className="text-center w-full">
        <form onSubmit={sendEmail}>
          <div className="flex gap-5 items-center">
            <div className="my-3 text-left flex-1">
              <label className=" ml-3" htmlFor="name">
                Name
              </label>
              <br />
              <input
                id="name"
                name="name"
                className="input  text-sm md:text-xl input-bordered focus:outline-none w-full"
                required
              />
            </div>
            <div className="my-3  text-left flex-1">
              <label className=" ml-3" htmlFor="email">
                Email
              </label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input  text-sm md:text-xl input-bordered focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="my-3 text-left">
            <label className=" ml-3" htmlFor="subject">
              Subject
            </label>
            <br />
            <input
              type="text"
              id="subject"
              name="subject"
              className="input  text-sm md:text-xl input-bordered focus:outline-none w-full"
              required
            />
          </div>

          {/*  */}
          <div className=" my-3 text-left">
            <label className=" ml-3" htmlFor="message">
              Message
            </label>
            <br />
            <textarea
              type="text"
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              className="input h-28  text-sm md:text-xl input-bordered focus:outline-none w-full"
            ></textarea>
          </div>

          {/*  */}
          <div className="text-left  my-3">
            <button
              type="submit"
              className="input uppercase hover:text-white hover:bg-green-600 text-gray-700 font-semibold text-xl input-bordered focus:outline-none w-44"
            >
              send <i className="fa-solid fa-paper-plane mx-2 "></i>
            </button>
            {success !== "" && (
              <>
                <p className=" text-success text-left text-2xl font-normal">
                  {success}
                </p>
              </>
            )}
            {error !== "" && (
              <>
                <p className=" text-red-600 text-left text-2xl font-normal">
                  {error}
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// wq8R39XPy1nPOfvRosdO_;

// Xlav_mnjU3QUSphKZ;
