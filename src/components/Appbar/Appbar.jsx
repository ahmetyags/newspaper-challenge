import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchNewsContext } from "../context/SearchNews";

const Appbar = () => {
  const navigate = useNavigate();
  const { searchNews, setSearchNews } = useContext(SearchNewsContext);
  const [query, setQuery] = useState([]);

  const News = async () => {
    const API_KEY = `b687d4c6128f4dc68e4f8c39785a6ed0`;
    const API_URL = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`;
    try {
      const { data } = await axios(API_URL);
      setSearchNews(data.articles);
      console.log({ searchNews });
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    News();
    setQuery("");
    navigate("/search");
  };

  console.log(query, "query yaz");
  return (
    <nav className="navbar">
      <div className="container-fluid ">
        <a className="navbar-brand ">Ahmet Yağız Özbak</a>
        <form onSubmit={handleSubmit} className="forminput" role="search">
          <input
            className="form-control me-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleQuery}
            value={query}
          />
          <i className="bi bi-search" typeof="button">
            <button
              className="btn btn-outline-dark mr-10"
              type="submit"
            ></button>
          </i>
        </form>
      </div>
    </nav>
  );
};

export default Appbar;
