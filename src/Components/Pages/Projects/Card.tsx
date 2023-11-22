import React, { useEffect, useState } from "react"

interface projectProp{
    id: number;
    name: string;
    desc: string;
    hostlink: string;
    github: string;
  }

const Card: React.FC = () => {

  const [projects,setProjects ] =useState<projectProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://waydinjochem.github.io/React.github.io/db.json"
        );
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="prodCard">
      {
        projects.map((_,index) => (
          <div key={index} className="inner-prod">
            <h1 className="prodTitle">{_.name}</h1>
            <p className="prodDesc">{_.desc}</p>
            <hr />
            <span style={{marginLeft: "15px", color: "black"}}>View Projects:</span>
            <div className="btn">
              <button className="btn-host">
                <img src="https://i.postimg.cc/TYYr1fyr/icons8-globe-50.png" alt="" />
                <div className="overlay">
                <a href={_.hostlink} target="blank">Link</a>
                </div>
              </button>
              <button className="btn-git">
                <img src="https://i.postimg.cc/kMyQ7B5J/icons8-github-50.png" alt="" />
                <div className="overlay">
                <a href="#">
                  GitHub
                </a>
                </div>
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card