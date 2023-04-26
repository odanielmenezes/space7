import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/homepage/Home";
import { Servicos } from "./pages/servicos";
import { Agencia } from "./pages/a_agencia";
import { Contato } from "./pages/contato";
import { Mentoria } from "./pages/mentoria";
import { TrabalheConosco } from "./pages/trabalhe_conosco";

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/servicos" element={<Servicos />}></Route>
          <Route path="/agencia" element={<Agencia />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/mentoria" element={<Mentoria />}></Route>
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />}></Route>
        </Routes>
      </Router>
    </>
  );
}