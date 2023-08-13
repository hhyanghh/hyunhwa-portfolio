/** @jsxImportSource @emotion/react */
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";

interface ContainerColors {
  bgColor: string;
  containerColor?: string;
  children: any;
}

const CustomContainer = ({
  bgColor,
  containerColor,
  children,
}: ContainerColors) => {
  const BgStyle = css`
    background-color: ${bgColor};
  `;
  return (
    <Box css={BgStyle}>
      <Container maxWidth="md" style={{ backgroundColor: containerColor }}>
        {children}
      </Container>
    </Box>
  );
};

export default CustomContainer;
