/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import CustomContainer from "./common/CustomContainer";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  onProjectClick: (projectId: string) => void;
};

const gridContainerStyle = css`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Project: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const projects = [
    {
      id: "project1",
      title: "Project 1",
      description: "A brief description of Project 1.",
      details: [
        "Built with React and Emotion",
        "Focus on performance optimization",
        "Responsive design for mobile and desktop",
      ],
      link: "https://example.com/project1",
      techStack: ["React", "Emotion", "TypeScript"],
    },
    {
      id: "project2",
      title: "Project 2",
      description: "A brief description of Project 2.",
      details: [
        "Built with Next.js and styled-components",
        "Implemented server-side rendering",
        "Interactive UI components",
      ],
      link: "https://example.com/project2",
      techStack: ["Next.js", "styled-components", "JavaScript"],
    },
    {
      id: "project1",
      title: "Project 1",
      description: "A brief description of Project 1.",
      details: [
        "Built with React and Emotion",
        "Focus on performance optimization",
        "Responsive design for mobile and desktop",
      ],
      link: "https://example.com/project1",
      techStack: ["React", "Emotion", "TypeScript"],
    },
    {
      id: "project2",
      title: "Project 2",
      description: "A brief description of Project 2.",
      details: [
        "Built with Next.js and styled-components",
        "Implemented server-side rendering",
        "Interactive UI components",
      ],
      link: "https://example.com/project2",
      techStack: ["Next.js", "styled-components", "JavaScript"],
    },
  ];

  return (
    <CustomContainer title={"Projects"} bgColor="#003366" titleColor="#ffffff">
      <div css={gridContainerStyle}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            details={project.details}
            link={project.link}
            techStack={project.techStack}
          />
        ))}
      </div>
    </CustomContainer>
  );
};

export default Project;
