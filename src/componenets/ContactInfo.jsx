import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";

function ContactInfo() {
  return (
    <>
      <div className=" hidden bg-red-600 max-w-full h-[600px] md:flex flex-col items-center justify-center">
        <div className="text-white flex flex-col items-center gap-6  ">
          <h3 className="text-3xl">CONTACT</h3>
          <h1 className="text-5xl">시작이 반입니다!</h1>
          <p className="text-center max-w-sm">
            생각만 할 경우 아무일도 일어나지 않습니다. 어떤 방식이든 연락 주시면
            최선보다 최고의 제품을 안겨 드리겠습니다.
          </p>
        </div>
        <div className="flex flex-row justify-center  space-x-12 mt-8  ">
          <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg">
            <AiOutlineMail size={40} className="fill-orange-400" />
            <h2>E-MAIL</h2>
            <h2 className="font-bold text-xl">liminjun54@naver.com</h2>
          </div>
          <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg ">
            <BsFillTelephoneFill size={40} className="fill-orange-400" />
            <h2>TEL</h2>
            <h2 className="font-bold text-xl">010-7638-9902</h2>
          </div>
          <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg ">
            <RiKakaoTalkFill size={40} className="fill-orange-400" />
            <h2>KAKAO</h2>
            <h2 className="font-bold text-xl">ID: leedongjin98</h2>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden ">
        <div className=" bg-red-600 max-w-full h-[900px] flex flex-col items-center justify-center">
          <div className="text-white flex flex-col items-center gap-6  ">
            <h3 className="text-3xl">CONTACT</h3>
            <h1 className="text-5xl">시작이 반입니다!</h1>
            <p className="text-center max-w-sm">
              생각만 할 경우 아무일도 일어나지 않습니다. 어떤 방식이든 연락
              주시면 최선보다 최고의 제품을 안겨 드리겠습니다.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-12 mt-9 ">
            <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg">
              <AiOutlineMail size={40} className="fill-orange-400" />
              <h2>E-MAIL</h2>
              <h2 className="font-bold text-xl">liminjun54@naver.com</h2>
            </div>
            <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg ">
              <BsFillTelephoneFill size={40} className="fill-orange-400" />
              <h2>TEL</h2>
              <h2 className="font-bold text-xl">010-7638-9902</h2>
            </div>
            <div className="bg-white w-64 h-32 flex flex-col items-center justify-center rounded-lg ">
              <RiKakaoTalkFill size={40} className="fill-orange-400" />
              <h2>KAKAO</h2>
              <h2 className="font-bold text-xl">ID: leedongjin98</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
