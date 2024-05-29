import React, { useEffect } from "react";

const ProfileHeader = ({ userData }) => {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          {/* Dynamic profile picture */}
          <img
            src={"https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold">{`Hi, hello`}</p>
          <p className="text-base text-gray-500">{"Position"}</p>
          <p className="text-base text-gray-500">{"Location"}</p>
        </div>
        <button
          type="button"
          className="ml-auto bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          onClick={() => {}}
        >
          {/* Pencil icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
