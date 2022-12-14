import React, { useEffect, useState } from "react";
import Slide from "../components/Slide/Slide";
import axios from "axios";
import Content from "../components/Content/Content";
import "../style/Home.css";
const Home = () => {
  const [haber, setHaber] = useState([]);
  const News = async () => {
    const API_KEY = `676f017549224f488970f1835f9db971`;
    const API_URL = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
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
  // console.log(haber, "geldi");
  return (
    <div className="home-div">
      <Slide haber={haber} />
      <Content haber={haber} />
    </div>
  );
};

export default Home;
