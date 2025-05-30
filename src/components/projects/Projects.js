import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 px-4 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Ecozon"
          des=" Built an E-Commerce website using Node.js, Express.js, Next.js, Taiwind CSS, MongoDB, and Cloudinary."
          src="/images/projects/projectTwo.png"
          gitLink="https://github.com/iamalokpatel/Ecozon.git"
          liveLink="https://ecozon.vercel.app/"
        />
        <ProjectsCard
          title="Airbnb Clone"
          des=" Built an Airbnb Clone using EJS, Node.js, Express.js, and
                MongoDB with user auth, and property listings."
          src="/images/projects/projectOne.png"
          gitLink="https://github.com/iamalokpatel/AirbnbClone.git"
          liveLink="https://airbnbclone-791g.onrender.com/listings"
        />

        <ProjectsCard
          title="Spotify UI"
          des=" Built an Spotify UI  using HTML CSS, and
                JavaScript with listings, Property Booking System cards."
          src="/images/projects/projectThree.png"
          gitLink="https://github.com/iamalokpatel"
          liveLink="https://github.com/iamalokpatel"
        />
      </div>
    </section>
  );
};

export default Projects;
