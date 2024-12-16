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
      description:
        "React와 Emotion CSS를 활용해 구축한 포트폴리오 웹사이트입니다. 직관적인 인터페이스와 현대적인 디자인으로 개발자로서의 역량과 프로젝트를 체계적으로 소개합니다. GitHub Pages를 통해 배포하였으며, 사용자 친화적인 UX를 제공합니다.",
      details: [
        "디자인, 기획, 개발 전 과정을 직접 수행한 프로젝트입니다.",
        "여러 프로젝트와 작업물을 체계적으로 정리하여 소개합니다.",
        "404 페이지, 프로젝트 상세 페이지 등 주요 페이지를 포함합니다.",
      ],
      projectLink: "https://example.com/project2",
      techStack: ["React", "React Router", "Emotion", "TypeScript"],
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
