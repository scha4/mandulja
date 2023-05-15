import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { MdFactory } from "react-icons/md";
import { AiFillSetting, AiFillSafetyCertificate } from "react-icons/ai";
import { FcAdvertising } from "react-icons/fc";

function Grid() {
  return (
    <>
      <div className=" hidden md:grid grid-row-2 grid-flow-rows grid-cols-3  text-center  border-2 border-black mr-3 ml-3 mt-9">
        <div className="border border-black p-6 flex flex-col items-center">
          <MdLocalShipping size={60} />
          <h1 className="font-bold text-4xl ">샘플발주</h1>

          <p>Sample Ordering</p>
        </div>
        <div className="border border-black p-6 flex flex-col items-center">
          <GiFactory size={60} />
          <h1 className="font-bold text-4xl">소량생산</h1>
          <p>Small Production</p>
        </div>
        <div className="border border-black p-6  flex flex-col items-center">
          <MdFactory size={60} />
          <h1 className="font-bold text-4xl">대량생산</h1>
          <p>Mass Production</p>
        </div>
        <div className="border border-black p-6 flex flex-col items-center ">
          <AiFillSetting size={60} />
          <h1 className="font-bold text-4xl">OEM/ODM</h1>

          <p>OEM/ODM</p>
        </div>
        <div className="border border-black p-6 flex flex-col items-center ">
          <AiFillSafetyCertificate size={60} />
          <h1 className="font-bold text-4xl">제품인증</h1>

          <p>Product Certified</p>
        </div>
        <div className="border border-black p-6  flex flex-col items-center">
          <FcAdvertising size={60} />
          <h1 className="font-bold text-4xl">마케팅</h1>

          <p>Marketing Guide</p>
        </div>
      </div>
      <div
        className="md:hidden  w-full text-center ml-3 mr-3 border-2 border-black mt-6
      "
      >
        <div className="border border-black p-6 flex flex-col items-center">
          <MdLocalShipping size={60} />
          <h1 className="font-bold text-4xl ">샘플발주</h1>

          <p>Sample Ordering</p>
        </div>
        <div className="border border-black p-6 flex flex-col items-center ">
          <AiFillSetting size={60} />
          <h1 className="font-bold text-4xl">OEM/ODM</h1>

          <p>OEM/ODM</p>
        </div>
        <div className="border border-black p-6  flex flex-col items-center">
          <FcAdvertising size={60} />
          <h1 className="font-bold text-4xl">마케팅</h1>

          <p>Marketing Guide</p>
        </div>
      </div>
    </>
  );
}

export default Grid;
