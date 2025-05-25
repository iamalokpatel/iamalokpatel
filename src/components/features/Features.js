import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 px-4 border-b-[1px] border-b-black"
    >
      <Title title="Features" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title=" Web Devlopment"
          des="I have experience in web development, creating functional,
              responsive, and user-friendly websites."
        />
        <Card
          title="Full Stack Development"
          des=" I’ve worked on full-stack projects, covering everything from the
              frontend to the backend and database setup."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Frontend Devlopement"
          des="I have built responsive and user friendly websites using HTML,
              CSS, JavaScript, and frameworks."
          icon={<SiProgress />}
        />
        <Card
          title="Backend Development"
          des=" I have developed secure backend APIs for dynamic
            web applications using Node.js and Express.js."
          icon={<FaMobile />}
        />
        <Card
          title="Responsive Design"
          des=" I have implemented responsive designs to ensure websites look
              function perfectly on all devices."
          icon={<SiAntdesign />}
        />
        <Card
          title=" Deployment Applications"
          des="I have deployed web applications to live servers, making them accessible to users online."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
