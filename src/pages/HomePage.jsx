import React from "react";
import CarouselSlider from "../componenets/Carousel";
import Solution from "../componenets/Solution";
import Grid from "../componenets/Grid";
import { ContactUs } from "../componenets/ContactUs";
import KoreaIssues from "../componenets/KoreaIssues";
import OurService from "../componenets/OurService";

function HomePage() {
  return (
    <>
      <CarouselSlider />
      <Solution />
      <Grid />
      <KoreaIssues />
      <OurService />

      <ContactUs />
    </>
  );
}

export default HomePage;
