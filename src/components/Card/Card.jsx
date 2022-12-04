import React from "react";
import "./Card.css";
import moviegif from "../../documents/movie-app.gif";
import applegif from "../../documents/apple.gif";
import weathergif from "../../documents/weather.gif";
const Card = () => {
  return (
    <div className="container">
      <h2 className="headline">Frontend developer</h2>
      <h4 className="topic">SUMMARY</h4>
      <p className="message">
        Having 3+ years experience in IT and 1+ years of experience in frontend
        development, interested in writing codes, skilled at developing complex
        solutions, creating responsive designs, possessing strong creative
        thinking skills, high energy and integrity. Ability to create algorithms
        effectively, and interact positively and communicate appropriately with
        team members. Quickly grasp new technologies and concepts to develop
        innovative and creative solutions to problems. Always eager to learn
        various technologies, tools and libraries. Especially interested in
        Front end/Web Development, HTML, CSS, JS, React. Excited to learn new
        things and improve, lifetime student. Notable achievements include
        boosting the conversion rate of an existing website by 80% with improved
        code and design.
      </p>
      <h4 className="topic">PROJECTS</h4>
      <p className="message">
        <b>Movie App :</b> In this project, it is aimed to display cinema
        posters by using the tmdb api. There is a search feature according to
        the entered word. Skills/Tools : React-router library, Bootstrap
        library, Axios library and Firebase.
      </p>
      <a href="https://movie-app-ahmetyags.vercel.app/" target="_blank">
        <img className="images" src={moviegif} alt="movieapp" />
      </a>
      <p className="message">
        <b>IOS Calculator :</b> In this project, it is aimed to create an ios
        calculator. Basic arithmetic calculations can be performed with a
        standard calculator. Skills/Tools : CSS custom properties, Flexbox, CSS
        Grid, Javascript DOM, Javascript Events.
      </p>
      <a href="https://ahmetyags.github.io/ios-calculator/" target="_blank">
        <img className="images" src={applegif} alt="calculator" />
      </a>
      <p className="message">
        <b>Weather App :</b> In this project is to display current weather data
        of searched cities around the world with fetching Weather Api data.
        Skills/Tools : HTML, CSS, Weather Api.
      </p>
      <a href="https://ahmetyags.github.io/weather-app/" target="_blank">
        <img className="images" src={weathergif} alt="weather" />
      </a>
    </div>
  );
};

export default Card;
