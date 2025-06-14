import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full px-4  pt-35 pb-22 grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div>
        <LeftBanner />
      </div>
      <div>
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;
