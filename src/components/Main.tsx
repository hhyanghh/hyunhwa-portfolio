/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const MainStyle = css`
  height: 90vh;
  background-image: url("/images/bg-image.png");
  background-color: #7fc7d9;
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 120px 0 80px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;
  }
`;

const MainTitleStyle = css`
  font-weight: 400;
`;

const Main = () => {
  return (
    <Box>
      <div css={MainStyle}>
        <Typography variant="h2" align="center" css={MainTitleStyle}>
          양현화 포트폴리오
        </Typography>
        <Typography align="center">
          오랫동안 여행과 밀접한 삶을 살다가, 현재는 웹을 여행중인 주니어 개발자
          양현화입니다. <br />
          "여행출발일" 전에 모든것을 준비하는 시간관리에 능숙합니다. <br />
          적재적소에 알맞은 기술을 적용하여 최고의 UX를 제공할 수 있는 <br />
          프론트엔드 개발자가 되고싶습니다.
        </Typography>
        <Grid container justifyContent={"center"}>
          <Link to="https://www.naver.com" target="_blank">
            <AnimatedButton onClick={() => alert("Clicked!")}>
              자세히 알아보기
            </AnimatedButton>
          </Link>
        </Grid>
      </div>
    </Box>
  );
};

export default Main;
