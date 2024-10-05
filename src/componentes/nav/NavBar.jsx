import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar bg-zinc-100 p-6 flex justify-between">
      <div className="logo">
        <img
          src="././public/images/Logo.png"
          alt=" Logo image"
          className="w-24 "
        />
      </div>
      <div className="text font-medium text-lg flex gap-7">
        <button>
          <p className="hover:text-blue-600 hover:scale-90 duration-300 ease-in-out">
            Features
          </p>
        </button>
        <button>
          <p className="hover:text-blue-600 hover:scale-90 duration-300 ease-in-out">
            Pricing
          </p>
        </button>
        <button>
          <p className="hover:text-blue-600 hover:scale-90 duration-300 ease-in-out">
            Community
          </p>
        </button>
        <button>
          <p className="hover:text-blue-600 hover:scale-90 duration-300 ease-in-out">
            Support
          </p>
        </button>
      </div>
      <div className="button gap-3 flex font-medium text-base">
        <button className="text-teal-400 w-24 hover:text-teal-800 hover:bg-teal-200 border-green-400 border">
          Login
        </button>
        <button className="bg-teal-200 p-2 rounded-md w-24 hover:bg-zinc-100">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
