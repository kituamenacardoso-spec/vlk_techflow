import React from "react";
import { THEME } from "../theme";
import { NAV_LINKS } from "../data";
import VLKLogo from "./VLKLogo";
import type { SectionId } from "../types";

interface NavbarProps {
  scrolled: boolean;
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, activeSection, onNavigate }) => {
  const { green, border, textLight } = THEME;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "0 5%",
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(13,13,13,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${border}` : "none",
        transition: "all 0.3s",
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={() => onNavigate("home")}>
        <VLKLogo size={38} />
      </div>

      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {NAV_LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onNavigate(id as SectionId)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: activeSection === id ? green : textLight,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              transition: "color 0.2s",
              padding: "4px 0",
              borderBottom: activeSection === id
                ? `2px solid ${green}`
                : "2px solid transparent",
            }}
          >
            {label}
          </button>
        ))}

        <button
          onClick={() => onNavigate("contacto")}
          onMouseEnter={e => ((e.target as HTMLButtonElement).style.opacity = "0.85")}
          onMouseLeave={e => ((e.target as HTMLButtonElement).style.opacity = "1")}
          style={{
            background: green,
            color: "#000",
            border: "none",
            cursor: "pointer",
            padding: "10px 24px",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1,
            transition: "opacity 0.2s",
          }}
        >
          Fale Connosco
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
