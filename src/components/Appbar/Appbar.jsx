import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchNewsContext } from "../context/SearchNews";
import { Button } from "react-bootstrap";

const Appbar = () => {
  const navigate = useNavigate();
  const { searchNews, setSearchNews } = useContext(SearchNewsContext);
  const [query, setQuery] = useState([]);

  const News = async () => {
    const API_KEY = `649866a13f7a4d529a6b03b95e5b57ae`;
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

  // console.log(query, "query yaz");
  return (
    <nav className="navbar">
      <div className="container-fluid ">
        <a className="navbar-brand-name" href="/about">
          <span className="name-nav">Ahmet Yağız Özbak</span>
        </a>
        <form onSubmit={handleSubmit} className="forminput" role="search">
          <input
            className="form-control me-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleQuery}
            value={query}
          />
          <Button className="w-30 buton " type="submit" variant="dark">
            src
          </Button>
        </form>
      </div>
    </nav>
  );
};

export default Appbar;
