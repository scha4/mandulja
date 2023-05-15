import React from "react";
import person from "../Data.js";

function Footer() {
  return (
    <footer className=" w-screen h-44 flex  justify-center items-center  ">
      <div className=" text-center align-middle">
        <p className="text-black ">마들자 | 대표 : 이동진</p>
        <p className="text-black">사업자등록번호 : 130-69-85777</p>
        <p className="text-black">
          전화 : 070-4012-1168 | E-mail : gofggofg@naver.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
