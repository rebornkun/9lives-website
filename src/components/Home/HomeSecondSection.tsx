import { exploreCards } from "@/utils/constants";
import ExploreCard from "../atoms/ExploreCard";

const HomeSecondSection = () => {
  return (
    <div className=" w-full bg-white">
      <div className="container mx-auto px-4 pt-[80px] lg:pt-[155px] pb-[70px] h-fit flex flex-col">
        <h1 className="font-schibsted text-[24px] lg:text-[60px] font-[600] leading-[118%] tracking-[-3%] text-center align-center w-full">
          Explore your 9lives
        </h1>
        <div className="mt-[20px] lg:mt-[60px] w-fit mx-auto items-center place-content-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {exploreCards.map((card, index) => (
            <ExploreCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSection;
