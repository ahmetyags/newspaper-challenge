import React from "react";
import "../style/Categories.css";
const Categories = () => {
  return (
    <div className="site-section news-3">
      <div className="contain col-lg-9">
        <span>Categories</span>
        <h2>
          <u className="underline">politics</u>
        </h2>
        <h2 className="header-2">
          News Needs to Meet Its Audiences Where They Are
        </h2>
        <p className="contents">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          temporibus praesentium neque, voluptatum quam quibusdam.
        </p>
        <span className="news-contain">Dave Rogers in News</span>
        <span className="date">year</span>
      </div>
      <div className="section col-lg-3">
        <h2>
          <u>Popular Posts</u>
        </h2>
        <a className="links" href="#">
          News Needs to Meet Its Audiences Where They Are
        </a>
        <span className="news-contain">Dave Rogers in News</span>
      </div>
    </div>
  );
};

export default Categories;
