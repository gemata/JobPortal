export default function Pricing() {
  return (
    <>
      <img
        src="https://www.tailwindtap.com/assets/components/pricing/flexible-pricing/office.jpg"
        alt="high demand pricing plan background"
        className="h-screen w-full opacity-70 hidden lg:inline-block"
      />
      <container className="bg-gray-300 font-sans lg:bg-transparent flex flex-col lg:flex-row absolute justify-center lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 px-5 xl:px-0 py-8 lg:py-0 w-full gap-6 items-center lg:items-stretch">
        {PRICING_DATA.map((data, index) => (
          <div key={index} className="relative">
            <div className="max-w-sm xl:w-[384px] p-6 bg-white group h-full rounded-2xl lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641]">
              <div className="flex flex-row gap-5 items-center">
                <div>{data.iconComponent}</div>
                <span className="text-3xl font-bold">{data.name}</span>
              </div>
              <span className="flex mt-4 text-[#A9A9AA] text-2xl">
                What You&apos;ll Get
              </span>
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2.5 items-start mt-6 text-left text-lg"
                >
                  <div className="pt-1 shrink-0">
                    <RightIcon />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
              <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
              <div className="h-36">
                <div className="bottom-6 left-6 right-6 absolute">
                  <div className="flex justify-start items-baseline">
                    <span className="text-[32px] font-bold ">{data.price}</span>
                  </div>
                  <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-xl">
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </container>
    </>
  );
}

const RightIcon = () => {
  return (
    <svg
      className="fill-current"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.0001 0.00012207C4.48608 0.00012207 7.62939e-05 4.48612 7.62939e-05 10.0001C7.62939e-05 15.5141 4.48608 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48612 15.5141 0.00012207 10.0001 0.00012207ZM8.00108 14.4131L4.28808 10.7081L5.70008 9.29212L7.99908 11.5871L13.2931 6.29312L14.7071 7.70712L8.00108 14.4131Z" />
    </svg>
  );
};

const PRICING_DATA = [
  {
    name: "Basic Plan",
    price: "$10 per month",
    iconComponent: <RightIcon />,
    benefits: [
      "Basic access to job listings"
    ],
  },
  {
    name: "Standard Plan",
    price: "$20 per month",
    iconComponent: <RightIcon />,
    benefits: [
      "Access to all job listings",
      "Additional features",
    ],
  },
  {
    name: "Premium Plan",
    price: "$30 per month",
    iconComponent: <RightIcon />,
    benefits: [
      "All features",
      "Premium support",
      "Featured job listings",
    ],
  },
];
