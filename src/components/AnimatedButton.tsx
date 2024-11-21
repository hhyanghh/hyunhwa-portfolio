/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

type AnimatedButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const waveUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  80% {
    transform: translateY(5%);
    opacity: 1;
  }
  100% {
    transform: translateY(10%);
    opacity: 1;
  }
`;

const buttonStyle = css`
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  font-size: 18px;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background-color: #2c697a;
  }

  &:hover .wave {
    animation: ${waveUp} 1.5s ease-out infinite; /* 무한 반복 */
  }

  &:hover .wave:nth-of-type(2) {
    animation-delay: 0.2s; /* 두 번째 파도의 약간의 딜레이 */
  }
`;

const waveContainerStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const waveStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  fill: rgba(255, 255, 255, 0.4);
  transform: translateY(100%);
  opacity: 0;
`;

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button css={buttonStyle} onClick={onClick}>
      <span>{children}</span>
      <div css={waveContainerStyle}>
        {/* 첫 번째 파도 */}
        <svg
          className="wave"
          css={waveStyle}
          viewBox="0 0 1200 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,49 C150,97 450,0 600,49 C750,97 1050,0 1200,49 L1200,120 L0,120 Z" />
        </svg>
        {/* 두 번째 파도 */}
        <svg
          className="wave"
          css={[waveStyle, { fill: "rgba(255, 255, 255, 0.6)" }]}
          viewBox="0 0 1200 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,49 C150,0 450,97 600,49 C750,0 1050,97 1200,49 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </button>
  );
};

export default AnimatedButton;
