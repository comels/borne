import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Redirect from "./hooks/Redirect";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div>
      <BrowserRouter>
        <Redirect timeout={180000} /> {/* 5 minutes */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/declare-impots"
            element={
              <Pages
                // src="https://fr.wikipedia.org/wiki/Imp%C3%B4t"
                src="https://www.impots.gouv.fr/accueil"
                title="déclaration d'impôt"
              />
            }
          />
          <Route
            path="/demande-procuration"
            element={
              <Pages
                src="https://fr.wikipedia.org/wiki/Procuration"
                title="demande de procuration"
              />
            }
          />
          <Route
            path="/demande-de-visa"
            element={
              <Pages
                src="https://fr.wikipedia.org/wiki/Visa_(document)"
                title="visa"
              />
            }
          />
          <Route
            path="/demande-de-passeport"
            element={
              <Pages
                src="https://fr.wikipedia.org/wiki/Passeport_français"
                title="passeport"
              />
            }
          />
          <Route
            path="/demande-de-carte-identite"
            element={
              <Pages
                src="https://fr.wikipedia.org/wiki/Carte_nationale_d%27identité_en_France"
                title="carte d'identité"
              />
            }
          />
          <Route
            path="/demande-de-carte-grise"
            element={
              <Pages
                src="https://fr.wikipedia.org/wiki/Certificat_d%27immatriculation"
                title="carte grise"
              />
            }
          />
          <Route
            path="/demande-de-permis-de-conduire"
            element={
              <Pages
                src="https://permisdeconduire.ants.gouv.fr/"
                title="permis de conduire"
              />
            }
          />
          <Route
            path="/demande-de-casier-judiciaire"
            element={
              <Pages
                src="https://fr.wikipedia.org/wiki/Casier_judiciaire_en_France"
                title="casier judiciaire"
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
