/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { TbLink, TbFileText } from "react-icons/tb";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  details: string[];
  projectLink: string;
  notionLink: string;
  techStack: string[];
};

const cardStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: #ffffff;
  padding: 24px;
  min-height: 400px;
`;

const titleStyle = css`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #333;
`;

const descriptionStyle = css`
  font-size: 1rem;
  color: #555;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const detailsStyle = css`
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 20px;
  list-style-type: disc;
  padding-left: 20px;
`;

const techStackStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const badgeStyle = css`
  background-color: rgba(0, 0, 0, 0.05);
  color: #007bff;
  font-size: 0.85rem;
  padding: 4px 8px;
  border-radius: 4px;
`;

const linksContainerStyle = css`
  display: flex;
  gap: 16px;
  margin-top: auto;
`;

const linkButtonStyle = css`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #003366;
  text-decoration: none;
  border: 1.5px solid #003366;
  background-color: transparent;
  border-radius: 4px;
  padding: 6px 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffc857;
    color: #003366;
    border-color: #ffc857;
    text-decoration: none;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  details,
  projectLink,
  notionLink,
  techStack,
}) => {
  return (
    <div css={cardStyle} id={id}>
      <h3 css={titleStyle}>{title}</h3>

      <div css={techStackStyle}>
        {techStack.map((tech, index) => (
          <span key={index} css={badgeStyle}>
            {tech}
          </span>
        ))}
      </div>

      <p css={descriptionStyle}>{description}</p>

      <ul css={detailsStyle}>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>

      <div css={linksContainerStyle}>
        <a
          css={linkButtonStyle}
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbLink size={20} />
          프로젝트 방문
        </a>

        <a
          css={linkButtonStyle}
          href={notionLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbFileText size={20} />
          자세히 알아보기
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
