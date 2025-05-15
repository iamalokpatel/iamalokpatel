import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-4 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Airbnb Clone"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="/images/projects/projectOne.png"
        />
        <ProjectsCard
          title="Spotify UI"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="/images/projects/projectThree.png"
        />
        <ProjectsCard
          title="AssignMent"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="/images/projects/projectTwo.png"
        />
      </div>
    </section>
  );
};

export default Projects;
