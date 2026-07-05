import React, { useState } from "react";
import { THEME } from "../theme";
import { SERVICES } from "../data";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { green, cardBg, border } = THEME;

  return (
    <section
      id="serviços"
      style={{
        padding: "100px 5%",
        background: cardBg,
        borderTop: `1px solid ${border}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: green, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            O Que Fazemos
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, margin: 0 }}>
            Serviços que impulsionam
          </h2>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: green, margin: "4px 0 0" }}>
            o seu negócio.
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              isHovered={hoveredCard === i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
