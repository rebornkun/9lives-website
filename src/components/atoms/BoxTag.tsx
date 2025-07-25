const BoxTag = ({ text }: { text: string }) => {
  return (
    <div className="min-w-[200px] h-[60px] flex flex-row items-center justify-center rounded-[12px] border-[2px] border-[#F7F7F7] bg-[#F7F7F7]/30 backdrop-blur-[94px] ">
      <p className=" text-[16px] lg:text-[16px] font-[400] leading-[120%]">
        {text}
      </p>
    </div>
  );
};

export default BoxTag;
