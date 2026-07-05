import React from "react";
import { THEME } from "../theme";
import type { SectionId } from "../types";

interface CTABandProps {
  onNavigate: (id: SectionId) => void;
}

const CTABand: React.FC<CTABandProps> = ({ onNavigate }) => {
  const { green, border } = THEME;

  return (
    <section
      style={{
        padding: "80px 5%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderTop: `1px solid ${border}`,
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(34,197,94,0.08) 0%, transparent 70%)",
      }} />

      <div style={{ position: "relative" }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, margin: "0 0 16px" }}>
          Pronto para modernizar a sua empresa?
        </h2>
        <p style={{ color: "#666", fontSize: 16, marginBottom: 40 }}>
          Fale connosco hoje e receba uma proposta personalizada.
        </p>
        <button
          onClick={() => onNavigate("contacto")}
          onMouseEnter={e => ((e.currentTarget).style.transform = "scale(1.04)")}
          onMouseLeave={e => ((e.currentTarget).style.transform = "scale(1)")}
          style={{
            background: green,
            color: "#000",
            border: "none",
            cursor: "pointer",
            padding: "18px 52px",
            borderRadius: 8,
            fontWeight: 800,
            fontSize: 16,
            boxShadow: "0 0 60px rgba(34,197,94,0.35)",
            transition: "transform 0.2s",
          }}
        >
          Solicitar Proposta Gratuita
        </button>
      </div>
    </section>
  );
};

export default CTABand;
