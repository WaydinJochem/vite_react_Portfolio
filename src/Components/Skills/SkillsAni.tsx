import React from "react";
import { useState, useEffect } from "react";

interface Skills{
  id: number;
  img: string;
  name: string;
}

const SkillsAni:React.FC = () => {
  const skill = useState<Skills[]>([])
  return (
    <> 
    <marquee width="100%" direction="left" >
      This is a sample scrolling text that has scrolls texts to the left.
    </marquee>
    </>
  );
};

export default SkillsAni;
