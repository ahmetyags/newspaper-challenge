import React from "react";
import "./Content.css";
const Content = ({ haber }) => {
  //   console.log("haber geliyor", haber);
  return (
    <div className="list-group">
      {haber.slice(4, 20).map((i, index) => {
        // console.log(i);
        return (
          <div
            // href={i.url}
            className="list-group-item list-group-item-action w-100 "
            aria-current="true"
            // target="_blank"
            // rel="noreferrer"
            key={index}
          >
            <div className=" w-50">
              <span className="clock border rounded">
                {i.publishedAt.slice(11, 16)}
              </span>
            </div>
            <a href={i.url} target="_blank" rel="noreferrer">
              <img className="minimg" src={i.urlToImage} alt="" />
            </a>
            <div className="news-descr mw-100 ">
              <h4 className="mb-3">{i.title}</h4>
              <p className="mb-1">{i.description}</p>
            </div>

            {/* <small>{i.author}.</small> */}
          </div>
        );
      })}
    </div>
  );
};

export default Content;
