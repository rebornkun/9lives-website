"use client";
import HomeFifthSection from "@/components/Home/HomeFifthSection";
import HomeFirstSection from "@/components/Home/HomeFirstSection";
import HomeForthSection from "@/components/Home/HomeForthSection";
import HomeSecondSection from "@/components/Home/HomeSecondSection";
import HomeSevenSection from "@/components/Home/HomeSevenSection";
import HomeSixthSection from "@/components/Home/HomeSixthSection";
import HomeThirdSection from "@/components/Home/HomeThirdSection";

export default function Home() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeForthSection />
      <HomeFifthSection />
      <HomeSixthSection />
      <HomeSevenSection />
    </div>
  );
}
