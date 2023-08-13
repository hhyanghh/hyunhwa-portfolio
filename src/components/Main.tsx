/** @jsxImportSource @emotion/react */
import React from "react";
import { grey } from "@mui/material/colors";
import CustomContainer from "./common/CustomContainer";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const bgImg = `https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`;

const MainStyle = css`
  margin-top: 64px;
  background-image: url(${bgImg});
  background-color: #7fc7d9;
  background-position: center;
  padding: 120px 0 80px;
  color: white;
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
          <Button variant="contained" color="warning">
            더 알아보기
          </Button>
        </Grid>
      </div>
    </Box>
  );
};

export default Main;

// 오랫동안 여행과 밀접한 삶을 살다가, 현재는 웹을 여행중인 주니어 개발자 양현화입니다.
// "여행출발일" 전에 모든것을 준비하는 시간관리에 능숙합니다.
// 항상 배우는 자세로, 한결같이 열심히 일하겠습니다.

// 적재적소에 알맞은 기술을 적용하여 최고의 UX를 제공할 수 있는
// 항상 고민하는
// 프론트엔드 개발자가 되고싶습니다.
