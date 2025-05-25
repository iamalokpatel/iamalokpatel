import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex mt-10 flex-col lgl:flex-row gap-10 lgl:gap-20 grid grid-cols-1 md:grid-cols-2"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-md text-designColor tracking-[4px]">2022 - 2025</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={
              <>
                Bachelor of <br />
                Computer Applications
              </>
            }
            subTitle={
              <>
                Rakshpal Bahadur Management Institute <br />
                Greater Noida Uttar Pradesh (2022 - 2025)
              </>
            }
            result="3.90/5"
            des={
              <>
                I have completed a Bachelor of Computer Applications where I
                studied <br />
                subjects like programming, databases networking, and software
                development.
              </>
            }
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12  font-titleFont flex flex-col gap-4">
          <p className="text-md text-designColor tracking-[4px]">2020 - 2022</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title={
              <>
                Intermidiate <br /> Science with Mathematics
              </>
            }
            subTitle={
              <>
                Rajmangal Singh Inter College <br />
                Baghawar Azamgarh (2019 - 2021)
              </>
            }
            result="4.03/5"
            des={
              <>
                I completed my 12th with Physics, Chemistry, and Mathematics as
                my <br />
                core subjects, which helped build strong analytical and logical
                thinking skills.
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
