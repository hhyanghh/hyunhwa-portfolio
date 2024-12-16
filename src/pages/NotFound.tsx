/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundStyle = css`
  text-align: center;
  background-color: #003366;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 400px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.5;
  }

  a {
    font-size: 1rem;
    text-decoration: none;
    color: #ffffff;
    background-color: #ffc857;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ffb133;
    }
  }
`;

const NotFoundPage = () => {
  return (
    <Box css={NotFoundStyle}>
      <img
        src="https://assets.codepen.io/1538474/404.svg"
        alt="404 Not Found"
      />
      <h2>404 Oops! This Page Could Not Be Found</h2>
      <h3>
        SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, <br />
        HAS BEEN REMOVED, NAME CHANGED, OR IS TEMPORARILY UNAVAILABLE
      </h3>
      <Link to="/">GO TO HOMEPAGE</Link>
    </Box>
  );
};

export default NotFoundPage;
