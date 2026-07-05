import React from "react";
import { THEME } from "./theme";
import { useActiveSection } from "./hooks/useActiveSection";

import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import StatsBand from "./components/StatsBand";
import About     from "./components/About";
import Services  from "./components/Services";
import CTABand   from "./components/CTABand";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

const App: React.FC = () => {
  const { activeSection, scrolled, navigateTo } = useActiveSection();

  return (
    <div
      style={{
        background: THEME.dark,
        color: THEME.textWhite,
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        onNavigate={navigateTo}
      />

      <main>
        <Hero      onNavigate={navigateTo} />
        <StatsBand />
        <About />
        <Services />
        <CTABand   onNavigate={navigateTo} />
        <Contact />
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
