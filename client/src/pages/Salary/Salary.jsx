import React from "react";
import money from "./img/money.svg";
import benefit from "./img/benefit.svg";

const Salary = () => {
  return (
    <>
      <div className="bg-[#f1f2f4]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between pt-[100px] pb-[70px]">
            <div className="w-6/12 justify-items-center mt-20">
              <span className="text-[blue]">Salary</span>
              <p className="paragraph">
                A salary is a fixed regular payment that an employee receives
                from an employer in exchange for their work. It is usually
                expressed annually but paid monthly or biweekly, and remains
                constant regardless of hours worked, offering financial
                stability and predictability.
              </p>
            </div>
            <div className="w-[28%]">
              <img src={money} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <div className="flex justify-between flex-row-reverse pt-[100px] pb-[70px]">
          <div className="w-6/12 justify-items-center mt-20">
            <span className="text-[blue]">Are you getting paid enough ?</span>
            <p className="paragraph">
              Determining if you are getting paid enough involves comparing your
              salary to industry standards, considering your experience,
              education, and location. Evaluate your compensation against
              similar roles and check if it meets your financial needs and
              career expectations.
            </p>
          </div>
          <div className="w-[28%]">
            <img src={benefit} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#f1f2f4] mt-[100px]">
        <h2 className="text-[blue] font-400 text-xl text-center pt-[50px]">
          Fill the form below and our team will email you to inform if you are
          getting paid correctly
        </h2>
        <div class="flex space-x-2 pb-[100px] pt-[50px] justify-center">
          <input
            type="text"
            placeholder="Enter your profession and country here"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 w-[60%]"
          />
          <button class="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Salary;
