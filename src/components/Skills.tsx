/** @jsxImportSource @emotion/react */
import React from "react";
import CustomContainer from "./common/CustomContainer";
import { grey } from "@mui/material/colors";
import { css } from "@emotion/react";

const SkillBoxStyle = css`
  padding: 40px;
  background-color: #fff5b8;
  border-radius: 24px;
  margin-top: 48px;
`;

const Skills = () => {
  return (
    <CustomContainer bgColor={"#91c8e4"} title="SKILLS">
      <div css={SkillBoxStyle}>Skills</div>
    </CustomContainer>
  );
};

export default Skills;

// F3E99F
