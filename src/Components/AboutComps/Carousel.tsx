// Carousel.jsx
import React from "react";
interface Hobby {
  id: number;
  img: string;
  title: string;
  descr: string;
}

interface CarouselProps {
  hobbies: Hobby[];
  currentHobbyIndex: number;
  onSlide: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  hobbies,
  currentHobbyIndex,
  onSlide,
}) => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        {/* Inner Start */}
        <div className="carousel-indicators">
          {hobbies.map((_, index) => (
            <button
              key={index}
              className={`custom-indicator ${
                index === currentHobbyIndex ? "active" : ""
              }`}
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              onClick={() => onSlide(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className={`carousel-item ${
                index === currentHobbyIndex ? "active" : ""
              }`}
            >
              <img
                src={hobby.img}
                alt=""
                className="d-block mx-auto sizing rounded-circle"
              />
            </div>
          ))}
        </div>
        {/* Inner End */}
        {/* Controls Start */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() =>
            onSlide((currentHobbyIndex - 1 + hobbies.length) % hobbies.length)
          }
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={() => onSlide((currentHobbyIndex + 1) % hobbies.length)}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        {/* Controls End */}
      </div>
    </>
  );
};

export default Carousel;
