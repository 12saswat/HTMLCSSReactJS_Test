import React from "react";
import { ImFacebook } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="  bg-zinc-900 p-16  mt-10">
      <div className=" left justify-between  flex">
        <div className="">
          <img src="././public/images/FooterLogo.png" className="w-24" alt="" />
        </div>
        <div className="right flex gap-24 ">
          <div className="text-white flex gap-24">
            <ul>
              <li className=" font-medium text-md mb-2">Mobile app</li>
              <li className=" text-slate-400">Featured artists</li>
              <li className=" text-slate-400">The portal</li>
              <li className=" text-slate-400">Live events</li>
            </ul>

            <ul>
              <li className="text-white font-medium text-md mb-2">Community</li>
              <li className=" text-slate-400">Featured artists</li>
              <li className=" text-slate-400">The portal</li>
              <li className=" text-slate-400">Live events</li>
            </ul>
            <ul>
              <li className="text-white font-medium text-md mb-2">Company</li>
              <li className=" text-slate-400">Abouts us</li>
              <li className=" text-slate-400">Contact</li>
              <li className=" text-slate-400">History</li>
            </ul>
          </div>
          <div className="flex flex-col  gap-5">
            <button className="bg-blue-600 text-white font-medium p-2 rounded-md w-24 hover:bg-blue-800">
              Register
            </button>
            <button className="text-blue-600 p-2 font-medium border bg-white rounded-md w-24 hover:bg-blue-800 hover:text-white ">
              Login
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-10 bg-zinc-500" />
      <div className="flex justify-between">
        <div className="left">
          <p className="mt-16 text-zinc-500">
            © Photo, Inc. 2019. We love our users!
          </p>
        </div>
        <div className="right flex justify-center mt-10 items-center gap-10 ">
          <ImFacebook
            className="text-white text-2xl font-md cursor-pointer hover:text-blue-600 hover:scale-150 duration-300 ease-in-out
          "
          />
          <IoLogoTwitter
            className="text-white text-2xl font-md cursor-pointer hover:text-blue-600 hover:scale-150 duration-300 ease-in-out
          "
          />
          <TfiLinkedin
            className="text-white text-2xl font-md cursor-pointer hover:text-blue-600 hover:scale-150 duration-300 ease-in-out
          "
          />
          <GrInstagram
            className="text-white text-2xl font-md cursor-pointer hover:text-blue-600 hover:scale-150 duration-300 ease-in-out
          "
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
