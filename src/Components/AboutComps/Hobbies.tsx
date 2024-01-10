// AboutPage.jsx
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

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
  }, []); 

  const CarouselSlide = (index: number) => {
    setCurrentHobbyIndex(index);
  };

  return (
    <>
      <div className="card p-5" id="firstcard">
        <Carousel
          hobbies={hobbies}
          currentHobbyIndex={currentHobbyIndex}
          onSlide={CarouselSlide}
        />
        <div className="mx-auto text-center">
          <h3>Passions & Hobbies</h3>
          <div className="card mt-5 rounded-0" style={{ width: '40rem' }} id="add_on">
            <div className="card-body">
              <h4 className="card-title" style={{fontWeight: "bold", fontSize: "30px"}}>{hobbies[currentHobbyIndex]?.title}</h4>
              <p className="card-text">{hobbies[currentHobbyIndex]?.descr}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbies;

