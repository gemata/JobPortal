import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-6 bg-white rounded-md shadow-sm hover:shadow-lg cursor-pointer transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          {Array.from({ length: testimonial?.rating }).map((_, i) => (
            <FaStar key={i} className="text-yellow-500 mr-1" />
          ))}
        </div>
        <p className="mb-4 text-gray-600">"{testimonial?.description}"</p>
      </div>
      <div className="flex items-center">
        <img
          src={`http://localhost:5000/profilePics/${testimonial?.User?.UserImage?.s3Key}`}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <div className="text-lg font-semibold">{`${testimonial?.User?.firstName} ${testimonial.User?.lastName || ''}`}</div>
          <div className="text-sm text-gray-500">
            {testimonial?.User?.WorkExperiences[0]?.jobTitle}
          </div>
        </div>
        <FaQuoteRight className="ml-auto text-gray-200 text-3xl" />
      </div>
    </div>
  );
};

export default TestimonialCard;
