import React from "react";
import { THEME } from "../theme";
import { STATS } from "../data";

const StatsBand: React.FC = () => {
  const { green, cardBg, border } = THEME;

  return (
    <section
      style={{
        background: cardBg,
        borderTop:    `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        padding: "48px 5%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 32,
        textAlign: "center",
      }}
    >
      {STATS.map(({ value, label }) => (
        <div key={label}>
          <div style={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: green,
            lineHeight: 1,
          }}>
            {value}
          </div>
          <div style={{
            color: "#666",
            fontSize: 13,
            marginTop: 8,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            {label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsBand;
