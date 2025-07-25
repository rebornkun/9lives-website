"use client";
import Link from "next/link";
import Logo from "../atoms/Logo";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Refs for the menu stripes
  const topStripeRef = useRef<HTMLDivElement>(null);
  const middleStripeRef = useRef<HTMLDivElement>(null);
  const bottomStripeRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuContentRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (route: string, e?: React.MouseEvent) => {
    if (route === "/features" || route === "/community" || route === "/waitlist") {
      e?.preventDefault();
      const elementId = route === "/features" ? "features" : route === "/community" ? "community" : "waitlist";
      
      if (pathname !== "/") {
        router.push("/");
        // Wait for page transition before scrolling
        setTimeout(() => {
          document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    handleNavigation("/waitlist", e);
  };

  // GSAP animations for the menu stripes and mobile menu
  useEffect(() => {
    console.log(mobileMenuContentRef.current?.children.length);
    if (menuOpen) {
      // Animate to X shape
      gsap.to(topStripeRef.current, {
        y: 8,
        rotation: 45,
        duration: 0.3,
        ease: "power2.inOut",
      });

      gsap.to(middleStripeRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });

      gsap.to(bottomStripeRef.current, {
        y: -8,
        rotation: -45,
        duration: 0.3,
        ease: "power2.inOut",
      });

      // Animate mobile menu open
      gsap.to(mobileMenuRef.current, {
        height: "380px",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        onStart: () => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.pointerEvents = "all";
          }
        },
      });

      // Animate menu items in staggered fashion
      if (
        mobileMenuContentRef.current &&
        mobileMenuContentRef.current.children.length > 0
      ) {
        gsap.fromTo(
          Array.from(mobileMenuContentRef.current.children),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      }
    } else {
      // Animate back to hamburger shape
      gsap.to(topStripeRef.current, {
        y: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });

      gsap.to(middleStripeRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.inOut",
      });

      gsap.to(bottomStripeRef.current, {
        y: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });

      // Animate mobile menu close
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.pointerEvents = "none";
          }
        },
      });
    }
  }, [menuOpen]);
  const tabs = [
    { name: "Community", route: "/community" },
    { name: "Features", route: "/features" },
    { name: "Contact", route: "/contact" },
  ];
  return (
    <>
      {/* big screens */}
      <div className="fixed w-full hidden lg:flex max-lg:top-[40px] h-[100px] z-50 backdrop-blur-[4px] bg-white/30 border-b-[2px] border-white/50 ">
        <div className="navForBigScreens max-lg:hidden container mx-auto h-full px-4">
          <div className="w-full h-full flex flex-row items-center justify-between">
            {/* first half */}
            <div className="h-full flex flex-row items-center gap-[50px]">
              {/* logo */}
              <Link href="/">
                <Logo />
              </Link>
              {/* logo */}

              {/* tab */}
              <div className=" h-full flex flex-row items-center justify-center gap-[41px]">
                {tabs.map((tab, index) => (
                  <Link
                    href={tab.route}
                    key={index}
                    className="text-[14px] lg:text-[16px] font-[400] hover:text-primary transition-all hover:font-[600] hover:tracking-[2px] "
                    onClick={(e) => handleNavigation(tab.route, e)}
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
              {/* tab */}
            </div>
            {/* first half */}

            {/* second half */}
            <div className=" h-full flex flex-row items-center gap-[30px]">
              <div className="relative">
                <p className="text-slate-400 font-[400]">Sign In</p>
                <p className="absolute top-[-15px] right-[-15px] text-[8px] font-[300] text-black px-[8px] py-[4px] rounded-[20px] bg-slate-100 ">
                  Soon
                </p>
              </div>
              {/* button */}
              <button 
                onClick={scrollToWaitlist}
                className="p-[15px] rounded-[12px] border-primary border-[1.5px] cursor-pointer overflow-hidden group/button relative "
              >
                <p className="relative text-primary font-[600] z-10 transition-all duration-300 group-hover/button:!text-white">
                  Join Waitlist
                </p>
                <div className="bg-primary absolute top-0 left-0 z-0  w-[0px] h-[101%] transition-all duration-200 group-hover/button:w-[101%]"></div>
              </button>
              {/* button */}
            </div>
            {/* second half */}
          </div>
        </div>
      </div>

      {/* small screens */}
      <div className="fixed w-full lg:hidden h-[80px] max-lg:top-[40px] z-50 ">
        <div className="navForSmallScreens lg:hidden container mx-auto h-full w-[80%] px-4 rounded-[20px] backdrop-blur-[4px] bg-white/60 border-b-[2px] border-white/50">
          <div className="flex w-full h-full items-center justify-between">
            {/* logo */}
            <Link href="/">
              <Logo />
            </Link>
            {/* logo */}

            {/* menu button */}
            <div
              className="h-[40px] w-[40px] flex flex-col items-center justify-center gap-[5px] rounded-[6px] border-gray-600 border-[1px] cursor-pointer relative p-[8px] z-20"
              onClick={toggleMenu}
            >
              <div
                ref={topStripeRef}
                className="w-full h-[2px] bg-gray-600 origin-center"
              ></div>
              <div
                ref={middleStripeRef}
                className="w-full h-[2px] bg-gray-600 origin-center"
              ></div>
              <div
                ref={bottomStripeRef}
                className="w-full h-[2px] bg-gray-600 origin-center"
              ></div>
            </div>
            {/* menu button */}
          </div>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      <div className="fixed w-full lg:hidden top-[120px] left-0 mx-auto rounded-[20px]  z-50 ">
        <div
          ref={mobileMenuRef}
          className="container mx-auto w-[80%] rounded-[20px] h-0 opacity-0 pointer-events-none px-4 bg-white/60 backdrop-blur-[4px] border-b-[2px] border-white/50"
        >
          <div
            ref={mobileMenuContentRef}
            className="flex flex-col gap-8 py-8 items-center"
          >
            {tabs.map((tab, index) => (
              <Link
                href={tab.route}
                key={index}
                className="text-[18px] font-[400] hover:text-primary transition-all"
                onClick={(e) => {
                  handleNavigation(tab.route, e);
                  if (tab.route !== "/features") {
                    setMenuOpen(false);
                  }
                }}
              >
                {tab.name}
              </Link>
            ))}

            <div className="pt-6 border-t border-slate-200 flex flex-col gap-[20px] items-center">
              <div className="relative w-fit">
                <p className="text-slate-400 font-[400]">Sign In</p>
                <p className="absolute top-[-15px] right-[-15px] text-[8px] font-[300] text-black px-[8px] py-[4px] rounded-[20px]  ">
                  Soon
                </p>
              </div>
              <button
                className="p-[15px] rounded-[12px] border-primary border-[1.5px] cursor-pointer overflow-hidden group/button relative w-full"
                onClick={(e) => {
                  setMenuOpen(false);
                  scrollToWaitlist(e);
                }}
              >
                <p className="relative text-primary font-[600] z-10 transition-all duration-300 group-hover/button:!text-white text-center">
                  Join Waitlist
                </p>
                <div className="bg-primary absolute top-0 left-0 z-0 w-[0px] h-[101%] transition-all duration-200 group-hover/button:w-[101%]"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
