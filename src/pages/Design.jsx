import axios from "axios";
import React, { useEffect, useState } from "react";

const Design = () => {
  const [haber, setHaber] = useState([]);
  const News = async () => {
    const API_KEY = `55c93a5adba845178d6adf7c3a6ecd3c`;
    const API_URL = `https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=${API_KEY}`;
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
  // console.log(haber);
  return (
    <div className="contant">
      <h2>
        <u className="posthead">Design</u>
      </h2>
      {haber.slice(0, 20).map((i) => {
        return (
          <div className="site-section news-3">
            <div className="contain col-lg-9">
              <h2 className="header-2">{i.description}</h2>
              <p className="contents">{i.content}</p>
              <span className="news-contain pr-2">{i.author}</span>
            </div>
            <div className="section col-lg-3">
              <a className="links" href={i.url}>
                {i.title}
              </a>
              <span className="news-contain">Dave Rogers in News</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Design;
