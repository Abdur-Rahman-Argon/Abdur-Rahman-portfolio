import React from "react";

const SideInfo = () => {
  return (
    <div className="w-full mx-auto flex-1 text-center text-gray-700">
      <div className="w-10/12 mx-auto flex-1 text-center text-gray-700 py-4">
        <div className="w-full">
          <ul className="text-xl text-left">
            <li className=" flex gap-1 items-start">
              <div className=" pt-5 font-bold text-4xl text-orange-500">
                <i className="fa-solid fa-message"></i>
              </div>

              <div className="my-2 ml-2">
                <h3 className="ml-2  font-bold">Message Me</h3>
                <p className="ml-2 text-base text-gray-600 pr-8">
                  If you have any offer, queries, suggetions, opinion, objection
                  - feel free to let me know through email, phone or any other
                  socila media platform that I have shared in my portfolio.
                </p>
              </div>
            </li>

            <li className=" flex gap-1 items-start">
              <div className=" pt-5 font-bold text-4xl text-orange-500">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div className="my-2 ml-2 flex flex-col">
                <h3 className="ml-3  font-bold">Current Location</h3>
                <span className="ml-3 text-base text-gray-600">
                  Punot, Kalai,Joypurhat.
                </span>
                <span className="ml-3 text-base text-gray-600">
                  Rajshahi, Dhaka, Bangladesh.
                </span>
              </div>
            </li>

            <li className=" flex gap-1 items-start">
              <div className=" pt-5 font-bold text-4xl text-orange-500">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div className="ml-2 my-2 flex flex-col">
                <h3 className="ml-2  font-bold">Contact With Me</h3>
                <span className="ml-2 text-base flex flex-row items-center gap-2 text-gray-600">
                  <a href="tel:+8801763378457">+8801763378457</a>
                  <a href="https://api.whatsapp.com/send?phone=%2B8801763378457&fbclid=IwAR0kO_ep4jR3kkjUsFD5LWvioKKMwF4OfrphDZ8bG6knIeYOhKGERFAJF4Q">
                    (WhatsApp)
                  </a>
                  <a
                    className=" hidden md:flex"
                    href="https://join.skype.com/invite/rLpmFk4KtT4L"
                  >
                    (Skype)
                  </a>
                </span>
                <a
                  className="ml-2 text-base flex"
                  href="mailto: abdurrahman.me7@gmail.com"
                >
                  abdurrahman.me7@gmail.com
                  <span className=" hidden md:flex mx-1"> (Email)</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
