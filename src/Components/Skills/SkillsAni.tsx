import React from "react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface SkillsProp {
  id: number;
  img: string;
  name: string;
  desc: string;
}

interface SkillModalProps {
  skill: SkillsProp;
  onClose: () => void;
}
// LightHouse Start
const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={skill.img} alt={skill.name} className="modal-image" />
        <h4>{skill.name}</h4>
        <div className="modal-text">{skill.desc}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
// LightHouse End

const SkillsAni: React.FC = () => {
  const [skills, setSkills] = useState<SkillsProp[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<SkillsProp | null>(null);
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

  const handleSkillClick = (skill: SkillsProp) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <Marquee speed={150} pauseOnHover={true}>
        <div className="marquee-content">
          {firstHalf.map((skill) => (
            <div
              key={skill.id}
              className="skill"
              onClick={() => handleSkillClick(skill)}
            >
              <img src={skill.img} alt={skill.name} className="skills" />
              <span className="center">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee speed={100} direction="right" pauseOnHover={true}>
        <div className="marquee-content">
          {secondHalf.map((skill) => (
            <div
              key={skill.id}
              className="skill"
              onClick={() => handleSkillClick(skill)}
            >
              <img src={skill.img} alt={skill.name} className="skills" />
              <span className="center">{skill.name}</span>
            </div>
          ))}
        </div>
  
      </Marquee>
      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={closeModal} />
      )}
    </>
  );
};

export default SkillsAni;
