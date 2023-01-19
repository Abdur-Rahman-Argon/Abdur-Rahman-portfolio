import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const frontEnd = [
    { name: "HTML", level: "Expertise" },
    { name: "CSS", level: "Expertise" },
    { name: "JavaScript(ES6)", level: "Expertise" },
    { name: "React", level: "Expertise" },
    { name: "Redux", level: "Expertise" },
    { name: "Firebase ", level: "Expertise" },
  ];

  const backEnd = [
    { name: "Node.js", level: "Expertise" },
    { name: "Express.js ", level: "Expertise" },
    { name: "MongoDB ", level: "Expertise" },
    { name: "Mongoose", level: "Expertise" },
    { name: "Stripe.js ", level: "Expertise" },
  ];

  const frameWork = [
    { name: "React-Tailwind ", level: "Expertise" },
    { name: "React-Bootstrap  ", level: "Expertise" },
    { name: "Hooks-From ", level: "Expertise" },
    { name: "daisyUi ", level: "Expertise" },
    { name: "HooksFrom ", level: "Expertise" },
  ];

  const frontEndTittle = "Front End Skills";
  const backEndTittle = "Back End Skills";
  const frameWorkTittle = "Frame Work & Library";
  const toolsTittle = "Tools And Software";

  const tools = [
    { name: "VScode", level: "Expertise" },
    { name: "Figma", level: "Expertise" },
    { name: "Android Studio ", level: "Expertise" },
    { name: "Git ", level: "Expertise" },
    { name: " Chrome dev tools ", level: "Expertise" },
  ];

  return (
    <div className="hero-content grid grid-cols-1 md:grid-cols-2 items-start lg:gap-10">
      <div>
        <Skill skills={frontEnd} tittle={frontEndTittle} />
      </div>
      <div>
        <Skill skills={backEnd} tittle={backEndTittle} />
      </div>
      <div>
        <Skill skills={frameWork} tittle={frameWorkTittle} />
      </div>
      <div>
        <Skill skills={tools} tittle={toolsTittle} />
      </div>
    </div>
  );
};

export default Skills;
