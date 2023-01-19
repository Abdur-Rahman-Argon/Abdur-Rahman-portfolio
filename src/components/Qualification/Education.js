import React from "react";

const Education = () => {
  const education = [
    {
      educationLevel: "SSC (Science)",
      institute: "Punot High School",
      section: "2015 - 2017",
      description:
        " I starting my School on january, 2012 at Ponot High School. I graduate from here JSC and SSC. Our Teacher always helps an Teaching Very Confidently.",
    },
    {
      educationLevel: "HSC (Science)",
      institute: "Joypurhat Govt College",
      section: "2017 - 2019",
      description:
        "  My 1st College is Joypurhat Govt College. I graduate from here HSC (Scince). Our teacher a very helpful, always Loved every student. I remember them because they are my best teacher.",
    },
    {
      educationLevel: " Honours (BBA)",
      institute: "Joypurhat Govt College",
      section: "2019 - 2024",
      description:
        " I start My Higher Education in my college Joypurhat Govt College. My department is Accounting. If my background science but I no fill any challenge because Our teacher teaching very carefully.",
    },
  ];

  return (
    <div className="flex-1">
      <div className="  my-0 py-0">
        <h1 className="text-3xl font-semibold text-gray-700 ">Education</h1>

        {education.map((e) => (
          <>
            {" "}
            <div className="mt-8 ">
              <div className="w-10/12 px-5 border-l-2 relative border-orange-500">
                <div className="text-orange-500 absolute text-2xl -top-4 -left-4">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h2 className=" text-xl font-semibold">{e.educationLevel}</h2>
                <h2 className=" text-lg">
                  {e.institute} /
                  <span className=" mx-1 text- text-gray-500">{e.section}</span>
                </h2>
                <p className=" text-sm text-gray-500">{e.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Education;
