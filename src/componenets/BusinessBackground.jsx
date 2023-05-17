import { Typography } from "@material-tailwind/react";

export default function BusinessBackground() {
  return (
    <figure className="relative h-full w-full -z-50">
      <img
        className="h-full w-full rounded-xl  z-0"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <figcaption className="absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="text-center  ">
          <Typography className="text-xl font-bold text-orange-400">
            Growth
          </Typography>
          <Typography className="text-2xl font-bold" color="white">
            OEM / ODM 최적화
          </Typography>
          <Typography color="white" className="mt-2 font-normal text-xl">
            고객이 원하는 최적의 제품을 찾아 드립니다.
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
}
