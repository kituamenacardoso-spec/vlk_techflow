import React, { CSSProperties } from "react";
import { THEME } from "../theme";

interface CircuitLineProps {
  style?: CSSProperties;
}

const CircuitLine: React.FC<CircuitLineProps> = ({ style }) => {
  const G = THEME.green;

  return (
    <svg
      style={{ position: "absolute", ...style }}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      opacity="0.07"
      aria-hidden="true"
    >
      <path d="M20 100 H60 Q70 100 70 90 V40 Q70 30 80 30 H180" stroke={G} strokeWidth="2" />
      <circle cx="20"  cy="100" r="5" stroke={G} strokeWidth="2" />
      <circle cx="180" cy="30"  r="5" stroke={G} strokeWidth="2" />
      <circle cx="70"  cy="90"  r="3" fill={G} />
      <path d="M100 180 V140 Q100 130 110 130 H180" stroke={G} strokeWidth="2" />
      <circle cx="100" cy="180" r="5" stroke={G} strokeWidth="2" />
      <circle cx="180" cy="130" r="5" stroke={G} strokeWidth="2" />
    </svg>
  );
};

export default CircuitLine;
