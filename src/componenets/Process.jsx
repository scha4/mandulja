import React from "react";
import ProcessCard from "./ProcessCard";

function Process() {
  return (
    <>
      <div className="flex flex-col items-center  bg-blue-gray-50 pt-5 pb-10">
        <h1 className="text-3xl font-bold mt-5">OEM / ODM PROCESS</h1>
        <p className="text-lg ml-3 mr-3 mt-3">
          원하시는 제품 또는 원하는 형태의 요구사항을 준비하시면 빠른 진행이
          가능합니다.
        </p>
        <div className="lg:flex flex-row gap-5 align-center  justify-center mt-3">
          <ProcessCard
            image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            description="브랜드 플랜 수립 상담
타겟 제품 스팩 요구사항 확인
현지 공장정보 확인"
          />
          <ProcessCard
            image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            description="타겟 제품 리스팅 및 샘플 제품 선정

            제품 단가, 납기, 생산수량 확인
            
            샘플링 진행"
          />
          <ProcessCard
            image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            description="샘플링 제품 검토 및 개선
            제품 생산 검토 사항 확인
            생산 진행"
          />
          <ProcessCard
            image="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            description="생산 완료 후 국내 입항
            수출입 통관 진행
            국내 입고 제품 품질 검수"
          />
        </div>
      </div>
    </>
  );
}

export default Process;
