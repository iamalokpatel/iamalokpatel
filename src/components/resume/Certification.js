import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row mt-10 gap-10 lgl:gap-20 grid grid-cols-1 md:grid-cols-2"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-md text-designColor tracking-[4px]">2010 - 2022</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={
              <>
                Full Stack <br /> Development
              </>
            }
            subTitle={
              <>
                Apna College <br />
                (sep 2024 - mar 2025)
              </>
            }
            result="ONLINE"
            des={
              <>
                I completed a Full Stack Development course from my college,
                where <br />I learned technologies like HTML CSS, JavaScript,
                React, Node.js, and MongoDB.
              </>
            }
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-md text-designColor tracking-[4px]">2001 - 2020</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={
              <>
                Frontend
                <br /> Development
              </>
            }
            subTitle={
              <>
                QSpiders Center <br /> (may 2024 - jul 2024)
              </>
            }
            result="OFFLINE"
            des={
              <>
                I also completed a Frontend Development course I where <br />
                focused on building user interfaces using HTML, CSS, JavaScript,
                and React.
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
