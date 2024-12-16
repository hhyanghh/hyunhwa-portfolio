/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import CustomContainer from "./common/CustomContainer";
import { grey } from "@mui/material/colors";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const linksContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 30px; /* 아이콘 간 간격 */
  margin-top: 20px;
`;

const iconStyle = css`
  font-size: 2.5rem; /* 아이콘 크기 */
  color: #003366; /* 기본 색상 */
  transition: all 0.3s ease;

  &:hover {
    color: #ff3366; /* 호버 시 색상 변경 */
    transform: scale(1.2); /* 확대 효과 */
  }
`;

const Contact = () => {
  return (
    <CustomContainer>
      <div css={linksContainerStyle}>
        {/* 이메일 링크 */}
        <a
          href="mailto:devhhyang@gmail.com"
          rel="noopener noreferrer"
          css={iconStyle}
        >
          <FaEnvelope />
        </a>

        {/* GitHub 링크 */}
        <a
          href="https://github.com/hhyanghh"
          target="_blank"
          rel="noopener noreferrer"
          css={iconStyle}
        >
          <FaGithub />
        </a>

        {/* LinkedIn 링크 */}
        {/* <a
          href="https://linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          css={iconStyle}
        >
          <FaLinkedin />
        </a> */}
      </div>
    </CustomContainer>
  );
};

export default Contact;
