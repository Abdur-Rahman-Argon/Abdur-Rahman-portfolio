import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const name = data.name;
    const message = data.message;
    const contactMessage = { email, name, message };
    console.log(data);
  };
  return (
    <div className="w-full mx-auto text-center text-white shadow-xl py-16">
      <div>
        <h1 className="text-5xl font-bold text-white">Contact Me</h1>
      </div>
      <div className="text-center w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3">
            <label htmlFor="name">Name</label>
            <br />
            <input
              {...register("name", { required: true })}
              id="name"
              className="input text-gray-900 font-semibold input-bordered w-full max-w-xs"
            />
          </div>
          <div className=" my-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", { required: true })}
              id="email"
              className="input text-gray-900 font-semibold input-bordered w-full max-w-xs"
            />
          </div>
          <div className=" my-3">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              {...register("message", { required: true })}
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="input text-gray-900 font-semibold input-bordered h-20 w-full max-w-xs"
            ></textarea>
          </div>
          <div className="  my-3">
            <input
              type="submit"
              className="btn  bg-green-700 mx-auto w-full max-w-xs"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
