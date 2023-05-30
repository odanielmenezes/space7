import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";
import StyleLGPD from "./style-main";
import { Home } from "./pages/homepage/Home";
import { Servicos } from "./pages/servicos";
import { Header } from "./components/header";
import { Agencia } from "./pages/a_agencia";
import { Contato } from "./pages/contato";
import { Mentoria } from "./pages/mentoria";
import { TrabalheConosco } from "./pages/trabalhe_conosco";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export function AppRoutes() {
  const [open, setOpen] = useState(true);
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    const openPopUp = () => {
      setOpen(!open)
    }

  const deskLGPD = () => {
    return (
      <StyleLGPD>
        <Fade bottom>
        <div className="lgpd">
          <p>
            Utilizamos cookies para fornecer uma melhor experiência, melhorar o
            desempenho, analisar como você interage com nosso site e
            personalizar conteúdo. Ao utilizar este site, você concorda com o
            use de cookies.
          </p>
          <button onClick={() => openPopUp()}>OK, ENTENDI</button>
        </div>
        </Fade>
      </StyleLGPD>
    );
  };

  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path={`/`} element={<Home />}></Route>
          <Route path="/servicos" element={<Servicos />}></Route>
          <Route path="/agencia" element={<Agencia />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/mentoria" element={<Mentoria />}></Route>
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />}></Route>
        </Routes>
        {isMobile && (
          <Link
            to="https://wa.me/5551992797210?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+da+SPACE7."
            onClick={() => teste()}
          >
            <div className="HomePage__ButtonContact">
              <BsWhatsapp />
            </div>
          </Link>
        )}
        {open && deskLGPD()}
      </Router>
    </>
  );
}
