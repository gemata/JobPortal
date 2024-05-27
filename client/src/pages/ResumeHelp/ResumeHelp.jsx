import React from "react";
import resume from "./img/cv.svg";
import skills from "./img/skills.svg";
import pdf from "./img/pdf.svg";
import { Link } from "react-router-dom";

const ResumeHelp = () => {
  return (
    <>
      <div className="bg-[#f1f2f4]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between pt-[100px] pb-[70px]">
            <div className="w-6/12 justify-items-center mt-20">
              <span className="text-[blue]">Resume Help</span>
              <p className="paragraph">
                Our team specializes in helping you craft the perfect resume,
                tailored to showcase your unique skills and experiences. We
                provide personalized guidance on highlighting your strengths,
                optimizing your resume's format, and ensuring it aligns with
                industry standards. By collaborating with our experts, you'll
                receive valuable insights and feedback, transforming your resume
                into a powerful tool that effectively communicates your
                qualifications and sets you apart in the competitive job market.
              </p>
            </div>
            <div className="w-[28%]">
              <img src={resume} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeHelp;
