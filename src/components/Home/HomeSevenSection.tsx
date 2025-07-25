import WorkspaceSvg from "../assests/svg/app/WorkspaceSvg";
import LogoBackSvg from "../assests/svg/LogoBackSvg";
import WaitlistWithPeople from "../atoms/WaitlistWithPeople";
import { useState } from "react";

const HomeSevenSection = () => {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      // Use the API route which handles both Supabase and Resend
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === "This email is already on the waitlist") {
          setFormStatus({
            type: "error",
            message: "This email is already on the waitlist",
          });
        } else {
          console.error("API error:", data.error);
          setFormStatus({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
        }
      } else {
        setEmail("");
        setFormStatus({
          type: "success",
          message:
            "You've been added to the waitlist! Check your email for confirmation.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="h-full w-full bg-white ">
      <div className="container mx-auto px-4 pt-[20px] lg:pt-[54px] pb-[84px] lg:pb-[140px] flex flex-col items-center relative">
        <div className="flex flex-col lg:flex-row max-lg:items-center">
          <div className="w-full lg:w-[50%] flex flex-col justify-center z-[2]">
            <h4 className="font-schibsted text-[24px] lg:text-[24px] font-[600] leading-[140%] tracking-[-3%] max-lg:text-center">
              The space you&apos;ve always wanted.
            </h4>
            <p className="mt-[6px] lg:mt-[11px] text-[16px] lg:text-[16px] font-[400] leading-[140%] max-lg:text-center">
              Built for deep work, real connection, and
              <br className="hidden max-lg:block"></br> joyful focus. We&apos;re
              building it with care<br className="hidden max-lg:block"></br> and
              you&apos;re early.
            </p>
            <h3 className="mt-[40px] text-[24px] lg:text-[24px] font-[700] leading-[140%] max-lg:text-center">
              It&apos;s Coming. Quietly<br className="hidden max-lg:block"></br>{" "}
              Powerful on Android & IOS
            </h3>
          </div>
          <div className="w-full lg:w-[50%] z-[2] max-lg:mt-[40px]">
            <div className="w-full h-full flex items-center justify-center rotate-[4deg]">
              <WorkspaceSvg />
            </div>
          </div>
          <div className="absolute right-[-100px] top-[-700px] lg:top-[-10px] z-[1]">
            <LogoBackSvg />
          </div>
        </div>
        {/* waitlist */}
        <div
          id="waitlist"
          className="flex flex-col items-center w-full mt-[60px] lg:mt-[140px]"
        >
          <h3 className="font-schibsted text-[24px] lg:text-[40px] font-[600] leading-[118%] tracking-[-3%] text-center">
            Get Early Access
          </h3>
          <p className="mt-[20px] max-w-[479px] text-[16px] font-[400] leading-[140%] text-center">
            We&apos;re putting the final touches on something truly different.
            Join the waitlist to get early access, shape the experience, and
            unlock exclusive perks before anyone else.
          </p>
          <div className="bg-[#F7F7F7] max-w-[420px] mt-[22px] w-full h-[60px] rounded-[6px] flex items-center p-[6px] z-[2] ">
            <input
              className="flex-1 h-full text-[16px] font-[400] leading-[120%] px-[14px] focus:outline-none text-black placeholder:text-[#AEAEAE] "
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            ></input>
            <button
              className=" h-full flex items-center justify-center px-[20px] rounded-[6px] bg-primary cursor-pointer overflow-hidden group relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-green-200 to-primary opacity-0 group-hover:opacity-60 group-focus:opacity-60 transition-opacity duration-300 z-0"></span>
              <p className="whitespace-nowrap relative text-white text-[16px] font-[500] z-10 transition-all duration-300 group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] group-focus:drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] ">
                {isSubmitting ? "Loading..." : "Join Waitlist"}
              </p>
            </button>
          </div>
          {formStatus.type && (
            <div
              className={`mt-[10px] text-[14px] font-medium ${formStatus.type === "success" ? "text-green-600" : "text-red-600"}`}
            >
              {formStatus.message}
            </div>
          )}
          <span className="mt-[12px]"></span>
          <WaitlistWithPeople />
        </div>
      </div>
    </div>
  );
};

export default HomeSevenSection;
