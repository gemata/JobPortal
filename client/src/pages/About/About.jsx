import React from "react";
import logo from "../Home/img/mainLogo.png";
import { FaSearch } from "react-icons/fa";
import b1 from "./img/b1.svg";
import b2 from "./img/b2.svg";
import b3 from "./img/b3.svg";
import amazon from "./img/amazon.png";
import google from "./img/google.png";
import microsoft from "./img/microsoft.png";
import meta from "./img/meta.png";
import tesla from "./img/tesla.png";
import snap from "./img/snap.webp";
import illu from "./img/illu.svg";

const logos = [amazon, google, microsoft, meta, tesla, snap];

const About = () => {
  return (
    <>
      <div className="mt-5 mb-5">
        <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
          <div className="flex justify-between items-center">
            <div className="w-[50px]">
              <img src={logo} alt="" />
            </div>
            <div className="relative w-[70%]">
              <FaSearch className="absolute -translate-y-2/4 text-[blue] left-2.5 top-2/4" />
              <input
                className="w-full border rounded pl-[50px] pr-2.5 py-2.5 border-solid border-[#f1f2f4]"
                type="text"
                placeholder="Job title, keyword, company"
              />
            </div>
            <div className="flex gap-2.5">
              <button className="px-3 py-[7px] border border-solid border-[blue]">
                Login
              </button>
              <button className="px-3 py-[7px] border border-solid border-[blue]">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-white mt-[100px]">
          <div className="md:w-1/2">
            <h4 className="text-blue-500 mb-2">Who we are</h4>
            <h1 className="text-4xl font-bold mb-4">
              We’re highly skilled and professionals team.
            </h1>
            <p className="text-gray-500">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam.
              Aliquam metus mauris, semper eu eros vitae, blandit tristique
              metus. Vestibulum maximus nec justo sed maximus.
            </p>
          </div>
          <div className="w-[21%] mt-8 md:mt-0">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <img src={b1} alt="" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold">1,75M</p>
                <p className="text-gray-500">Live Job</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <img src={b2} alt="" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold">97K</p>
                <p className="text-gray-500">Companies</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
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
      <div className="flex flex-wrap justify-center items-center p-8 bg-white space-x-8 mt-[100px] ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="h-12 w-[14%] md:h-16 object-contain"
          />
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <div className="flex flex-col md:flex-row items-center p-8 bg-white mt-[100px]">
          <div className="md:w-1/2 p-4">
            <h2 className="text-blue-600 text-lg font-semibold">Our Mission</h2>
            <h1 className="text-4xl font-bold mt-2">
              Our mission is to help people to find the perfect job.
            </h1>
            <p className="text-gray-500 mt-4">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam.
              Aliquam metus mauris, semper eu eros vitae, blandit tristique
              metus. Vestibulum maximus nec justo sed maximus.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src={illu} alt="Mission Illustration" className="max-w-full" />
          </div>
        </div>
      </div>
      <div className="container max-w-[1200px] mx-auto my-0 px-[15px]">
        <div className="flex space-x-4 mt-[100px] mb-[100px]">
          <div className="bg-gray-100 p-6 rounded-lg flex-1">
            <h2 className="text-2xl font-bold mb-2">Become a Candidate</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              cursus a dolor convallis efficitur.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Register Now →
            </button>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg text-white flex-1">
            <h2 className="text-2xl font-bold mb-2">Become a Employers</h2>
            <p className="mb-4">
              Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi
              sed efficitur dolor. Pelque augue risus, aliqu.
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
              Register Now →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
