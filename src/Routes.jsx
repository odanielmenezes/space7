import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from "react-router-dom";

import { Home } from "./pages/homepage/Home";
import { Servicos } from "./pages/servicos";
import { Header } from "./components/header";
import { Agencia } from "./pages/a_agencia";
import { Contato } from "./pages/contato";
import { Mentoria } from "./pages/mentoria";
import { TrabalheConosco } from "./pages/trabalhe_conosco";
import { BsWhatsapp } from "react-icons/bs";

export function AppRoutes() {
  const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const teste = () => {
    console.log("click")
  }
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={`/space7` || `/space7/`} element={<Home />}></Route>
          <Route path="/servicos" element={<Servicos />}></Route>
          <Route path="/agencia" element={<Agencia />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/mentoria" element={<Mentoria />}></Route>
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />}></Route>
        </Routes>
        {isMobile &&  (
          <Link to="https://wa.me/5551992797210?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+da+SPACE7." onClick={() => teste()}>
            <div className="HomePage__ButtonContact">
              <BsWhatsapp />
            </div>
          </Link>
        )}
      </Router>
    </>
  );
}
