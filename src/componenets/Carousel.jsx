import React from "react";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { Carousel, Typography, Button } from "@material-tailwind/react";
function CarouselSlider() {
  return (
    <Carousel className="rounded-xl ">
      <div className="relative  h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-full bg-black/75 py-2  text-center ">
            <Typography
              variant="lead"
              color="white"
              className=" md:text-3xl font-bold text-lg"
            >
              우리는 글로벌 OEM 서비스를 제공하는 회사입니다. 다양한 산업
              분야에서 고품질 제조와 맞춤형 솔루션을 제공하여 고객의 요구를
              충족시킵니다.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative  h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-full bg-black/75 py-2  text-center ">
            <Typography
              variant="lead"
              color="white"
              className="md:text-3xl font-bold text-lg "
            >
              최신 기술과 혁신적인 생산 방법을 활용하여 우리의 고객들의 비전을
              현실로 만들어내기 위해 노력하고 있습니다.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-[600px]  w-full">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-full text-center  bg-black/75 py-2 ">
            <Typography
              variant="lead"
              color="white"
              className="md:text-3xl font-bold text-lg  "
            >
              우리는 고객의 비즈니스 성공을 위해 탁월한 품질과 신속한 생산력을
              보장합니다.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselSlider;
