import React from "react";
import SearchSection from "../../components/Search/SearchSection";
import "./style.css";

const Home = () => {
  return (
    <div className="homepage">
      <SearchSection />
      <div className="help-section">
        <div className="help-section__wrapper">
          <div className="img">
            <img
              src="https://image.cnbcfm.com/api/v1/image/107069627-1654086975733-gettyimages-143071319-pe0080780.jpeg?v=1688154770"
              alt="graduate"
            />
          </div>
          <ul className="help-list">
            <div className="help-section__title">
              Just graduated? We can help
            </div>

            <li>
              <a href="">Visit the new grad hub</a>
            </li>
            <li>
              <a href="">Search salaries by major</a>
            </li>
            <li>
              <a href="">Get a free resume assessment</a>
            </li>
            <li>
              <a href="">Search entry-level jobs</a>
            </li>
          </ul>
        </div>
      </div>
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
