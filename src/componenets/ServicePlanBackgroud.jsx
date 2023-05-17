import { Typography } from "@material-tailwind/react";

export default function ServicePlanBackground() {
  return (
    <figure className="relative h-full w-full -z-50">
      <img
        className="h-full w-full rounded-xl  z-0"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <figcaption className="absolute  top-1/2 left-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 ">
        <div className="text-start  ">
          <Typography className="lg:text-3xl font-bold text-orange-400">
            Service Plan
          </Typography>
          <Typography className="lg:text-3xl font-bold" color="white">
            판매 / 생산 / 사후관리
          </Typography>
          <Typography color="white" className="mt-2 font-normal lg:text-2xl">
            납품 후 지속적인 관리를 통해 기업의 성공을 도모합니다.
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
}
