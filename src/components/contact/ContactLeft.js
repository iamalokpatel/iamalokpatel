import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2 opacity-80"
        src="/images/contact/contactImg.png"
        alt="contactImg"
      />
      <div className="flex flex-col gap-4 group-hover:opacity-100">
        <p className="text-3xl tracking-tight font-serif opacity-60 group-hover:opacity-100  text-white">
          Alok Patel
        </p>
        <p className="text-lg font-normal text-gray-400  tracking-tighter font-serif opacity-80 group-hover:opacity-100">
          Full Stack Developer
        </p>
        <p className="text-gray-400 tracking-tight font-serif opacity-80 text-lg group-hover:opacity-100">
          I am a passionate and curious learner
          <br /> who enjoys building creative solutions through technology.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2  group-hover:opacity-100">
          Phone:{" "}
          <span className="text-lightText opacity-75  group-hover:opacity-100">
            +91 7521879702
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2 group-hover:opacity-100">
          Email:
          <span className="text-lightText opacity-75">
            alokpatel23273@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont text-designColor mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
