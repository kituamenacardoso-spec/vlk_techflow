import React from "react";
import { THEME } from "../theme";
import type { Service, Stat, ContactInfo, NavLink } from "../types";

const G = THEME.green;

export const NAV_LINKS: NavLink[] = [
  { id: "home",      label: "Home" },
  { id: "sobre",     label: "Sobre" },
  { id: "serviços",  label: "Serviços" },
  { id: "contacto",  label: "Contacto" },
];

export const STATS: Stat[] = [
  { value: "2+", label: "Clientes Satisfeitos" },
  { value: "1+",   label: "Anos de Experiência" },
  { value: "98%",  label: "Taxa de Satisfação" },
  //{ value: "24h",  label: "Suporte Disponível" },
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: "📍", label: "Localização", value: "Luanda, Angola" },
  { icon: "📧", label: "Email",       value: "vlk.workflow@vlk-techflow.ao" },
  { icon: "📞", label: "Telefone",    value: "+244 945 863 343" },
];

export const SERVICES: Service[] = [
  {
    icon: React.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none" },
      React.createElement("rect", { x: 2, y: 6, width: 28, height: 20, rx: 3, stroke: G, strokeWidth: 2 }),
      React.createElement("path", { d: "M10 16h12M16 11v10", stroke: G, strokeWidth: 2, strokeLinecap: "round" }),
      React.createElement("circle", { cx: 6,  cy: 16, r: 1.5, fill: G }),
      React.createElement("circle", { cx: 26, cy: 16, r: 1.5, fill: G }),
    ),
    title: "BPM (Gestão de Processos de Negócio)",
    desc:  "Analisar, modelar, automatizar, monitorizar e melhorar continuamente os processos de uma organização, para aumentar a eficiência, reduzir custos e melhorar a qualidade dos serviços.",
  },
  {
    icon: React.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none" },
      React.createElement("path", { d: "M6 16a10 10 0 1 1 20 0", stroke: G, strokeWidth: 2, strokeLinecap: "round" }),
      React.createElement("path", { d: "M6 16c0 5.523 4.477 10 10 10", stroke: G, strokeWidth: 2, strokeLinecap: "round", strokeDasharray: "3 3" }),
      React.createElement("circle", { cx: 16, cy: 16, r: 3, fill: G }),
      React.createElement("path", { d: "M16 6v3M16 23v3M6 16H3M29 16h-3", stroke: G, strokeWidth: 1.5, strokeLinecap: "round" }),
    ),
    title: "ECM (Enterprise Content Management)",
    desc:  "ECM é o conjunto de práticas, processos e tecnologias utilizadas para capturar, armazenar, organizar, gerir, proteger e disponibilizar documentos e conteúdos empresariais ao longo do seu ciclo de vida.",
  },
  {
    icon: React.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none" },
      React.createElement("rect", { x: 4,  y: 4,  width: 10, height: 10, rx: 2, stroke: G, strokeWidth: 2 }),
      React.createElement("rect", { x: 18, y: 4,  width: 10, height: 10, rx: 2, stroke: G, strokeWidth: 2 }),
      React.createElement("rect", { x: 4,  y: 18, width: 10, height: 10, rx: 2, stroke: G, strokeWidth: 2 }),
      React.createElement("rect", { x: 18, y: 18, width: 10, height: 10, rx: 2, stroke: G, strokeWidth: 2 }),
      React.createElement("path", { d: "M14 9h4M9 14v4M23 14v4M14 23h4", stroke: G, strokeWidth: 1.5, strokeLinecap: "round" }),
    ),
    title: "RPA (Robotic Process Automation)",
    desc:  "automatizar tarefas repetitivas e baseadas em regras, executadas normalmente por humanos em sistemas digitais. Em vez de uma pessoa copiar dados, preencher formulários ou mover ficheiros, o robô faz isso automaticamente, imitando as ações humanas no computador.",
  },
  {
    icon: React.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none" },
      React.createElement("path", { d: "M8 24V12l8-8 8 8v12", stroke: G, strokeWidth: 2, strokeLinejoin: "round" }),
      React.createElement("rect", { x: 13, y: 18, width: 6, height: 6, rx: 1, stroke: G, strokeWidth: 2 }),
      React.createElement("path", { d: "M4 24h24", stroke: G, strokeWidth: 2, strokeLinecap: "round" }),
    ),
    title: "Desenvolvimento de Aplicações (Software Development)",
    desc:  "criar, construir, testar e manter programas ou sistemas informáticos que resolvem problemas ou automatizam tarefas para utilizadores e empresas.",
  },
];
