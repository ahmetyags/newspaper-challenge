import React from "react";
import "./Content.css";
const Content = ({ haber }) => {
  //   console.log("haber geliyor", haber);
  return (
    <div className="list-group">
      {haber.slice(4, 20).map((i, index) => {
        // console.log(i);
        return (
          <a
            href={i.url}
            className="list-group-item list-group-item-action "
            aria-current="true"
            key={index}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-3">{i.title}</h5>
              <small>{i.publishedAt.slice(11, 16)}</small>
            </div>
            <p className="mb-2">{i.description}</p>
            <small>{i.author}.</small>
            <img className="minimg" src={i.urlToImage} alt="" />
          </a>
        );
      })}
    </div>
  );
};

export default Content;
