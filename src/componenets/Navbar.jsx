import React from "react";

function Navbar() {
  return (
    <div className="w-screen h-[80px] x-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src="./mandeuljalogo.png" className="w-44 h-44 mt-5" />
          <ul className="hidden md:flex absolute  top-0 right-0 mt-3 mr-1">
            <li>Business</li>
            <li>Service Plan</li>
            <li>Contract</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
