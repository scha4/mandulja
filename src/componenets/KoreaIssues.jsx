import React from "react";

function KoreaIssues() {
  return (
    <>
      <div className=" hidden md:grid grid-cols-2 h-auto mt-10 bg-slate-200  ">
        <div className="col-span-1  flex flex-col md:items-left justify-center space-y-7 ml-5">
          <h1 className="text-xl font-bold text-orange-400 ">Korea Issues</h1>
          <h1 className="text-2xl font-bold">대한민국 플랫폼 수수료 딜레마!</h1>
          <h1 className="text-3xl font-bold">온라인 플랫폼 수수료 상승</h1>
          <p className="text-xl">
            지속적인 온라인 쇼핑 플랫폼 거래 수수료 상승에 따라 도/소매 유통
            구조에서 제조사 직접 판매로 전환되는 추세
          </p>
        </div>
        <div className="flex items-center justify-center pt-10 pb-10">
          <img
            src="./manstressed.png"
            className="max-w-sm max-h-72 rounded-lg"
          />
        </div>
      </div>
      {/* // mobile */}
      <div className="md:hidden  bg-slate-200 mt-7 pb-4 ">
        <div className="flex items-center justify-center pt-10 pb-10 ">
          <img
            src="./manstressed.png"
            className="max-w-sm max-h-72 rounded-lg "
          />
        </div>
        <div className="md:hidden  flex flex-col items-center justify-center space-y-2 ml-5">
          <h1 className="text-l font-bold text-orange-400">Korea Issues</h1>
          <h1 className="text-xl font-bold">대한민국 플랫폼 수수료 딜레마!</h1>
          <h1 className="text-2xl font-bold">온라인 플랫폼 수수료 상승</h1>
          <p className="text-l max-w-sm">
            지속적인 온라인 쇼핑 플랫폼 거래 수수료 상승에 따라 도/소매 유통
            구조에서 제조사 직접 판매로 전환되는 추세
          </p>
        </div>
      </div>
    </>
  );
}

export default KoreaIssues;
