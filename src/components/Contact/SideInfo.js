import React from "react";

const SideInfo = () => {
  return (
    <div className="w-full mx-auto flex-1 text-center text-white py-4">
      <div class="w-full">
        <ul class="text-xl text-left">
          <li class="my-2 flex gap-1 items-start">
            <div class=" pt-5 font-semibold text-4xl text-orange-500">
              <i class="fa-solid fa-message"></i>
            </div>

            <div class="ml-2">
              <h3 class="ml-2 my-2 font-semibold">Message Me</h3>
              <p class="ml-2 text-gray-500 pr-8">
                If you have any offer, queries, suggetions, opinion, objection -
                feel free to let me know through email, phone or any other
                socila media platform that I have shared in my portfolio.
              </p>
            </div>
          </li>

          <li class="my-2 flex gap-1 items-start">
            <div class=" pt-5 font-semibold text-4xl text-orange-500">
              <i class="fa-solid fa-location-dot"></i>
            </div>

            <div class="ml-2 flex flex-col">
              <h3 class="ml-2 my-2 font-semibold">Current Location</h3>
              <span class="ml-2 text-gray-500"> Punot, Kalai,Joypurhat.</span>
              <span class="ml-2 text-gray-500">
                Rajshahi, Dhaka, Bangladesh.
              </span>
            </div>
          </li>

          <li class="my-2 flex gap-1 items-start">
            <div class=" pt-5 font-semibold text-4xl text-orange-500">
              <i class="fa-solid fa-phone"></i>
            </div>

            <div class="ml-2 flex flex-col">
              <h3 class="ml-2 my-2 font-semibold">Contact With Me</h3>
              <span class="ml-2 flex flex-row items-center gap-2 text-gray-500">
                <a href="tel:+8801763378457">+8801763378457</a>
                <a href="https://api.whatsapp.com/send?phone=%2B8801763378457&fbclid=IwAR0kO_ep4jR3kkjUsFD5LWvioKKMwF4OfrphDZ8bG6knIeYOhKGERFAJF4Q">
                  (WhatsApp)
                </a>
                <a href="https://join.skype.com/invite/rLpmFk4KtT4L">(Skype)</a>
              </span>
              <a href="mailto: abdurrahman.me7@gmail.com">
                abdurrahman.me7@gmail.com(Email)
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideInfo;
