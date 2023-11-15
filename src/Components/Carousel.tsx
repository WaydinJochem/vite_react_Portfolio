import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/About.css"
// import "bootstrap/dist/js/bootstrap.min.js";

import React, { useState, useEffect } from 'react';

interface Hobby {
  id: number;
  img: string;
  title: string;
  descr: string;
}

const Carousel: React.FC = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://waydinjochem.github.io/React.github.io/db.json');
        const data = await response.json();
        setHobbies(data.hobbies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array ensures that the effect runs only once on component mount

  return (
    <>
      <div id="carouselExample" className="carousel slide p-0 col-3">
        {/* Inner Start */}
        <div className="carousel-inner">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="">
             <img src={hobby.img} alt="" className="d-block w-50 mx-auto"/>
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

