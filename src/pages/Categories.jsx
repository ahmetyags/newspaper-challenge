import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Categories.css";
const Categories = () => {
  const [haber, setHaber] = useState([]);
  // const [category, setCategory] = useState();
  const News = async (category) => {
    const API_KEY = `676f017549224f488970f1835f9db971`;
    const API_URL = `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=${API_KEY}`;
    try {
      const { data } = await axios(API_URL);
      setHaber(data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    News(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    News();
  }, []);
  // console.log(haber);
  return (
    <div className="contant">
      <h2>
        <u className="posthead">Categories</u>
      </h2>
      <div className="contain col-lg-3">
        <select
          className="custom-select custom-select-sm border border-light"
          size={8}
          onChange={handleChange}
        >
          {/* <option defaultValue>All Categories</option> */}
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>

      {haber.slice(0, 20).map((i, index) => {
        return (
          <div key={index} className="site-section news-3">
            <div className="section col-lg-9">
              <img className="imagesurl" src={i.urlToImage} alt="news" />
              <h2 className="header-2">{i.description}</h2>
              <p className="contents">{i.content}</p>
              <span className="news-contain pr-2">{i.author}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
