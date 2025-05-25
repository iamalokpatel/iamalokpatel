"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full   h-24 sticky top-0 z-50 bg-[#212428] mx-auto flex justify-between items-center font-[Montserrat] border-b border-gray-600 px-4">
      {/* Logo */}
      <div>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <img
            src="/images/logo.png"
            width={80}
            height={80}
            alt="logo"
            className="rounded-full cursor-pointer transition-transform duration-500 hover:scale-106 opacity-75 hover:opacity-100"
          />
        </Link>
      </div>

      {/* Nav Links - Show only on medium and up */}
      <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] transition duration-300"
            key={_id}
          >
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button - Show only on small screens */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-[#ff014f] cursor-pointer"
      >
        <FiMenu />
      </span>

      {/* Mobile Menu Panel */}
      {showMenu && (
        <div className="w-[50%] h-screen overflow-y-scroll fixed top-0 left-0 bg-gray-900 p-4">
          <div className="flex flex-col gap-8 py-2 relative">
            {/* Logo & Description */}
            <div>
              <img className="w-12" src="/images/logo.png" alt="logo" />
              <p className="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                soluta perspiciatis molestias enim cum repellat.
              </p>
            </div>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] transition duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-semibold mb-4">
                Find me in
              </h2>
              <div className="flex gap-4 text-white">
                <span className="w-10 h-10 flex items-center justify-center rounded-md bg-black bg-opacity-25 text-xl hover:bg-opacity-40 transition cursor-pointer">
                  <FaFacebookF />
                </span>
                <span className="w-10 h-10 flex items-center justify-center rounded-md bg-black bg-opacity-25 text-xl hover:bg-opacity-40 transition cursor-pointer">
                  <FaTwitter />
                </span>
                <span className="w-10 h-10 flex items-center justify-center rounded-md bg-black bg-opacity-25 text-xl hover:bg-opacity-40 transition cursor-pointer">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>

            {/* Close Button */}
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#ff014f] duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
