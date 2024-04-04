import React from "react";
import SearchSection from "../../components/Home/SearchSection";

const Home = () => {
  return (
    <div className="homepage">
      <SearchSection />
    </div>
  );
};

export default Home;

/* */
/*<div className="homepage">
      <div className="search-section">
        <div className="container">
          <h1 className="title">
            <span className="colored-text">Find the </span>
            <span> right </span>
            <span className="colored-text">fit.</span>
          </h1>
          <div className="search-bar">
            <input type="text" placeholder="search" />
          </div>
          <span className="small-txt">
            <a href="#">Upload your resume</a> - Get noticed by top employers
          </span>
        </div>
      </div>
    </div> */
