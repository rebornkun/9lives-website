import BlackLogoSvg from "../assests/svg/BlackLogoSvg";
import Link from "next/link";
import LinkdlnSvg from "../assests/svg/LinkdlnSvg";
import TikTokSvg from "../assests/svg/TikTokSvg";
import InstagramSvg from "../assests/svg/InstagramSvg";
import LivesSvg from "../assests/svg/LivesSvg";

const tabs = [
  { name: "Privacy Policy", route: "/privacy-policy" },
  { name: "Community Guidelines", route: "/community-guidelines" },
  { name: "Terms", route: "/terms" },
];
const Footer = () => {
  return (
    <div className="w-full lg:pb-[92px] pb-[40px] ">
      <div className="container mx-auto px-4 flex flex-col items-center relative">
        <div className="lg:px-[27px] flex justify-between w-full">
          <BlackLogoSvg />
          <div className="flex flex-row items-center gap-[8px] lg:gap-[46px]">
            {tabs.map((tab, index) => (
              <Link
                href={tab.route}
                key={index}
                className="text-[12px] lg:text-[16px] font-[400] hover:text-primary transition-all hover:font-[600] hover:tracking-[2px] "
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-200 mt-[20px] lg:mt-[91px] mb-[20px] lg:mb-[60px]"></div>
        <div className="w-full flex flex-row items-center justify-between gap-[20px] flex-wrap-reverse">
          <p className="max-lg:w-[40%] text-[12px] lg:text-[16px] font-[400]">
            ©️ Benekan Inc 2025.
          </p>
          <p className="max-lg:w-[40%] text-[12px] lg:text-[16px] font-[400]">
            Made with ❤️ in Nigeria
          </p>
          <div className="flex flex-row items-center gap-[27px] max-lg:w-full max-lg:justify-center ">
            <LinkdlnSvg />
            <TikTokSvg />
            <InstagramSvg />
            <LivesSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
