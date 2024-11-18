import React from "react";

import CustomContainer from "./common/CustomContainer";

type WorksProps = {
  onProjectClick: (projectId: string) => void;
};

const Works: React.FC<WorksProps> = ({ onProjectClick }) => {
  const projects = [
    { id: "project1", name: "Project 1" },
    { id: "project2", name: "Project 2" },
  ];

  return (
    <CustomContainer title={"Works"}>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onProjectClick(project.id)}>
            {project.name}
          </li>
        ))}
      </ul>
    </CustomContainer>
  );
};

export default Works;
