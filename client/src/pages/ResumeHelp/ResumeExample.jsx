import React from "react";
import page1 from "./img/page1.png";
import page2 from "./img/page2.png";

const ResumeExample = () => {
  return (
    <>
      <div className="bg-[#f1f2f4]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <h2 className="text-[blue] text-2xl font-semibold text-center pt-[50px] pb-[50px]">
            Here is our resume example
          </h2>
          <div className="flex justify-center gap-5 pb-[50px]">
            <img
              src={page1}
              className="w-2/5 border border-solid border-[black]"
              alt="page 1"
            />
            <img
              src={page2}
              className="w-2/5 border border-solid border-[black]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeExample;
