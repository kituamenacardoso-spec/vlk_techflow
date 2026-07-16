import { useState } from "react";
//import { sendContactEmail } from "../services/emailService";
import type { FormData } from "../types";
//import type { SendStatus } from "../services/emailService";

const INITIAL_FORM: FormData = { nome: "", email: "", mensagem: "" };

interface UseContactFormReturn {
  formData:    FormData;
  //status:      SendStatus;
  errorMsg:    string | null;
  handleField: (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: () => Promise<void>;
  reset:        () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  //const [status,   setStatus]   = useState<SendStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleField =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async () => {
    const { nome, email, mensagem } = formData;

    // Validação básica
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      setErrorMsg("Por favor preenche todos os campos.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Endereço de email inválido.");
      return;
    }

    setErrorMsg(null);
    //setStatus("sending");

   /* try {
      await sendContactEmail({ nome, email, mensagem });
      //setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.error("Erro ao enviar email:", err);
      setErrorMsg("Não foi possível enviar a mensagem. Tenta novamente.");
      //setStatus("error");
    }*/
  };

  const reset = () => {
    //setStatus("idle");
    setErrorMsg(null);
    setFormData(INITIAL_FORM);
  };

  return { formData, errorMsg, handleField, handleSubmit, reset };
}
