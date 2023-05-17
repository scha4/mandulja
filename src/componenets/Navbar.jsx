import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-screen h-[50px] bg-red-600 text-white flex  justify-center items-center  ">
        <p className="align-middle">MANDEULJA! Your perfect business partner</p>
      </div>
      <div className="w-screen h-[80px] x-10 bg-white drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <Link to="/">
              <img src="./mandeuljalogo.png" className="w-28 h-18  " />
            </Link>
            <ul className="hidden md:flex absolute  top-0 right-0 mt-3 mr-1  ">
              <Link to="/Business" className="links  hover:text-orange-400">
                Business
              </Link>
              <Link to="/Service" className="links  hover:text-orange-400">
                Service Plan
              </Link>
              <Link to="/Contact" className="links  hover:text-orange-400">
                Contact
              </Link>
            </ul>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <MdMenu size={45} /> : <MdClose size={45} />}
          </div>
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute delay-100 bg-red-600 w-full px-8 text-white flex flex-col h-48 space-y-4 place-content-evenly z-20"
          }
        >
          <Link to="/Business" className="border-b2 border-zinc-300 w-full">
            Business
          </Link>
          <Link to="/Service" className="border-b2 border-zinc-300 w-full">
            Service Plan
          </Link>
          <Link to="/Contact" className="border-b2 border-zinc-300 w-full">
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
