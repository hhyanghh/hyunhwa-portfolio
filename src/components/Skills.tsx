//@ts-nocheck
/** @jsxImportSource @emotion/react */
import React from "react";
import CustomContainer from "./common/CustomContainer";
import { css } from "@emotion/react";
import { SkillBars } from "react-skills";
import { skillsData } from "../data/datas";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { grey } from "@mui/material/colors";

import Typography from "@mui/material/Typography";

interface DetailSkillsProps {
  name: string;
  desc: string;
  icon: any;
}

const detailSkills = [
  {
    name: "React",
    desc: "리엑트의 렌더링 주기를 이해하며, 성능 최적화 작업 경험이 있습니다. 다양한 라이브러리 경험, 공식문서에 대한 이해도가 높아, 활용력이 높습니다.",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    desc: "자바스크립트에서 제공하는 기본 API를 필요에 맞게 활용할 수 있습니다. ",
    icon: <IoLogoJavascript />,
  },
  {
    name: "TypeScript",
    desc: "타입스크립트 대한 내용 ",
    icon: <SiTypescript />,
  },
];

const SkillBoxStyle = css`
  padding: 40px;
  background-color: ${grey[200]};
  border-radius: 24px;
  margin-top: 48px;
`;

const SkillGridStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailSkillStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  padding: 16px;

  svg {
    font-size: 64px;
    color: #4682a9;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailSkills: React.FC<DetailSkillsProps> = ({ icon, name, desc }) => {
  return (
    <div css={DetailSkillStyle}>
      <div>{icon}</div>
      <Typography variant="h5" pt={2}>
        {name}
      </Typography>
      <Typography pt={1}>{desc}</Typography>
    </div>
  );
};

const Skills = () => {
  return (
    <CustomContainer bgColor={"#91c8e4"} title="SKILLS">
      <div css={SkillBoxStyle}>
        <SkillBars skills={skillsData} flat />
        <div css={SkillGridStyle}>
          {detailSkills.map((skill) => (
            <DetailSkills
              icon={skill.icon}
              name={skill.name}
              desc={skill.desc}
            />
          ))}
        </div>
      </div>
    </CustomContainer>
  );
};

export default Skills;
