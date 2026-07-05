import React from "react";
import { THEME } from "../theme";
import type { Service } from "../types";

interface ServiceCardProps extends Service {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  desc,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { green, dark, border } = THEME;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: isHovered ? "#181818" : dark,
        border: `1px solid ${isHovered ? "rgba(34,197,94,0.4)" : border}`,
        borderRadius: 16,
        padding: "32px 28px",
        transition: "all 0.25s",
        cursor: "default",
        transform: isHovered ? "translateY(-4px)" : "none",
        boxShadow: isHovered ? "0 20px 60px rgba(34,197,94,0.1)" : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top shimmer on hover */}
      {isHovered && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${green}, transparent)`,
        }} />
      )}

      <div style={{ marginBottom: 20 }}>{icon}</div>
      <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#fff" }}>{title}</h3>
      <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  );
};

export default ServiceCard;
