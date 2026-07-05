import React from "react";
import { THEME } from "../theme";
import VLKLogo from "./VLKLogo";
import CircuitLine from "./CircuitLine";
import type { SectionId } from "../types";

interface HeroProps {
  onNavigate: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { green, border } = THEME;

  const handleServicesBtnMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.transform = "translateY(-2px)";
    btn.style.boxShadow = `0 8px 48px rgba(34,197,94,0.45)`;
  };
  const handleServicesBtnMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.transform = "translateY(0)";
    btn.style.boxShadow = `0 0 40px rgba(34,197,94,0.3)`;
  };
  const handleContactBtnMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.borderColor = green;
    btn.style.color = green;
  };
  const handleContactBtnMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.borderColor = border;
    btn.style.color = "#fff";
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 5% 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${border} 1px, transparent 1px), linear-gradient(90deg, ${border} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        opacity: 0.4,
      }} />

      {/* Green glow */}
      <div style={{
        position: "absolute",
        top: "30%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 600, height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <CircuitLine style={{ top: 80,   left: -40 }} />
      <CircuitLine style={{ bottom: 40, right: -40, transform: "scaleX(-1)" }} />

      <div style={{ position: "relative", maxWidth: 820 }}>
        {/* Badge */}
        <div style={{
          display: "inline-block",
          background: "rgba(34,197,94,0.1)",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: 20,
          padding: "6px 18px",
          fontSize: 12,
          letterSpacing: 2,
          color: green,
          textTransform: "uppercase",
          marginBottom: 32,
        }}>
          Comércio e Serviços · Angola
        </div>

        <div style={{ marginBottom: 32 }}>
          <VLKLogo size={70} />
        </div>

        <h1 style={{
          fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: "0 0 12px",
          background: "linear-gradient(135deg, #fff 40%, #888)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Tecnologia que<br />
          <span style={{ WebkitTextFillColor: green }}>move o seu negócio.</span>
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          color: "#888",
          maxWidth: 560,
          margin: "24px auto 48px",
          lineHeight: 1.7,
        }}>
          Soluções tecnológicas de ponta para empresas angolanas. Infraestrutura,
          segurança, conectividade — tudo num só parceiro.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => onNavigate("serviços")}
            onMouseEnter={handleServicesBtnMouseEnter}
            onMouseLeave={handleServicesBtnMouseLeave}
            style={{
              background: green,
              color: "#000",
              border: "none",
              cursor: "pointer",
              padding: "16px 40px",
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: 0.5,
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 40px rgba(34,197,94,0.3)",
            }}
          >
            Ver Serviços
          </button>

          <button
            onClick={() => onNavigate("contacto")}
            onMouseEnter={handleContactBtnMouseEnter}
            onMouseLeave={handleContactBtnMouseLeave}
            style={{
              background: "transparent",
              color: "#fff",
              border: `1px solid ${border}`,
              cursor: "pointer",
              padding: "16px 40px",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            Fale Connosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
