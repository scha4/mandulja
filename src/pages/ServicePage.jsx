import React from "react";
import ServicePlanBackground from "../componenets/ServicePlanBackgroud";
import CardWithChecks from "../componenets/CardWithChecks";
import SectionTemplate from "../componenets/SectionTemplate";
import { AiFillClockCircle, AiFillDollarCircle } from "react-icons/ai";
import SalesPromotion from "../componenets/SalesPromotion";

function ServicePage() {
  return (
    <>
      <ServicePlanBackground />{" "}
      <div className=" ml-3 mr-3 lg:flex items-center justify-center mt-10 gap-5">
        <CardWithChecks
          color="red"
          icon={<AiFillClockCircle size={50} />}
          title="시기적 판매량 예측"
          description="월단위 판매량 확인 및 예상 소진 스케쥴 확인"
          bullet1="  주단위 / 월단위 / 분기 / 년단위 생산 예상 스케쥴 파악"
          bullet2="   예상 재고 소진 시점 파악"
          bullet3="  주단위 / 월단위 / 분기 / 년단위 생산 예상 스케쥴 파악"
          bullet4="hello"
        />
        <CardWithChecks
          color="orange"
          icon={<AiFillDollarCircle size={50} />}
          title="생산 FCST 진행"
          description="환율 및 시장 상황에 맞는 전략적 발주 진행."
          bullet1="  통상 제품별 생산 납기 관리"
          bullet2="   예상 재고 소진 시점 파악"
          bullet3="  원자재 이슈 확인 및 사전 수급 제안"
          bullet4=" 중국 현지 명절, 국가적 이슈 파악 생산 지연 방어"
        />
      </div>
      <SalesPromotion
        image="./manstressed.png"
        title="Sales Promotion"
        subHead="판매 어렵게 생각하지 마세요!

        디어넥스트가 제안합니다."
      />
    </>
  );
}

export default ServicePage;
