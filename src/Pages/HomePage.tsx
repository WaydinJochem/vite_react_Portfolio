import React from "react";
import "../Styles/HomePage.css";

const HomePage: React.FC = () => {
  const icons = [
    "https://i.ibb.co/yyDSq0L/icons8-linkedin-80.png",
    "https://i.ibb.co/5KBxp0q/icons8-github-50.png",
    "https://i.ibb.co/WgMBYRG/vercel-256x225.png",
  ];
  const references = ["https://www.linkedin.com/in/waydinjochem/",  "https://github.com/WaydinJochem?tab=repositories","https://vercel.com/waydinjochems-projects",]
  const iconNames = ["LinkedIn", "Github", "Vercel"];
  return (
    <section id="card" className="homePage">
      <div id="profile">
        <img
          src="https://i.ibb.co/1bpbzJy/Waydin-auto-x2-removebg-preview.png"
          alt=""
        />
      </div>
      <div id="intro">
        <div>
          <h1><strong>!!!</strong> Hello World <strong>!!!</strong></h1>
          <p>
            Introducing my latest website portfolio design, inspired and created
            through multiple trial and error, I would like to say welcome to a
            world that was created by Waydin Jochem.
          </p>
        </div>
        <br />
          <ul id="icons">
            {icons.map((icons, index) => (
              <li key={icons}>
                <a href={references[index]} className="link">
                  <img src={icons} alt="" />
                  <span className="texts">{iconNames[index]}</span>
                </a>
              </li>
            ))}
          </ul>
      </div>
    </section>
  );
};

export default HomePage;
