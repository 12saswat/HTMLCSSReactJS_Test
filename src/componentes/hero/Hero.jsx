import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="././public/images/Hero.png"
        alt=""
        className=" bg-black-100 brightness-50 "
      />
      <center>
        <div className=" w-9/12 flex justify-center  ">
          <p className="absolute   top-2/4 mx-24 pl-11 left-36 font-light text-5xl text-white p-3 rounded-md">
            The largest community of photo enthusiasts
          </p>
          <button className="absolute text-white bg-blue-500 px-10 hover:bg-blue-600 py-2 rounded-md top-3/4  ">
            Join today
          </button>
        </div>
      </center>
    </div>
  );
};

export default Hero;
