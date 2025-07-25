import LogoSvg from "../assests/svg/Logo";
import LogoText from "../assests/svg/LogoText";

const Logo = () => {
  return (
    <div className="h-full flex flex-row gap-1 items-center">
      <LogoSvg />
      <LogoText />
    </div>
  );
};

export default Logo;
