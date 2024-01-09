import React, { useEffect, useState } from "react";

interface TestProps {
  id: number;
  img: string;
  name: string;
  state: string;
}

const TestView: React.FC = () => {
  const [Testimonials, setTestimonials] = useState<TestProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://waydinjochem.github.io/React.github.io/db.json"
        );
        const data = await response.json();
        setTestimonials(data.Testimonials);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flip-main mx-auto mb-5">
      {Testimonials.map((_, index) => (
       <div className="container" key={index}>
       <img src={_.img} alt="Avatar" className="image"/>
       <div className="overlay">
         <div className="text">
            <div className="d-flex flex-row mb-3">
                <img src={_.img} alt="" id="over-image"/>
                <h5 className="my-auto ms-3">{_.name}</h5>
            </div>
            <p className="">
                {_.state}
            </p>
         </div>
       </div>
     </div>     
      ))}
    </div>
  );
};

export default TestView;
