import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Categories.css";
const Categories = () => {
  const [haber, setHaber] = useState([]);
  // const [category, setCategory] = useState();
  const News = async (category) => {
    const API_KEY = `7128d3ec833f4b7688e23849b8bcbd57`;
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
    // console.log(e.target.value);
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

      <div className="cstm-crl border " onClick={handleChange}>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            className="custom-control-input"
            value="general"
          />
          <label className="custom-control-label" htmlFor="customRadio1">
            General
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            className="custom-control-input"
            value="business"
          />
          <label className="custom-control-label" htmlFor="customRadio2">
            Business
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio3"
            name="customRadio"
            className="custom-control-input"
            value="entertainment"
          />
          <label className="custom-control-label" htmlFor="customRadio3">
            Entertainment
          </label>
        </div>

        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio4"
            name="customRadio"
            className="custom-control-input"
            value="health"
          />
          <label className="custom-control-label" htmlFor="customRadio4">
            Health
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio5"
            name="customRadio"
            className="custom-control-input"
            value="science"
          />
          <label className="custom-control-label" htmlFor="customRadio5">
            Science
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio6"
            name="customRadio"
            className="custom-control-input"
            value="sports"
          />
          <label className="custom-control-label" htmlFor="customRadio6">
            Sports
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio7"
            name="customRadio"
            className="custom-control-input"
            value="technology"
          />
          <label className="custom-control-label" htmlFor="customRadio7">
            Technology
          </label>
        </div>
      </div>
      <div className="st-s ">
        {haber.slice(0, 20).map((i, index) => {
          return (
            <div key={index} className="site-section">
              <div
                // href={i.url}
                className="list-group-item list-group-item-action border rounded w-75 "
                aria-current="true"
                // target="_blank"
                // rel="noreferrer"
                key={index}
              >
                <a href={i.url} target="_blank" rel="noreferrer">
                  <img className="minimge" src={i.urlToImage} alt="" />
                </a>
                <div className="new-desc ">
                  <h4 className="mb-3">{i.title}</h4>
                  <p className="mb-2">{i.description}</p>
                </div>

                {/* <small>{i.author}.</small> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
