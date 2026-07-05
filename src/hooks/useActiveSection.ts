import { useState, useEffect, useCallback } from "react";
import type { SectionId } from "../types";

const SECTIONS: SectionId[] = ["home", "sobre", "serviços", "contacto"];

interface UseActiveSectionReturn {
  activeSection: SectionId;
  scrolled: boolean;
  navigateTo: (id: SectionId) => void;
}

export function useActiveSection(): UseActiveSectionReturn {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight the section currently in view
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateTo = useCallback((id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  }, []);

  return { activeSection, scrolled, navigateTo };
}
