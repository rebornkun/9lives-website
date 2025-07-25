import Testimonial from "../atoms/Testimonial";

const HomeForthSection = () => {
  return (
    <div className="h-full w-full bg-white ">
      <div className="container mx-auto px-4 pt-[40px] lg:pt-[90px] pb-[40px] lg:pb-[70px] h-fit flex flex-col relative">
        <h4 className="font-schibsted text-[24px] lg:text-[60px] font-[600] leading-[118%] tracking-[-3%] text-center align-center w-full">
          What People Are Saying
        </h4>
        <p className="mt-[17px] lg:mt-[40px] text-[14px] lg:text-[16px] font-[400] leading-[120%] text-center align-center w-[80%] mx-auto lg:w-full">
          Genuine experiences from people who&apos;ve found their rhythm and a
          <br className="max-lg:hidden"></br>
          better way to work, connect, and grow.
        </p>
        <div className="hidden lg:flex mt-[60px] mb-[74px] flex-row items-center justify-center gap-[45px]">
          <div className="relative flex flex-col justify-center items-end">
            <Testimonial
              text={"“Met collaborators, made friends, stayed on track.”"}
              className="rotate-[9deg] translate-y-[-40px] translate-x-[10px]"
            />
            <Testimonial
              text={"“I use it for everything never feels overwhelming.”"}
              className=""
            />
            <Testimonial
              text={"“Feels like my ideal day in an app.”"}
              className="rotate-[-9deg] translate-y-[40px] translate-x-[10px]"
            />
          </div>
          <div className="w-[200px] h-[218px] bg-[#ffffff] rounded-[12px] border-[2px] border-[#F7F7F7] px-[16px] py-[23px] flex flex-col gap-[12px] relative">
            <div className="w-[80%] h-[19px] rounded-[4px] bg-[#EBEBEB] "></div>
            <div className="w-[55%] h-[19px] rounded-[4px] bg-[#F0F0F0] "></div>
            <div className="w-[40%] h-[19px] rounded-[4px] bg-[#E6E6E6] "></div>
            <div className="absolute left-0 right-0 mx-auto bottom-[-16px] bg-primary h-[53px] w-[148px] flex items-center justify-center rounded-[80px] ">
              <p className=" text-white text-[14px] lg:text-[16px] font-[400] leading-[120%] tracking-[-1.4%] ">
                Testimonials
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-start">
            <Testimonial
              text={"“Came for the tools, stayed for the people.”"}
              className="rotate-[-9deg] translate-y-[-40px] translate-x-[-10px]"
            />
            <Testimonial
              text={"“An app that fits how I work and live.”"}
              className=""
            />
            <Testimonial
              text={"Like my brain, calendar, and friends all synced."}
              className="rotate-[9deg] translate-y-[40px] translate-x-[-10px]"
            />
          </div>
        </div>

        {/* for mobile */}
        <div className="mt-[20px] lg:hidden flex flex-col gap-[20px] items-center justify-center w-full">
          <Testimonial
            text={"“Met collaborators, made friends, stayed on track.”"}
            className="rotate-[4deg] translate-x-[0px]"
          />
          <Testimonial
            text={"“I use it for everything never feels overwhelming.”"}
            className=""
          />
          <Testimonial
            text={"“Feels like my ideal day in an app.”"}
            className="rotate-[-4deg] translate-x-[0px]"
          />
          <Testimonial
            text={"“Came for the tools, stayed for the people.”"}
            className="rotate-[-4deg] translate-x-[0px]"
          />
          <Testimonial
            text={"“An app that fits how I work and live.”"}
            className=""
          />
          <Testimonial
            text={"Like my brain, calendar, and friends all synced."}
            className="rotate-[4deg] translate-x-[0px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeForthSection;
