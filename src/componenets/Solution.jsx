import React from "react";

function Solution() {
  return (
    <div className="flex  flex-col justify-center items-center gap-3 pt-5">
      <img src="./mandeuljalogo.png" className="w-24" />
      <h1 className="font-bold text-3xl text-center ">
        MANDEULJA TOTAL SOLUTION
      </h1>
      <h4 className=" text-sm text-center md:hidden mx-5">
        브랜드 개발, 제품 소싱, 패키지 디자인까지 소싱 전반에 걸쳐 솔루션을
        제시합니다!
      </h4>
      <h4 className="hidden md:flex text-2xl text-center">
        브랜드 개발, 제품 소싱, 패키지 디자인까지 한번에!!
      </h4>
      <p className="hidden md:flex text-center  ">
        디어넥스트는 당사에서 해외 제품을 OEM, ODM하는 고객에 한하여 브랜딩
        컨설팅 및 패키지 디자인을 지원합니다.
      </p>
    </div>
  );
}

export default Solution;
