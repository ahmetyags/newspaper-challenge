import Carousel from "react-bootstrap/Carousel";
import "./Slide.css";
function Slide({ haber }) {
  return (
    <Carousel>
      {haber.slice(0, 3).map((i, index) => {
        // console.log(i);
        return (
          <Carousel.Item interval={1000} key={index}>
            <img
              className="d-block w-100"
              src={i.urlToImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{i.title}</h3>
              <p>{i.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slide;
