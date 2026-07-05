import React from "react";
import { THEME } from "../theme";
import VLKLogo from "./VLKLogo";

const ABOUT_ITEMS = [
  "BPM (Gestão de Processos de Negócio)",
  "ECM (Gestão de conteúdo empresarial)",
  "RPA (Automação Robótica de Processos)",
  "Desenvolvimento de aplicações",
] as const;

const PILLARS = ["Confiança", "Inovação", "Resultado"] as const;

const About: React.FC = () => {
  const { green, cardBg, border, textMuted } = THEME;

  return (
    <section
      id="sobre"
      style={{ padding: "100px 5%" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

        {/* Text column */}
        <div>
          <div style={{ color: green, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            Quem Somos
          </div>

          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 24px" }}>
            O parceiro tecnológico que Angola precisava.
          </h2>

          <p style={{ color: textMuted, lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
            A <strong style={{ color: "#fff" }}>VLK-Techflow</strong> é uma consultora tecnológica especializada em otimizar o desempenho organizacional através da inovação.
          </p>

          <p style={{ color: textMuted, lineHeight: 1.8, fontSize: 15 }}>
            Com uma equipa especializada e apaixonada por tecnologia, entregamos projectos com
            rigor, rapidez e comprometimento — porque sabemos que a tecnologia certa transforma negócios.
          </p>

          <div style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}>
            {PILLARS.map(v => (
              <div
                key={v}
                style={{
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  borderRadius: 6,
                  padding: "8px 16px",
                  fontSize: 13,
                  color: green,
                  fontWeight: 600,
                }}
              >
                {v}
              </div>
            ))}
          </div>
        </div>

        {/* Card column */}
        <div style={{ position: "relative" }}>
          <div style={{
            background: cardBg,
            border: `1px solid ${border}`,
            borderRadius: 20,
            padding: 40,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Glow */}
            <div style={{
              position: "absolute", top: -30, right: -30,
              width: 160, height: 160, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
            }} />

            <VLKLogo size={50} />

            <div style={{ marginTop: 32 }}>
              {ABOUT_ITEMS.map((item, i) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: i < ABOUT_ITEMS.length - 1 ? `1px solid ${border}` : "none",
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: green, flexShrink: 0 }} />
                  <span style={{ color: "#ccc", fontSize: 14 }}>{item}</span>
                  <div style={{ marginLeft: "auto", color: green, fontSize: 12 }}>✓</div>
                </div>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div style={{
            position: "absolute", bottom: -2, right: -2, width: 60, height: 60,
            borderBottom: `3px solid ${green}`, borderRight: `3px solid ${green}`,
            borderBottomRightRadius: 20,
          }} />
          <div style={{
            position: "absolute", top: -2, left: -2, width: 60, height: 60,
            borderTop: `3px solid ${green}`, borderLeft: `3px solid ${green}`,
            borderTopLeftRadius: 20,
          }} />
        </div>
      </div>
    </section>
  );
};

export default About;