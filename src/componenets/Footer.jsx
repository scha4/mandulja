import React from "react";
import person from "../Data.js";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" w-screen h-44 flex  justify-center items-center   ">
      <div className=" text-center align-middle">
        <p className="text-black ">만들자 | 대표 : 이동진</p>
        <p className="text-black">사업자등록번호 : 130-69-85777</p>
        <p className="text-black mx-3">
          전화 : 010-9383-9689 | E-mail : mandeulja@naver.com
        </p>
        <p>&copy; {currentYear} MANDEULJA All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
