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
            <div>
            <h1 className="prodTitle">{_.name}</h1>
            <p className="prodDesc">{_.desc}</p>
            
            <div>
            <hr className="line"/>
            <span style={{marginLeft: "15px", color: "black"}}>View Projects:</span>
            </div>
                <div className="btt">
                  <button className="btn-host">
                    <img src="https://i.ibb.co/p4KTkLf/icons8-globe-50.png" alt={_.name} />
                    <div className="overlap">
                    <a href={_.hostlink} target="blank">Link</a>
                    </div>
                  </button>
                  <button className="btn-git">
                    <img src="https://i.ibb.co/5KBxp0q/icons8-github-50.png" alt={_.name}/>
                    <div className="overlap">
                    <a href={_.github} target="blank">
                      GitHub
                    </a>
                    </div>
                  </button>
                </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card