import React from "react";
import b1 from "../../img/b1.svg";
import b2 from "../../img/b2.svg";
import b3 from "../../img/b3.svg";
import amazon from "../../img/amazon.png";
import google from "../../img/google.png";
import microsoft from "../../img/microsoft.png";
import meta from "../../img/meta.png";
import tesla from "../../img/tesla.png";
import snap from "../../img/snap.webp";
import illu from "../../img/illu.svg";
import Search from "../../components/Header/Search";
import EmpCard from "../../components/HomePageComponents/EmpCard";

const logos = [amazon, google, microsoft, meta, tesla, snap];

const About = () => {
  return (
    <>
      <Search />
      <div className="bg-gray-100">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 py-20">
            <div className="md:w-1/2">
              <div className="who-we-are-container">
                <h4 className="text-purple-500 mb-2">Who we are</h4>
                <h1 className="text-4xl font-bold mb-4">
                  We're a highly skilled and professional team.
                </h1>
                <p className="text-gray-500">
                  We pride ourselves on being a team of experts dedicated to
                  excellence. With our diverse skills and commitment to quality,
                  we deliver exceptional results and solutions to our clients.
                </p>
              </div>
            </div>
            <div className="w-[21%] mt-8 md:mt-0">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <img src={b1} alt="" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold">1,75M</p>
                  <p className="text-gray-500">Live Job</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <img src={b2} alt="" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold">97K</p>
                  <p className="text-gray-500">Companies</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full">
                  <img src={b3} alt="" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold">12M</p>
                  <p className="text-gray-500">Candidates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center py-12 p-8 bg-white space-x-8 mt-[100px] ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="h-12 w-[14%] md:h-16 object-contain"
          />
        ))}
      </div>
      <div className="bg-gray-100">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex flex-col md:flex-row items-center p-8 mt-[100px]">
            <div className="md:w-1/2 p-4">
              <div className="mission-container">
                <h2 className="text-purple-600 text-lg font-semibold">
                  Our Mission
                </h2>
                <h1 className="text-4xl font-bold mt-2">
                  Our mission is to help people find the perfect job.
                </h1>
                <p className="text-gray-500 mt-4">
                  We are dedicated to providing a platform that connects
                  individuals with their ideal career opportunities. Our goal is
                  to simplify the job search process and empower both job
                  seekers and employers.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <img
                src={illu}
                alt="Mission Illustration"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <EmpCard />
    </>
  );
};

export default About;
