import React from "react";
import "../Styles/HomePage.css";

const HomePage: React.FC = () => {
  const icons = [
    "https://i.postimg.cc/bYBJCH5L/icons8-linkedin-80.png",
    "https://i.postimg.cc/k4NHVcbC/icons8-firebase-a-google-s-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-80.png",
    "https://i.postimg.cc/h4dbcrdZ/icons8-github-80-1.png",
  ];
  const iconNames = ["LinkedIn", "Firebase", "Github"];
  return (
    <section id="card">
      <div id="profile">
        <img
          src="https://i.postimg.cc/DwkPHvTm/Waydin_auto_x2-removebg-preview.png"
          alt=""
        />
      </div>
      <div id="intro">
        <h1>Hi There</h1>
        <p>
          Introducing my latest website portfolio design, inspired and created
          through multiple trial and error, I would like to say welcome to a
          world that was created by Waydin Jochem
        </p>
        <div id="icons">
          <ul>
            {icons.map((icons, index) => (
              <li key={icons}>
                <a href="#" className="link">
                  <img src={icons} alt="" />
                  <span className="text">{iconNames[index]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
