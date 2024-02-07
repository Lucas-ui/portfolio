import Header from "./components/Header";
import Home from "./components/Home";
import FormationsSection from "./components/FormationsSection";
import Pin from "./components/Pin";

import { useState, useEffect, useRef } from "react";

function App() {
  const [showSection, setShowSection] = useState<string | null>(null);

  const handleSectionMouseOver = (section: string) => {
    setShowSection(section);
  };

  return (
    <div>
      <Header />
      <Home
        onContactMouseOver={() => handleSectionMouseOver("Contact")}
        onFormationsMouseOver={() => handleSectionMouseOver("Formations")}
        onCompetencesMouseOver={() => handleSectionMouseOver("Competences")}
        onProjetsMouseOver={() => handleSectionMouseOver("Projets")}
      />
      {showSection === "Contact" && <Pin />}
      {showSection === "Formations" && <Pin />}
      {showSection === "Competences" && <Pin />}
      {showSection === "Projets" && <Pin />}

      <FormationsSection />
    </div>
  );
}

export default App;
