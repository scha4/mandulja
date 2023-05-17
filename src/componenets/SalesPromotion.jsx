import React from "react";
import CheckList from "./CheckList";

import {
  AiFillCheckCircle,
  AiFillStar,
  AiFillSetting,
  AiOutlineFieldTime,
  AiOutlineNotification,
} from "react-icons/ai";

export default function SalesPromotion(props) {
  return (
    <>
      <div className=" hidden md:grid grid-cols-2 h-auto mt-10 bg-slate-200  ">
        <div className="flex items-center justify-center pt-10 pb-10">
          <img src={props.image} className="max-w-sm max-h-72 rounded-lg" />
        </div>
        <div className="col-span-1  flex flex-col md:items-left justify-center space-y-7 ml-5">
          <h1 className="text-xl font-bold text-orange-400 ">{props.title}</h1>
          <h1 className="text-2xl font-bold">{props.subHead}</h1>

          <span className="text-xl flex flex-col gap-3">
            <CheckList description=" 판매 채널 확장 / 판매 업채 소개" />
            <CheckList description="대형마트 납품 조건 및 밴더 납품 지원" />
            <CheckList description="제품별 마케팅 형태 및 방식 제안" />
            <CheckList description=" 판매양에 따른 채널별 제안 기준 설정" />
          </span>
        </div>
      </div>
      {/* // mobile */}
      <div className="md:hidden  bg-slate-200 mt-7 pb-4 ">
        <div className="flex items-center justify-center pt-10 pb-10 ">
          <img src={props.image} className="max-w-sm max-h-72 rounded-lg " />
        </div>
        <div className="md:hidden  flex flex-col items-center justify-center space-y-2 ml-5">
          <h1 className="text-l font-bold text-orange-400">{props.title}</h1>
          <h1 className="text-xl font-bold text-center">{props.subHead}</h1>

          <span className="text-l max-w-sm flex flex-col gap-3">
            <CheckList description=" 판매 채널 확장 / 판매 업채 소개" />
            <CheckList description="대형마트 납품 조건 및 밴더 납품 지원" />
            <CheckList description="제품별 마케팅 형태 및 방식 제안" />
            <CheckList description=" 판매양에 따른 채널별 제안 기준 설정" />
          </span>
        </div>
      </div>
    </>
  );
}
