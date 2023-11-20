import React from "react";

interface Skills{
  id: number;
  img: string;
  name: string;
}

const SkillsAni:Skills = () => {
  return (
    <> 
    <marquee width="100%" direction="left" >
      This is a sample scrolling text that has scrolls texts to the left.
    </marquee>
    </>
  );
};

export default SkillsAni;
