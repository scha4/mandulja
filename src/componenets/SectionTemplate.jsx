import React from "react";
import CheckList from "./CheckList";

import {
  AiFillCheckCircle,
  AiFillStar,
  AiFillSetting,
  AiOutlineFieldTime,
  AiOutlineNotification,
} from "react-icons/ai";

function SectionTemplate(props) {
  return (
    <>
      <div className=" hidden md:grid grid-cols-2 h-auto mt-10 bg-slate-200  ">
        <div className="col-span-1  flex flex-col md:items-left justify-center space-y-7 ml-5">
          <h1 className="text-xl font-bold text-orange-400 ">{props.title}</h1>
          <h1 className="text-2xl font-bold">{props.subHead}</h1>

          <span className="text-xl flex flex-col gap-3">
            <CheckList description=" 초기 시장 조사 무료지원" />
            <CheckList description="저렴한 비용으로 최고의 효과" />
            <CheckList description="브랜드 운영 개설시 인력 지원" />
            <CheckList description=" 연계 우수 업체 안내" />
            <CheckList description="국내 판매 채널 안내 및 연계 지원" />
          </span>
        </div>
        <div className="flex items-center justify-center pt-10 pb-10">
          <img src={props.image} className="max-w-sm max-h-72 rounded-lg" />
        </div>
      </div>
      {/* // mobile */}
      <div className="md:hidden  bg-slate-200 mt-7 pb-4 ">
        <div className="flex items-center justify-center pt-10 pb-10 ">
          <img src={props.image} className="max-w-sm max-h-72 rounded-lg " />
        </div>
        <div className="md:hidden  flex flex-col items-center justify-center space-y-2 ml-5">
          <h1 className="text-l font-bold text-orange-400">{props.title}</h1>
          <h1 className="text-xl font-bold">{props.subHead}</h1>

          <span className="text-l max-w-sm flex flex-col gap-3">
            <CheckList description=" 초기 시장 조사 무료지원" />
            <CheckList description="저렴한 비용으로 최고의 효과" />
            <CheckList description="브랜드 운영 개설시 인력 지원" />
            <CheckList description=" 연계 우수 업체 안내" />
            <CheckList description="국내 판매 채널 안내 및 연계 지원" />
          </span>
        </div>
      </div>
    </>
  );
}

export default SectionTemplate;
