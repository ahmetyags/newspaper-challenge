import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Categories.css";
const Categories = () => {
  const [haber, setHaber] = useState([]);
  const News = async () => {
    const API_KEY = `55c93a5adba845178d6adf7c3a6ecd3c`;
    const API_URL = `https://newsapi.org/v2/top-headlines?country=tr&categories=business&apiKey=${API_KEY}`;
    try {
      const { data } = await axios(API_URL);
      setHaber(data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    News();
  }, []);
  console.log(haber);
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
