import React from "react";
import Carousel from "../componenets/Carousel";
import Solution from "../componenets/Solution";
import Grid from "../componenets/Grid";
import { ContactUs } from "../componenets/ContactUs";
import KoreaIssues from "../componenets/KoreaIssues";
import OurService from "../componenets/OurService";

function HomePage() {
  return (
    <>
      <Carousel />
      <Solution />
      <Grid />
      <KoreaIssues />
      <OurService />

      <ContactUs />
    </>
  );
}

export default HomePage;
