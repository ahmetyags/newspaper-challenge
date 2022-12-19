import React, { useContext } from "react";
import { SearchNewsContext } from "../components/context/SearchNews";
import "../style/Search.css";
const Search = () => {
  const { searchNews } = useContext(SearchNewsContext);
  console.log(searchNews);
  return (
    <div className="contanter">
      <h2>
        <u className="postheaders">Searched Word:</u>
      </h2>

      {searchNews?.map((i, index) => {
        return (
          <div className="site-sections news-3 w-100" key={index}>
            <div className="contains col-lg-9">
              <a
                className="links"
                target="_blank"
                rel="noreferrer"
                href={i.url || ""}
              >
                {/* {i.title || ""} */}
                <img className="imagenurl" src={i.urlToImage} alt="news" />
              </a>

              <h2 className="header-2">{i.description || ""}</h2>
              <p className="contents">{i.content || ""}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
