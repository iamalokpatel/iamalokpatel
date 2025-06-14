"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <div className="flex justify-center  items-center text-center">
        <Title title="WHAT CLIENTS SAY" />
      </div>
      <div className="max-w-6xl mx-auto  ">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className=" w-full">
            <div className="w-full h-122 flex flex-col lgl:flex-row justify-between grid grid-cols-1 md:grid-cols-2 gap-15">
              <div className=" w-full lgl:w-[35%] !h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src="/images/testmonial/testimonialOne.png"
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-tight mb-2">
                    Bound - Trolola
                  </p>
                  <h2 className="text-2xl opacity-80">Jone Joe</h2>
                  <p className="text-base tracking-wide text-gray-500  tracking-tighter font-serif opacity-80">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img
                  className="w-20 lgl:w-32"
                  src="/images/testmonial/quote.png"
                  alt="quote"
                />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-lg lgl:text-2xl font-medium tracking-wide">
                        TRAVEL MOBILE APP DESIGN
                      </h3>
                      <p className="text-base text-gray-400 my-2 tracking-tighter font-serif opacity-60 ">
                        Via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 tracking-tight font-serif opacity-75 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos <br />
                    natus ipsum numquam veniam officia necessitatibus ratione
                    quos debitis exercitationem facilis id neque nihil
                    accusantium perspiciatis repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-122 flex flex-col lgl:flex-row justify-between grid grid-cols-1 md:grid-cols-2 gap-15">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src="/images/testmonial/testimonialTwo.png"
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-tight mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl  opacity-80">Jone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500  tracking-tighter font-serif opacity-80">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img
                  className="w-20 lgl:w-32"
                  src="/images/testmonial/quote.png"
                  alt="quote"
                />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-lg lgl:text-2xl font-medium tracking-wide">
                        TRAVEL MOBILE APP DESIGN
                      </h3>
                      <p className="text-base text-gray-400 my-2 tracking-tighter font-serif opacity-60 ">
                        Via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 tracking-tight font-serif opacity-75 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos <br /> natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil perspiciatis repellat?
                    Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-122 flex flex-col lgl:flex-row justify-between grid grid-cols-1 md:grid-cols-2 gap-15">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src="/images/testmonial/testimonialOne.png"
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-tight mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl opacity-80">Jone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500  tracking-tighter font-serif opacity-80">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img
                  className="w-20 lgl:w-32"
                  src="/images/testmonial/quote.png"
                  alt="quote"
                />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-lg lgl:text-2xl font-medium tracking-wide">
                        TRAVEL MOBILE APP DESIGN
                      </h3>
                      <p className="text-base text-gray-400 my-2 tracking-tighter font-serif opacity-60 ">
                        Via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 tracking-tight font-serif opacity-75 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos <br /> natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil perspiciatis repellat?
                    Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
