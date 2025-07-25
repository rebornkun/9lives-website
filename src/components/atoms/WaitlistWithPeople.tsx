import Image from "next/image";

const WaitlistWithPeople = () => {
  return (
    <div className="w-fit h-fit p-[6px] rounded-[20px] bg-white/80 backdrop-blur-[93.89] flex flex-row items-center">
      <Image
        src="/images/personTwo.jpg"
        alt="person one"
        width={26}
        height={26}
        className="rounded-full border-[1px] border-white"
      />
      <Image
        src="/images/personOne.jpg"
        alt="person one"
        width={26}
        height={26}
        className="rounded-full border-[1px] border-white ml-[-7px]"
      />
      <Image
        src="/images/personFour.jpg"
        alt="person one"
        width={26}
        height={26}
        className="rounded-full border-[1px] border-white ml-[-7px]"
      />
      <Image
        src="/images/personThree.jpg"
        alt="person one"
        width={26}
        height={26}
        className="rounded-full border-[1px] border-white ml-[-7px]"
      />
      <p className="text-[12px] font-[400] text-black ml-[8px] mr-[5px]">
        13.6k Currently on our waitlist
      </p>
    </div>
  );
};

export default WaitlistWithPeople;
