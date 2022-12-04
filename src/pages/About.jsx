import React from "react";
import "../style/About.css";
import pdfFile from "../documents/pdfFile.pdf";
import Card from "../components/Card/Card";

const About = () => {
  return (
    <div>
      <Card />
      <div
        className="headerProfile-menu-list"
        onClick={() => window.open(pdfFile)}
      >
        <button className="mdi mdi-help-circle">Resume</button>
      </div>
    </div>
  );
};

export default About;
