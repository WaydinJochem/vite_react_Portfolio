import React from "react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface SkillsProp {
  id: number;
  img: string;
  name: string;
}

const SkillsAni: React.FC = () => {
  const [skills, setSkills] = useState<SkillsProp[]>([]);
  const halfIndex = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, halfIndex);
  const secondHalf = skills.slice(halfIndex);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://waydinjochem.github.io/React.github.io/db.json"
        );
        const data = await response.json();
        setSkills(data.skills);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Marquee speed={150} pauseOnHover={true}>
        <div className="marquee-content">
          {firstHalf.map((skill) => (
            <div key={skill.id} className="skill">
              <img src={skill.img} alt={skill.name} className="skills"/>
              <span className="center">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee speed={150} direction="right" pauseOnHover={true}>
        <div className="marquee-content">
          {secondHalf.map((skill) => (
            <div key={skill.id} className="skill">
              <img src={skill.img} alt={skill.name} className="skills" />
              <span className="center">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default SkillsAni;
