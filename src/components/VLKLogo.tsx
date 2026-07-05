import React from "react";
import { THEME } from "../theme";

interface VLKLogoProps {
  size?: number;
}

const VLKLogo: React.FC<VLKLogoProps> = ({ size = 60 }) => {
  const G = THEME.green;
  const w = size * 1.8;
  const h = size;

  return (
    <svg width={w} height={h} viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* V   M 10 0 L 50 100 L 90 0 Z  M8 15 L35 80 L50 45 L65 80 L92 15 */  }
      <path d="M8 0 L42 45 L65 80 90 0"
        stroke="white" strokeWidth="14"
        strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      {/* Circuit nodes on V */}
      <circle cx="8"  cy="15" r="5" stroke={G} strokeWidth="2.5" fill="none" />
      <circle cx="92" cy="15" r="5" stroke={G} strokeWidth="2.5" fill="none" />
      <path d="M8 15 Q8 8 15 8 L30 8"  stroke={G} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M92 15 Q92 8 85 8 L70 8" stroke={G} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* L */}
      <path d="M100 15 L100 80 L125 80"
        stroke="white" strokeWidth="14"
        strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      {/* K */}
      <path d="M135 15 L135 80 M135 47 L162 15 M135 47 L165 80"
        stroke="white" strokeWidth="14"
        strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      {/* Circuit nodes on K */}
      <path d="M162 15 Q168 15 168 21 L168 30" stroke={G} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="168" cy="30" r="4" stroke={G} strokeWidth="2.5" fill="none" />
      <path d="M165 80 Q172 80 172 73 L172 65" stroke={G} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="172" cy="65" r="4" stroke={G} strokeWidth="2.5" fill="none" />
      {/* Junction dots */}
      <circle cx="50"  cy="45" r="4" fill={G} />
      <circle cx="135" cy="47" r="4" fill={G} />
    </svg>
  );
};

export default VLKLogo;
