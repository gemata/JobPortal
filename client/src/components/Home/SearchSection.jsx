import React from "react";

const SearchSection = () => {
  return (
    <div className="bg-jobportal-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">
          <span className="text-purple-200">Find the </span>
          <span className="text-white"> right </span>
          <span className="text-purple-200">fit.</span>
        </h1>
        <div className="mt-4 w-3/4 mx-auto">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="search"
          />
        </div>
        <span className="text-white block text-center mt-4">
          <a href="/" className="text-white">
            Upload your resume
          </a>{" "}
          - Get noticed by top employers
        </span>
      </div>
    </div>
  );
};

export default SearchSection;
