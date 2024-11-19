/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { CardStyle, LinkStyle, BadgeStyle } from "../styles/commonStyles";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  details: string[];
  link: string;
  techStack: string[];
};

const titleStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const descriptionStyle = css`
  font-size: 1rem;
  color: #555;
  margin-bottom: 16px;
`;

const detailsStyle = css`
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 16px;
  list-style-type: disc;
  padding-left: 16px;
`;

const techStackStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  details,
  link,
  techStack,
}) => {
  return (
    <div css={CardStyle} id={id}>
      <h3 css={titleStyle}>{title}</h3>
      <p css={descriptionStyle}>{description}</p>
      <ul css={detailsStyle}>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <a css={LinkStyle} href={link} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
      <div css={techStackStyle}>
        {techStack.map((tech, index) => (
          <span key={index} css={BadgeStyle}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
