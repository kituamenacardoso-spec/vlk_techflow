import React, { useState } from "react";
import { THEME } from "../theme";
import { CONTACT_INFO } from "../data";
import type { FormData } from "../types";

const INITIAL_FORM: FormData = { nome: "", email: "", mensagem: "" };

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [sent, setSent]         = useState(false);
  const { green, dark, cardBg, border, textMuted } = THEME;

  const handleField = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData(prev => ({ ...prev, [key]: e.target.value }));

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = green;
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = border;
  };

  const handleSubmit = () => {
    const { nome, email, mensagem } = formData;
    if (!nome || !email || !mensagem) return;
    setSent(true);
    setFormData(INITIAL_FORM);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0a0a0a",
    border: `1px solid ${border}`,
    borderRadius: 8,
    padding: "14px 16px",
    color: "#fff",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    color: "#555",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 8,
  };

  return (
    <section
      id="contacto"
      style={{ padding: "100px 5%", background: cardBg, borderTop: `1px solid ${border}` }}
    >
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }}>

        {/* Info column */}
        <div>
          <div style={{ color: green, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            Contacto
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, margin: "0 0 24px" }}>
            Vamos trabalhar juntos.
          </h2>
          <p style={{ color: textMuted, lineHeight: 1.8, fontSize: 15, marginBottom: 40 }}>
            A nossa equipa está pronta para analisar as necessidades da sua empresa
            e apresentar a solução ideal.
          </p>

          {CONTACT_INFO.map(({ icon, label, value }) => (
            <div key={label} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
              <div style={{
                width: 44, height: 44,
                borderRadius: 10,
                border: `1px solid ${border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 3 }}>
                  {label}
                </div>
                <div style={{ color: "#ccc", fontSize: 15 }}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form column */}
        <div style={{ background: dark, border: `1px solid ${border}`, borderRadius: 20, padding: 40 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ color: green, fontWeight: 700, fontSize: 20, margin: "0 0 8px" }}>Mensagem enviada!</h3>
              <p style={{ color: "#666" }}>A nossa equipa entrará em contacto brevemente.</p>
            </div>
          ) : (
            <>
              {(["nome", "email"] as const).map(key => (
                <div key={key} style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>
                    {key === "nome" ? "Nome Completo" : "Email"}
                  </label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    placeholder={key === "nome" ? "O seu nome" : "email@empresa.ao"}
                    value={formData[key]}
                    onChange={handleField(key)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Mensagem</label>
                <textarea
                  placeholder="Descreva a sua necessidade..."
                  value={formData.mensagem}
                  onChange={handleField("mensagem")}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <button
                onClick={handleSubmit}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                style={{
                  width: "100%",
                  background: green,
                  color: "#000",
                  border: "none",
                  cursor: "pointer",
                  padding: "16px",
                  borderRadius: 8,
                  fontWeight: 800,
                  fontSize: 15,
                  letterSpacing: 0.5,
                  transition: "opacity 0.2s",
                }}
              >
                Enviar Mensagem
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
