import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="boxShadow w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full h-[350px] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-8 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center   grid grid-cols-1 md:grid-cols-3   ">
          <div className="col-span-2">
            <p className="text-xl md:text-2xl tracking-tighter font-serif opacity-70 group-hover:opacity-100 group-hover:text-white duration-300">
              {title}
            </p>
            <p className="mt-2 text-gray-400 group-hover:text-white duration-300 tracking-tight font-serif opacity-75 text-sm text-gray-400 group-hover:text-gray-300 duration-300">
              {subTitle}
            </p>
          </div>
          <div className="inline-block  w-auto ml-auto">
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="tracking-tight font-serif opacity-75 text-sm text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
