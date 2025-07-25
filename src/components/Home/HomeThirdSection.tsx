import { Tags } from "@/utils/constants";
import BoxTag from "../atoms/BoxTag";
import WorkspaceSvg from "../assests/svg/app/WorkspaceSvg";
import MarketplaceSvg from "../assests/svg/app/MarketplaceSvg";
import FollowingSvg from "../assests/svg/app/FollowingSvg";
import FollowingTwoSvg from "../assests/svg/app/FollowingTwoSvg";

const HomeThirdSection = () => {
  return (
    <div
      id="features"
      className="h-full w-full bg-white pb-[40px] lg:pb-[90px] "
    >
      <div className="container mx-auto px-4 pt-[70px] h-fit flex flex-col relative">
        <h5 className="font-schibsted text-[16px] lg:text-[24px] font-[600] leading-[118%] tracking-[-3%] text-center align-center w-full">
          Our Features
        </h5>
        <h4 className="mt-[20px] lg:mt-[40px] font-schibsted text-[24px] lg:text-[60px] font-[600] leading-[118%] tracking-[-3%] text-center align-center w-full">
          All the tools you need in one <br></br>focused space.
        </h4>
        <p className="mt-[20px] lg:mt-[50px] font-schibsted text-[18px] lg:text-[48px] font-[400] italic leading-[118%] text-center align-center w-full">
          Your “Everything” App For
        </p>
        <div className="mt-[40px] lg:mt-[60px] w-full flex flex-row gap-[20px]">
          {Tags.map((text, index) => {
            return <BoxTag key={index} text={text} />;
          })}
        </div>
      </div>
      <div className="mt-[20px] lg:mt-[40px] w-full flex flex-row">
        <div className="min-w-fit">
          <WorkspaceSvg />
        </div>
        <div className="min-w-fit">
          <MarketplaceSvg />
        </div>
        <div className="min-w-fit">
          <FollowingSvg />
        </div>
        <div className="min-w-fit">
          <FollowingTwoSvg />
        </div>
        <div className="min-w-fit">
          <FollowingTwoSvg />
        </div>
      </div>
    </div>
  );
};

export default HomeThirdSection;
