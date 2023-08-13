/** @jsxImportSource @emotion/react */
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";

interface ContainerColors {
  bgColor?: string;
  containerColor?: string;
  children: any;
  title?: string;
}

const CustomContainer = ({
  bgColor,
  containerColor,
  children,
  title,
}: ContainerColors) => {
  const BgStyle = css`
    background-color: ${bgColor};
  `;
  const ContainerStyle = css`
    padding: 4rem 2rem;
  `;
  const SectionTitle = css`
    font-family: Black Han Sans, sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.5;
    text-align: center;
  `;

  const DividerStyle = css`
    height: 4px;
    width: 73px;
    display: block;
    margin: 0 auto 0;
    background-color: #ff3366;
  `;
  return (
    <Box css={BgStyle}>
      <Container
        maxWidth="md"
        style={{ backgroundColor: containerColor }}
        css={ContainerStyle}
      >
        <Typography css={SectionTitle}>{title}</Typography>
        <span css={DividerStyle}></span>
        {children}
      </Container>
    </Box>
  );
};

export default CustomContainer;
