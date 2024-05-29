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
              <span className="text-jobportal-pink">Resume Help</span>
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
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <div className="flex justify-between flex-row-reverse pt-[100px] pb-[70px]">
          <div className="w-[53%] justify-items-center mt-20">
            <span className="text-jobportal-pink">How to build a resume</span>
            <p className="paragraph">
              <p class="text-gray-800 mb-4">
                Building a resume involves highlighting your key skills and
                experiences in a clear and professional manner. By following a
                structured approach, you can create a resume that effectively
                communicates your qualifications to potential employers.
              </p>
              <ul class="list-disc pl-5 text-gray-800">
                <li class="mb-2">
                  <strong>Professional Summary</strong>: Write a brief overview
                  of your key skills and career goals.
                </li>
                <li class="mb-2">
                  <strong>Work Experience</strong>: Focus on achievements and
                  responsibilities in your previous roles.
                </li>
                <li>
                  <strong>Skills</strong>: Highlight technical and soft skills
                  relevant to the job you're applying for.
                </li>
              </ul>
            </p>
          </div>
          <div className="w-[28%]">
            <img src={skills} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#f1f2f4]">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between pt-[100px] pb-[70px]">
            <div className="w-6/12 justify-items-center mt-20">
              <span className="text-jobportal-pink">Resume Example</span>
              <p className="paragraph">
                To see a well-crafted resume, check out our{" "}
                <Link
                  to="/resume-example"
                  className="text-jobportal-pink hover:text-fuchsia-900"
                >
                  resume example
                </Link>{" "}
                . This sample showcases the best practices for presenting your
                skills and experience effectively. By following the structure
                and style demonstrated in this example, you can ensure your
                resume stands out to potential employers and highlights your
                qualifications in the best possible way.
              </p>
            </div>
            <div className="w-[28%]">
              <img src={pdf} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeHelp;
