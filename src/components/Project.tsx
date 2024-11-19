import React from "react";

import CustomContainer from "./common/CustomContainer";

type ProjectsProps = {
  onProjectClick: (projectId: string) => void;
};

const Project: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const projects = [
    { id: "project1", name: "Project 1" },
    { id: "project2", name: "Project 2" },
  ];

  return (
    <CustomContainer title={"Projects"}>
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

export default Project;
