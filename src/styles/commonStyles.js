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
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease;
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
