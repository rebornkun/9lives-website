"use client";
import PeopleGroupSvg from "../assests/svg/PeopleGroupSvg";

const HomeFifthSection = () => {
  return (
    <div id="community" className="h-full w-full bg-white ">
      <div className="container mx-auto px-4 pt-[40px] lg:pt-[70px] pb-[40px] lg:pb-[70px] h-fit flex flex-col items-center gap-[10px] lg:gap-[34px] relative">
        <div className="flex flex-row items-center gap-[20px] w-full ">
          <div className="max-lg:hidden flex flex-row items-center w-[25%]">
            <div className="rounded-full w-[180px] h-[180px] border-[2px] border-[#EAE8E8] flex items-center justify-center ">
              <PeopleGroupSvg />
            </div>
            <span className="h-[2px] bg-[#EAE8E8] flex-1 w-full "></span>
            <div className="rounded-full size-[12px] bg-[#EAE8E8] "></div>
          </div>
          <div className="h-full flex flex-col gap-[6px] lg:gap-[20px] items-center w-[50%] max-lg:w-full ">
            <h4 className="font-schibsted text-[24px] lg:text-[40px] font-[600] leading-[118%] tracking-[-3%] text-center align-center w-full">
              The Power of Community
            </h4>
            <p className="text-[14px] lg:text-[16px] font-[400] leading-[140%] text-center align-center w-[90%] mx-auto lg:w-[80%]">
              You&apos;re not just getting things done — you&apos;re building
              with people who care. Work, connect, and grow in a space where
              community fuels progress.
            </p>
            <div className="hidden max-lg:flex items-center justify-center py-6">
              <PeopleGroupSvg />
            </div>
          </div>
          <div className="max-lg:hidden flex flex-row items-center w-[25%]">
            <div className="rounded-full size-[12px] bg-[#EAE8E8] "></div>
            <span className="h-[2px] bg-[#EAE8E8] flex-1 w-full "></span>
            <div className="rounded-full w-[180px] h-[180px] border-[2px] border-[#EAE8E8] flex items-center justify-center ">
              <PeopleGroupSvg />
            </div>
          </div>
        </div>
        <button
          className=" p-[15px] h-[59px] w-fit rounded-[12px] bg-primary cursor-pointer overflow-hidden group relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          onClick={() => {
            console.log("clicked");
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-green-200 to-primary opacity-0 group-hover:opacity-60 group-focus:opacity-60 transition-opacity duration-300 z-0"></span>
          <p className="relative text-white text-[16px] font-[500] z-10 transition-all duration-300 group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] group-focus:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] ">
            Join Our Community
          </p>
        </button>
      </div>
    </div>
  );
};

export default HomeFifthSection;
