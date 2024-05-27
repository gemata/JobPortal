import React from "react";
import careerImg from "./img/consult.svg";
import research from "./img/man.svg";
import mail from "./img/mail.svg";

const CareerAdvice = () => {
  return (
    <>
      <div className="bg-[#f1f2f4]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between pt-[100px] pb-[70px]">
            <div className="w-6/12 justify-items-center mt-20">
              <span className="text-[blue]">Career Advice</span>
              <p className="paragraph">
                Our team provides personalized career consulting to help
                individuals enhance their career paths. We offer expert advice
                on job searches, career transitions, and skill development,
                including resume writing, interview preparation, and networking
                strategies. Our goal is to empower clients to achieve their
                professional aspirations and succeed in the evolving job market.
              </p>
            </div>
            <div className="w-[28%]">
              <img src={careerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <div className="flex justify-between flex-row-reverse mt-[100px] mb-[100px]">
          <div className="w-6/12 justify-items-center mt-20">
            <span className="text-[blue]">Research</span>
            <p className="paragraph">
              Our team conducts thorough research to find the best career
              solutions for you. We analyze industry trends, job market demands,
              and individual strengths to offer tailored advice. By staying
              updated on the latest developments, we ensure you receive the most
              relevant and effective guidance for achieving your career goals.
            </p>
          </div>
          <div className="w-1/5">
            <img src={research} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#f1f2f4]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between pt-[100px] pb-[100px]">
            <div className="w-6/12 justify-items-center mt-20">
              <span className="text-[blue]">Reach us</span>
              <p className="paragraph">
                People can easily contact us through email for personalized
                career consulting. Just send your inquiries to {""}
                <span className="text-[blue]">jobhorizon@gmail.com</span>, and
                our team will respond promptly to assist you with expert advice
                and guidance.
              </p>
            </div>
            <div className="w-1/5">
              <img src={mail} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerAdvice;
