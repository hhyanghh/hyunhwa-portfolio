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
  margin-top: 40px;
`;

const Project: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const projects = [
    {
      id: "project1",
      title: "개인 개발 블로그",
      description:
        "Next.js와 Tailwind CSS를 활용해 구축한 개발 블로그입니다. Contentlayer를 사용해 MDX 기반 콘텐츠를 관리하며, 서버 사이드 렌더링으로 빠른 로딩 속도와 SEO를 강화했습니다. 깔끔하고 전문적인 디자인으로 학습과 경험을 기록합니다.",
      details: [
        "공부하면서 알게되는 지식과, 업무를 통한 경험을 기록하는 블로그 입니다.",
        "디자인, 기획, 개발 과정을 거친 결과물 입니다.",
      ],
      projectLink: "https://example.com/project1",
      techStack: [
        "Next.js",
        "Tailwind",
        "TypeScript",
        "vercel",
        "contentlayer",
      ],
    },
    {
      id: "project2",
      title: "포트폴리오 웹사이트",
      description: "A brief description of Project 2.",
      details: [
        "Built with Next.js and styled-components",
        "Implemented server-side rendering",
        "Interactive UI components",
      ],
      projectLink: "https://example.com/project2",
      techStack: ["React", "React Router", "Emotion", "TypeScript"],
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
      projectLink: "https://example.com/project1",
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
      projectLink: "https://example.com/project2",
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
            projectLink={project.projectLink}
            notionLink={"https://notion.io"}
            techStack={project.techStack}
          />
        ))}
      </div>
    </CustomContainer>
  );
};

export default Project;
