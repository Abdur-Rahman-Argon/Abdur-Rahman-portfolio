import React from "react";

const Project = ({ projectInfo }) => {
  const { projectTittle, liveSiteLink, _id, imgURL } = projectInfo;
  return (
    <div>
      <div className="md:ml-8 flex-1 relative overflow-hidden rounded-lg shadow-2xl hover:transform  hover:scale-105 ease-in-out duration-100 ">
        <div className=" overflow-hidden   w-full h-52">
          <img
            src={imgURL}
            className="w-full mx-auto  hover:translate-y-[-500px] animate-pulse duration-500 ease-in-out  relative "
            alt=""
          />
        </div>
        <div className="text-center my-3">
          <h1 className="text-2xl text-center font-semibold">
            {projectTittle}
          </h1>
          <div className="flex my-3 justify-between items-center px-5">
            <a href={liveSiteLink}>
              <button className="text-base text--600 font-medium btn bg-slate-800 hover:text-lime-400">
                Preview <i class="fa-regular fa-eye mx-1"></i>
              </button>
            </a>
            <a
              className="text-base text-center text--600 font-medium btn hover:text-lime-400 bg-slate-800 "
              href={`/project-details/${_id}`}
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

/* 
const project = [
  {
    projectTittle: "Shopping.com",
    projectKeyword: "#1 MERN Project",
    liveSiteLink: "https://shopping-early.web.app/",
    clientSiteLink: "https://github.com/Abdur-Rahman-Argon/Shoping.com",
    serverSiteLink: "https://github.com/Abdur-Rahman-Argon/shoping-server",
    KeyFeatures: [
      "This is an E-commerce Website",
      "We show our product on My website. The user shows our product",
      "User love, Added to cart or buy our product quickly.",
      "User also Payment if not paid cancel his order",
      "Admin can manage users, products, and orders. If not paid order is deleted from the database.",
      "User Login, sign up, reset his password, and update his profile. Payment system by stripe.js",
    ],
    ClientSiteTechnologies: ["HTML5", "CSS3", "Javascript(ES6)", "React.Js"],
    ServerSiteTechnologies: [
      "Node.Js",
      "express.js",
      "MongoDb",
      "JWT",
      "Stripe.js",
    ],
    UsageToolsSoftware: ["Git", "VScode", "Heroku", "Firebase", "Figma"],
    othersFeatures: [{}],
  },
  {
    projectTittle: "P-Store House",
    projectKeyword: "#1 MERN Project",
    liveSiteLink: " ",
    clientSiteLink: " ",
    serverSiteLink: "",
    KeyFeatures: [
      "This is a warehouse website.",
      "A dealer can use This website to publish his product and Stock Updates",
      "He also added new items and show his own items and also removed items, and stock updates",
      "Use react.js, tailwind CSS, Node.js , Express.js , MongoDB, Firebase",
    ],
    ClientSiteTechnologies: ["HTML5", "CSS3", "Javascript(ES6)", "React.Js"],
    ServerSiteTechnologies: [
      "Node.Js",
      "express.js",
      "MongoDb",
      "JWT",
      "Stripe.js",
    ],
    UsageToolsSoftware: ["Git", "VScode", "Heroku", "Firebase", "Figma"],
    othersFeatures: [{}],
  },
  {
    projectTittle: "ADM Industry Ltd.",
    projectKeyword: "#1 MERN Project",
    liveSiteLink: " https://adm-industry-limited.web.app/",
    clientSiteLink:
      "https://github.com/Abdur-Rahman-Argon/manufacturer-project-client ",
    serverSiteLink:
      "https://github.com/Abdur-Rahman-Argon/manufacturer-project-server",
    KeyFeatures: [
      "This is industries website.",
      "They can show all tools on this website. And publish Company others Information",
      "User visited this website and their product and can order. Also, Payment from here or remove the order",
      "Admin can manage users and products and orders and add new products.",
      "We use react.js for the front end, node.js for the server side, and MongoDB for the database",
    ],
    ClientSiteTechnologies: ["HTML5", "CSS3", "Javascript(ES6)", "React.Js"],
    ServerSiteTechnologies: [
      "Node.Js",
      "express.js",
      "MongoDb",
      "JWT",
      "Stripe.js",
    ],
    UsageToolsSoftware: ["Git", "VScode", "Heroku", "Firebase", "Figma"],
    othersFeatures: [{}],
  },
];
 */
//
