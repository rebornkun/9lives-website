"use client";
// import Image from "next/image";
import FolderOthers from "../assests/svg/FolderOthers";
import HomePhoneSvg from "../assests/svg/HomePhoneSvg";
import SearchBox from "../assests/svg/SearchBox";
import Shared from "../assests/svg/Shared";
import WaitlistWithPeople from "../atoms/WaitlistWithPeople";

const HomeFirstSection = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#E6F7F11F] via-[#88B9B192] to-[#E6F7F11F] overflow-hidden">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="w-full h-full flex flex-col items-center pt-[160px] lg:pt-[120px] lg:pt-[180px] ">
          <WaitlistWithPeople />
          <div className="h-[98px] lg:h-[145px] w-fit flex items-center mt-[12px] lg:mt-[8px]">
            <h1 className="font-schibsted text-[24px] lg:text-[48px] font-[700] leading-[118%] text-center">
              Productivity, with a Social Experience <br></br>
              <span className="italic font-[400]">Your Everything App</span>
            </h1>
          </div>
          <p className=" text-[12px] max-lg:mt-[20px] lg:text-[16px] font-[300] leading-[140%] text-center text-black">
            All your tasks, chats, notes, and goals together in one beautifully{" "}
            <br className="max-lg:hidden"></br>connected space. Work smarter,
            stay inspired, and do more with the people who matter.
          </p>
          <button
            className="mt-[22px] lg:mt-[42px] p-[15px] min-h-[59px] rounded-[12px] bg-primary cursor-pointer overflow-hidden group relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => {
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-green-200 to-primary opacity-0 group-hover:opacity-60 group-focus:opacity-60 transition-opacity duration-300 z-0"></span>
            <p className="relative text-white text-[16px] font-[500] z-10 transition-all duration-300 group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] group-focus:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] ">
              Get Early Access
            </p>
          </button>
          <div className="w-[309px] h-[565px] lg:w-[403px] lg:h-[796px] max-lg:mt-[10px] lg:mb-[-50%] relative">
            <HomePhoneSvg />
            <div className="absolute top-[80px] max-md:scale-[0.7] max-md:left-[-70px] left-[-100px] lg:left-[-100px] w-[240px] h-[280px]">
              {/* <FolderSlabSvg /> */}
              <div className="w-full h-full bg-white/30 backdrop-blur-[4px] rounded-[20px] border-[2px] border-white/50 pt-[27px] rotate-[-6.72deg] relative ">
                <h2 className="font-schibsted text-[18px] lg:text-[18px] font-[600] leading-[118%] text-center">
                  Folders
                </h2>
                <SearchBox
                  className={"rotate-[6.72deg] absolute top-[26.86px] mx-auto"}
                />
                <FolderOthers
                  className={"rotate-[6.72deg] absolute  top-[87.07px] mx-auto"}
                />
              </div>
            </div>
            <div className="absolute top-[80px] max-md:scale-[0.7] max-md:right-[-70px] right-[-100px] w-[200px] h-[240px] ">
              {/* <SharedCalenSlabSvg /> */}
              <div className="w-full h-full bg-white/30 backdrop-blur-[4px] rounded-[20px] border-[2px] border-white/50 pt-[20px] rotate-[8deg] relative ">
                <h2 className="font-schibsted text-[18px] lg:text-[18px] font-[600] leading-[118%] text-center">
                  Shared Calendar
                </h2>
                {/* <ShareContent className="rotate-[-8deg] absolute  mx-auto" /> */}
                <Shared className="rotate-[-8deg] absolute top-[10.86px] left-[-20px]  mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstSection;
