import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import Redirect from "./hooks/Redirect";

const App = () => {
  // Fonction pour remonter en haut de la page quand on change de route
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
        {/* Redirection à la page d'accueil après 5 minutes d'inactivité */}
        <Redirect timeout={180000} /> {/* 5 minutes */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
