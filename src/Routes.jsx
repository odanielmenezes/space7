import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";
import Lottie from "lottie-react";
import fundoGeral from "../src/assets/background-geral.json";
import StyleLGPD from "./style-main";
import StyleFundo from "./style-main";
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
import { useEffect } from "react";

export function AppRoutes() {
  const [isHome, setIshome] = useState(location.pathname);
  const [open, setOpen] = useState(false);
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const openPopUp = () => {
    sessionStorage.setItem("cookiesOk", "ok");
    setOpen(sessionStorage.getItem("cookiesOk") === "ok");
    console.log(sessionStorage.cookiesOk);
  };

  useEffect(() => {
    setIshome(location.pathname)
  }, [Location.path])

  const deskLGPD = () => {
    return (
      <StyleLGPD>
        <Fade bottom>
          <div className="lgpd">
            <p>
              Utilizamos cookies para fornecer uma melhor experiência, melhorar
              o desempenho, analisar como você interage com nosso site e
              personalizar conteúdo. Ao utilizar este site, você concorda com o
              uso de cookies.
            </p>
            <button onClick={() => openPopUp()}>OK, ENTENDI</button>
          </div>
        </Fade>
      </StyleLGPD>
    );
  };
  console.log(isHome);

  return (
    <>
      {isHome !== "/space7" && (
        <StyleFundo>

        </StyleFundo>
      )}
      <Router basename="/">
        <Header />
        <Routes>
          <Route path={`/space7`} element={<Home />}></Route>
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
        {sessionStorage.cookiesOk !== "ok" && deskLGPD()}
      </Router>
    </>
  );
}
