import React from "react";
import person from "../Data.js";

function Footer() {
  return (
    <footer className=" w-screen h-44 flex  justify-center items-center  border border-purple-600">
      <div className=" text-center align-middle">
        <p className="text-black ">Sam Cha| 대표 : 이정연</p>
        <p className="text-black">사업자등록번호 : 264-09-02075</p>
        <p className="text-black">
          전화 : 070-4012-1168 | E-mail : gofggofg@naver.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
