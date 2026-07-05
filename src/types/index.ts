export interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export type SectionId = "home" | "sobre" | "serviços" | "contacto";
