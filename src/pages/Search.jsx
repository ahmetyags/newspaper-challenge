import React, { useContext } from "react";
import { SearchNewsContext } from "../components/context/SearchNews";
import "../style/Search.css";
const Search = () => {
  const { searchNews } = useContext(SearchNewsContext);
  return (
    <div className="contant">
      <h2>
        <u className="postheader">Search</u>
      </h2>
      {searchNews?.map((i, index) => {
        return (
          <div className="site-section news-3" key={index}>
            <div className="contain col-lg-9">
              <img className="imagesurl" src={i.urlToImage} alt="news" />
              <h2 className="header-2">{i.description || ""}</h2>
              <p className="contents">{i.content || ""}</p>
              <span className="news-contain pr-2">{i.author || ""}</span>
            </div>
            <div className="section col-lg-3">
              <a className="links" href={i.url || ""}>
                {i.title || ""}
              </a>
              <span className="news-contain">Dave Rogers in News</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
