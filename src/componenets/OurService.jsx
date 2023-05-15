import React from "react";
import {
  AiFillCheckCircle,
  AiFillStar,
  AiFillSetting,
  AiOutlineFieldTime,
  AiOutlineNotification,
} from "react-icons/ai";
import CardData from "./CardData";

function OurService() {
  return (
    <>
      <div className=" bg-blue-gray-50 pb-14 md:flex items-center justify-center lg:grid grid-cols-2 h-auto ">
        <div className="col-span-1 flex flex-col space-y-7 ml-5 mt-9">
          <h1 className="text-orange-400 text-xl">Our Service</h1>
          <h1 className="text-3xl font-bold">
            구인이 힘든 시점 해결점을 찾아가다!
          </h1>
          <p className="w-72">
            제조사라 하더라도 모든 기반이 준비한 상태에서 운영하기는 힘든 부분이
            있습니다. 디어넥스트는 고급 인력으로 구성된 사업자로 당사 인력을
            귀사의 직원처럼 구성하여 고객사 인력 리스크를 낮춰드립니다.
          </p>
          <div className="flex">
            <AiFillCheckCircle size={25} className="fill-orange-400" />{" "}
            <p className="text-xl"> 소싱 제품 스팩 변경 진행</p>
          </div>
          <div className="flex">
            <AiFillCheckCircle size={25} className="fill-orange-400" />{" "}
            <p className="text-xl"> 제품 인허가에 필요한 인증 요구사항 파악</p>
          </div>
          <div className="flex">
            <AiFillCheckCircle size={25} className="fill-orange-400" />{" "}
            <p className="text-xl"> 디자인 및 브랜딩 가이드 제시</p>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-2 mt-12">
          <CardData
            name="국내 요구사항 반영"
            description="전 제품 공장 다이렉트 컨트롤로 
            즉각적인 제품 스팩 변경
            고객이 요구한 스팩에 부합한
            제품을 소싱합니다."
            icon={<AiFillStar size={40} className="fill-orange-400" />}
          />
          <CardData
            icon={<AiFillSetting size={40} className="fill-orange-400" />}
            name="제품 인허가"
            description="제품별 제품 인증 사항 확인
고객사에게 필요 인증 제시"
          />
          <CardData
            icon={<AiOutlineFieldTime size={40} className="fill-orange-400" />}
            name="납기 지연 방지"
            description="생산국 이슈사항 모니터링

납기 변동성에 대한 정보 공유"
          />
          <CardData
            icon={
              <AiOutlineNotification size={40} className="fill-orange-400" />
            }
            name="브랜드 개발"
            description="특허청 상표 등록

온라인 플랫폼 브랜드 등록 

온라인 제품 판매 연계

마케팅 가이드 제시"
          />
        </div>
      </div>
    </>
  );
}

export default OurService;
