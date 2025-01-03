/** @jsxImportSource @emotion/react */

import React from "react";
import CustomContainer from "./common/CustomContainer";
import { grey } from "@mui/material/colors";
import { CgProfile } from "react-icons/cg";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { TbBrandBlogger } from "react-icons/tb";
import { css } from "@emotion/react";
import { LinkStyle } from "../styles/commonStyles";
import { Link } from "react-router-dom";

interface InfoAreaProps {
  icon: any;
  info: any;
}

const myInfos = [
  { id: 1, info: "양현화", icon: <CgProfile /> },
  { id: 2, info: "서울시 강동구", icon: <HiOutlineLocationMarker /> },
  { id: 3, info: "devhhyang@gmail.com", icon: <HiOutlineMail /> },
  { id: 4, info: "010-6252-4120", icon: <BiPhone /> },
  {
    id: 5,
    info: (
      <Link
        to="https://devhyunhwa.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        css={LinkStyle}
      >
        https://devhyunhwa.vercel.app/
      </Link>
    ),
    icon: <TbBrandBlogger />,
  },
];

const AboutStyle = css`
  max-width: 640px;
  border-radius: 24px;
  padding: 30px;
  margin: 24px auto 0;
  display: flex;
  gap: 36px;
  /* border: 3px solid grey; */
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ImgStyle = css`
  width: 220px;
  border-radius: 8px;
`;

const profileImg = `https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80`;

// Info 영역
const InfoItemStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  svg {
    font-size: 24px;
    margin-right: 10px;
    color: ${grey[800]};
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;
const InfoArea: React.FC<InfoAreaProps> = ({ icon, info }) => {
  return (
    <div css={InfoItemStyle}>
      {icon}
      <span>{info}</span>
    </div>
  );
};

const About = () => {
  return (
    <CustomContainer title="ABOUT ME">
      <div css={AboutStyle}>
        <div>
          <img src={profileImg} css={ImgStyle} alt="프로필 이미지" />
        </div>
        <div>
          {myInfos.map((info) => (
            <InfoArea key={info.id} icon={info.icon} info={info.info} />
          ))}
        </div>
      </div>
    </CustomContainer>
  );
};

export default About;
