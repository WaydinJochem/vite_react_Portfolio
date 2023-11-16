// AboutPage.jsx
import "../Styles/About.css"
import React, { useState, useEffect } from 'react';
import Carousel from './AboutComps/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Hobby {
  id: number;
  img: string;
  title: string;
  descr: string;
}

const Hobbies: React.FC = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [currentHobbyIndex, setCurrentHobbyIndex] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://waydinjochem.github.io/React.github.io/db.json'
        );
        const data = await response.json();
        setHobbies(data.hobbies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array ensures that the effect runs only once on component mount

  const CarouselSlide = (index: number) => {
    setCurrentHobbyIndex(index);
  };

  return (
    <>
      <div className="card mx-auto my-5 p-5" id="firstcard">
        <Carousel
          hobbies={hobbies}
          currentHobbyIndex={currentHobbyIndex}
          onSlide={CarouselSlide}
        />
        <div className="mx-auto text-center">
          <h2>Passions & Hobbies</h2>
          <div className="card mt-5 rounded-0" style={{ width: '40rem' }} id="hobbies">
            <div className="card-body">
              <h4 className="card-title">{hobbies[currentHobbyIndex]?.title}</h4>
              <p className="card-text">{hobbies[currentHobbyIndex]?.descr}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbies;

