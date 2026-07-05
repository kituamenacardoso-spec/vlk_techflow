import React from "react";
import { THEME } from "../theme";
import { NAV_LINKS } from "../data";
import VLKLogo from "./VLKLogo";
import type { SectionId } from "../types";

interface FooterProps {
  onNavigate: (id: SectionId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { green, border } = THEME;

  return (
    <footer
      style={{
        borderTop: `1px solid ${border}`,
        padding: "32px 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <VLKLogo size={30} />

      <p style={{ color: "#444", fontSize: 13, margin: 0 }}>
        © {new Date().getFullYear()} VLK-Techflow · Comércio e Serviços · Luanda, Angola
      </p>

      <div style={{ display: "flex", gap: 24 }}>
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onNavigate(id as SectionId)}
            onMouseEnter={e => (e.currentTarget.style.color = green)}
            onMouseLeave={e => (e.currentTarget.style.color = "#444")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#444",
              fontSize: 12,
              letterSpacing: 1,
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
