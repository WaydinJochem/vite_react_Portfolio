import React, { useEffect, useState } from "react"
import "../Style/Projects.css"

interface projectProp{
  id: number;
  name: string;
  desc: string;
  hostlink: string;
  github: string;
}

const ProjectPage: React.FC = () => {
  const [projects,setProjects ] =useState<>
  return (
    <div>ProjectPage</div>
  )
}

export default ProjectPage