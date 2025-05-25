"use client";
import React from "react";
import { Link } from "react-scroll";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] px-4 border-b-black gap-8 grid grid-cols-1 md:grid-cols-2 gap-15">
      <div className="w-full h-full flex flex-col gap-8 ">
        <div className="flex items-center justify-center mt-[-10px]  BannerIcon">
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            <img
              src="/images/logo.png"
              className="opacity-75 hover:opacity-100 transition-opacity duration-300"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/iamalokpatel" target="blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/iamalokpatel" target="blank">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/iamalokpatel" target="blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {[
            { name: "Home", to: "home" },
            { name: "Features", to: "features" },
            { name: "Projects", to: "projects" },
            { name: "Resume", to: "resume" },
            { name: "Contact", to: "contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              >
                {item.name}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
