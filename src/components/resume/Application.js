import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full mt-10 flex flex-col lgl:flex-row gap-10 lgl:gap-20 grid grid-cols-1 md:grid-cols-2"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-md text-designColor tracking-[4px]">2007 - 2010</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Airbnb Clone"
            subTitle="Ejs Node.js Express.js MongoDB"
            result="Success"
            des={
              <>
                Built an Airbnb Clone using EJS, Node.js, Express.js, and
                MongoDB with user <br />
                auth property listings. Focused on responsive UI and smooth UX
                similar Airbnb.
              </>
            }
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-md text-designColor tracking-[4px]">2007 - 2010</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Todo Application"
            subTitle="Next.js Node.js Express.js MongoDB"
            result="Success"
            des={
              <>
                Built a Todo App using Next.js, Express.js, and MongoDB with
                task add, update <br />
                and delete features. Focused on responsive UI and smooth
                front–back integration.
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
