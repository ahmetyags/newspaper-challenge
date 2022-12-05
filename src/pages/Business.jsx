import React, { useEffect, useState } from "react";
import axios from "axios";

const Business = () => {
  const [haber, setHaber] = useState([]);
  const News = async () => {
    const API_KEY = `b687d4c6128f4dc68e4f8c39785a6ed0`;
    const API_URL = `https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=${API_KEY}`;
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
        <u className="posthead">Business</u>
      </h2>
      {haber.slice(0, 20).map((i, index) => {
        return (
          <div key={index} className="site-section news-3">
            <div className="contain col-lg-9">
              <img className="imagesurl" src={i.urlToImage} alt="news" />
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

export default Business;
