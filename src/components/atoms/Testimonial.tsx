const Testimonial = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`w-fit px-[20px] flex items-center justify-center h-[60px] rounded-[12px] bg-[#FCFCFC] border-[2px] border-[#F7F7F7] ${className}`}
    >
      <p className=" text-[10px] lg:text-[12px] font-[500] leading-[120%] tracking-[-1.4%] ">
        {text}
      </p>
    </div>
  );
};

export default Testimonial;
