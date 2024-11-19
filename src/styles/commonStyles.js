import { css } from "@emotion/react";

export const LinkStyle = css`
  color: black;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #068fff;
  }
`;

export const CardStyle = css`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: #fff;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const BadgeStyle = css`
  background-color: #f5f5f5;
  color: #333;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid #ddd;
`;

export const TitleStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;
