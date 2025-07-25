import React from "react";

const ExploreCard = ({
  icon,
  rotate,
  title,
  body,
  footer,
}: {
  icon: React.ReactNode;
  rotate: string;
  title: string;
  body: string;
  footer: string;
}) => {
  return (
    <div
      className={`group/excard flex-1 px-[22px] pt-[46px] lg:pt-[60px] pb-[41px] flex flex-col gap-[15px] lg:gap-[34px] justify-between w-full lg:w-[400px] h-[230px] lg:h-[300px] rounded-[40px] border-[4px] border-[#F7F7F7] ${
        rotate === "up" ? "rotate-[-4deg]" : "rotate-[4deg]"
      } bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer`}
    >
      <div className="icon w-full flex justify-end">{icon}</div>
      <div className="content flex flex-col gap-4 items-start">
        <h5 className="font-schibsted text-[18px] lg:text-[24px] font-[600] leading-[118%] tracking-[-3%] text-center align-center">
          {title}
        </h5>
        <p className="text-[12px] lg:text-[16px] font-[300] leading-[118%] w-full">
          {body}
        </p>
        <p className="italic text-[12px] lg:text-[16px] font-[300] leading-[118%] w-full">
          {footer}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
