import React, { useState } from "react";
import pricing from "./img/pricing.svg";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "BASIC",
    price: "$19",
    features: [
      "Post 1 Job",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 5 Candidates",
      "10 Days Resume Visibility",
      "24/7 Critical Support",
    ],
  },
  {
    name: "STANDARD",
    price: "$39",
    features: [
      "3 Active Jobs",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 10 Candidates",
      "20 Days Resume Visibility",
      "24/7 Critical Support",
    ],
    recommended: true,
  },
  {
    name: "PREMIUM",
    price: "$59",
    features: [
      "6 Active Jobs",
      "Urgents & Featured Jobs",
      "Highlights Job with Colors",
      "Access & Saved 20 Candidates",
      "30 Days Resume Visibility",
      "24/7 Critical Support",
    ],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <>
      <div className="max-w-[1200px] mx-auto my-0 px-[15px]">
        <div className="flex flex-col lg:flex-row items-center justify-between mt-[50px] py-8 bg-white">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-4">
              Buy Premium Subscription to Post a Job
            </h1>
            <p className="mb-8 text-gray-700">
              Donec eu dui ut dolor commodo ornare. Sed arcu libero, malesuada
              quis justo sit amet, varius tempus neque. Quisque ultrices mi sed
              lorem condimentum, vel tempus lectus ultricies.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <img src={pricing} alt="Illustration" />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto my-0 px-[15px]">
        <div className="flex flex-col items-center justify-center py-2 mt-[50px] mb-[50px]">
          <div className="flex flex-nowrap justify-center space-x-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                onMouseEnter={() => setSelectedPlan(index)}
                onMouseLeave={() => setSelectedPlan(null)}
                onClick={() => setSelectedPlan(index)}
                className={`w-full max-w-sm p-6 bg-white rounded-lg shadow-lg border cursor-pointer mt-[27px] ${
                  selectedPlan === index ? "border-blue-500" : ""
                } ${plan.recommended ? "relative border-4" : "border"}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full">
                    Recommended
                  </div>
                )}
                <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
                <p className="text-4xl font-bold mb-4">
                  {plan.price}
                  <span className="text-lg">/Monthly</span>
                </p>
                <ul className="mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <FaCheck className="text-blue-500 w-6 h-6 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
