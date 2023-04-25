import { Link } from "react-router-dom";
import Styled from "./style";
import StyledMobile from "./style-mobile";
import Logo from "../../../public/vite.svg";
import { useState } from "react";

export function Header() {
  const [clickHamburguer, setClickHamburguer] = useState(false);
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const hendleClickHamburguer = () => {
    setClickHamburguer(!clickHamburguer);
    console.log(clickHamburguer);
  };

  if (!isMobile) {
    return (
      <Styled>
        <div className="Header">
          <div className="Header__Content">
            <ul>
              <Link className="lis" to="/">
                <li>Home</li>
              </Link>
              <Link className="lis" to="/agencia">
                <li>A agencia</li>
              </Link>
              <Link className="lis" to="/mentoria">
                <li>Mentoria</li>
              </Link>
              <Link className="lis" to="/servicos">
                <li>Serviços</li>
              </Link>
              <Link className="lis" to="/trabalhe-conosco">
                <li>Trabalhe Conosco</li>
              </Link>
              <Link className="lis" to="/contato">
                <li>Contato</li>
              </Link>
            </ul>
            <div className="Header__Logo">
              <img src={Logo} alt="" />
              <small>SPACE7 digital</small>
            </div>
          </div>
        </div>
      </Styled>
    );
  }

  return (
    <StyledMobile>
      <div className="HeaderMobile">
        <div
          className={`HeaderMobile__Hamburguer${clickHamburguer ? "__Click" : ""}`}
          onClick={() => hendleClickHamburguer()}
        >
          <div
            className={`HeaderMobile__Hamburguer_Bar${
              clickHamburguer ? "__Click" : ""
            }`}
          ></div>
          {!clickHamburguer && (
            <div
              className={`HeaderMobile__Hamburguer_Bar${
                clickHamburguer ? "__Click" : ""
              }`}
            ></div>
          )}
          <div
            className={`HeaderMobile__Hamburguer_Bar${
              clickHamburguer ? "__Click" : ""
            }`}
          ></div>
        </div>
          <div className={`HeaderMobile__Content${clickHamburguer ? "__Click" : ""}`}>
            <ul>
              <Link className="lis" to="/">
                <li>Home</li>
              </Link>
              <Link className="lis" to="/agencia">
                <li>A agencia</li>
              </Link>
              <Link className="lis" to="/mentoria">
                <li>Mentoria</li>
              </Link>
              <Link className="lis" to="/servicos">
                <li>Serviços</li>
              </Link>
              <Link className="lis" to="/trabalhe-conosco">
                <li>Trabalhe Conosco</li>
              </Link>
              <Link className="lis" to="/contato">
                <li>Contato</li>
              </Link>
            </ul>
          </div>
      </div>
    </StyledMobile>
  );
}
