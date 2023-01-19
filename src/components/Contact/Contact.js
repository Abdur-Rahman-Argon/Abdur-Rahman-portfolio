import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const name = data.name;
    const message = data.message;
    const contactMessage = { email, name, message };
    console.log(data);
  };
  return (
    <div className="w-full mx-auto text-left flex-1 text-gray-600 font-medium  ">
      <div className="text-center w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 items-center">
            <div className="my-3 text-left flex-1">
              <label className=" ml-3" htmlFor="name">
                Name
              </label>
              <br />
              <input
                {...register("name", { required: true })}
                id="name"
                className="input  text-sm md:text-xl input-bordered focus:outline-none w-full"
              />
            </div>
            <div className="my-3  text-left flex-1">
              <label className=" ml-3" htmlFor="email">
                Email
              </label>
              <br />
              <input
                {...register("email", { required: true })}
                id="email"
                type="email"
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
              {...register("subject", { required: true })}
              id="subject"
              className="input  text-sm md:text-xl input-bordered focus:outline-none w-full"
            />
          </div>

          {/*  */}
          <div className=" my-3 text-left">
            <label className=" ml-3" htmlFor="message">
              Message
            </label>
            <br />
            <textarea
              {...register("message", { required: true })}
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="input h-28  text-sm md:text-xl input-bordered focus:outline-none w-full"
            ></textarea>
          </div>

          {/*  */}
          <div className="text-left  my-3">
            <button
              type="submit"
              className="input uppercase text-gray-700 font-semibold text-xl input-bordered focus:outline-none w-44"
            >
              send <i className="fa-solid fa-paper-plane mx-2 "></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
