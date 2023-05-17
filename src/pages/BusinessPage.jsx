import React from "react";
import BusinessBackground from "../componenets/BusinessBackground";
import Process from "../componenets/Process";
import SectionTemplate from "../componenets/SectionTemplate";
import CheckList from "../componenets/CheckList";

function BusinessPage() {
  return (
    <>
      <BusinessBackground />
      <Process />
      <SectionTemplate
        title="출발선에서 시작하는 당신!"
        subHead="디어넥스트가 지원합니다."
        description={<CheckList />}
        image="./manstressed.png"
      />
    </>
  );
}

export default BusinessPage;
