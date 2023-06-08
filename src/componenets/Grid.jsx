import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { MdFactory } from "react-icons/md";
import { AiFillSetting, AiFillSafetyCertificate } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BsFillCheckCircleFill, BsBoxSeam } from "react-icons/bs";

function Grid() {
  return (
    <>
      <div className=" hidden md:grid grid-row-2 grid-flow-rows grid-cols-3  text-center gap-2   mr-3 ml-3 mt-9">
        <div className="border-2 border-black p-6 flex flex-col items-center bg-orange-400">
          <BsBoxSeam size={60} />
          <h1 className="font-bold text-3xl mt-2 ">샘플발주/제품수입</h1>
        </div>
        <div className="border-2 border-black p-6 flex flex-col items-center bg-orange-400 ">
          <FaSearch size={60} />
          <h1 className="font-bold text-3xl mt-2">제품소싱/공장소싱</h1>
        </div>
        <div className="border-2 border-black p-6 flex flex-col items-center bg-orange-400">
          <AiFillSetting size={60} />
          <h1 className="font-bold text-3xl mt-2">제품개발/OEM/ODM</h1>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-center pt-5">
        <div
          className=" md:hidden  w-5/6 text-center  border-2 border-black mt-6
      "
        >
          <div className="border-2 border-black p-6 flex flex-col items-center bg-orange-400">
            <BsBoxSeam size={60} />
            <h1 className="font-bold text-3xl mt-2 ">샘플발주/제품수입</h1>
          </div>
          <div className="border-2 border-black p-6 flex flex-col items-center bg-orange-400 ">
            <FaSearch size={60} />
            <h1 className="font-bold text-3xl mt-2">제품소싱/공장소싱</h1>
          </div>
          <div className="border-2 border-black p-6 flex flex-col items-center bg-orange-400">
            <AiFillSetting size={60} />
            <h1 className="font-bold text-3xl mt-2">제품개발/OEM/ODM</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
