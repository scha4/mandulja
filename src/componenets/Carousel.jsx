// import React from "react";
// import { useState } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { RxDotFilled } from "react-icons/rx";
// function Carousel() {
//   const slides = [
//     {
//       url: "https://images.unsplash.com/photo-1683580607825-9d270ddbb3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1683386478393-432ce81a8dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1683490483134-3bfd76d9d5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80",
//     },
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const firstSlide = currentIndex === 0;
//     const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   return (
//     <div className="max-w-[1200px] h-[600px] w-full m-auto py-16 px-4 static group ">
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className="w-full h-full rounded-2xl bg-cover bg-center duration-500 "
//       >
//         {/* leftarrow */}
//         <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//           <AiOutlineArrowLeft onClick={prevSlide} size={30} />
//         </div>
//         {/* rightarrow */}
//         <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//           <AiOutlineArrowRight onClick={nextSlide} size={30} />
//         </div>
//       </div>
//       <div className="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className="text-2xl cursor-pointer"
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

import { Carousel } from "@material-tailwind/react";

export default function CarouselSlider() {
  return (
    <>
      <div className="max-w-[1000px] h-[500px] w-full   ">
        <Carousel
          className="rounded-2xl  duration-500 -z-50"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4  flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </>
  );
}
