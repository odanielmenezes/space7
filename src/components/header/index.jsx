import { Link } from "react-router-dom";
import Styled from "./style";
import StyledMobile from "./style-mobile";
import {
  MdOutlineHome,
  MdWorkOutline,
  MdMoving,
  MdMiscellaneousServices,
  MdOutlineGroupAdd,
} from "react-icons/md";
import Logo from "../../assets/space7144x31px.svg";
import { useState } from "react";

export function Header() {
  const [isHome, setIsHome] = useState("/");
  const [openMenu, setOpenMenu] = useState(true);
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const changePage = (valor) => {
    setTimeout(() => {
      setIsHome(location.pathname);
      console.log(isHome);
    }, 10);
    if (isMobile) {
      setOpenMenu(true);
    }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  if (!isMobile) {
    return (
      <Styled>
        <div className="Header">
          <div
            className={!openMenu ? "Header__Content" : "Header__Content Open"}
          >
            <ul>
              <Link onClick={() => changePage()} className="lis" to="/space7">
                <li>Home</li>
              </Link>
              <Link onClick={() => changePage()} className="lis" to="/agencia">
                <li>A agência</li>
              </Link>
              <Link onClick={() => changePage()} className="lis" to="/mentoria">
                <li>Mentoria</li>
              </Link>
              <Link onClick={() => changePage()} className="lis" to="/servicos">
                <li>Serviços</li>
              </Link>
              <Link
                onClick={() => changePage()}
                className="lis"
                to="/trabalhe-conosco"
              >
                <li>Trabalhe Conosco</li>
              </Link>
              <Link onClick={() => changePage()} className="lis" to="/contato">
                <li>Contato</li>
              </Link>
            </ul>
          </div>
          <div className="Header__Logo">
            <Link to="/space7">
            <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
      </Styled>
    );
  }

  return (
    <StyledMobile>
      <div className={`HeaderMobile ${openMenu ? "Open" : ""}`}>
        <div
          onClick={() => toggleMenu()}
          className={
            openMenu ? "Header__Hamburguer" : "Header__Hamburguer OpenBurguer"
          }
        >
          <div className="Bar"></div>
          <div className="Bar"></div>
          <div className="Bar"></div>
        </div>
        <div className="Header__Content">
          <ul>
            <Link onClick={() => changePage()} className="lis" to="/space7">
              <li>Home</li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/agencia">
              <li>A agência</li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/mentoria">
              <li>Mentoria</li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/servicos">
              <li>Serviços</li>
            </Link>
            <Link
              onClick={() => changePage()}
              className="lis"
              to="/trabalhe-conosco"
            >
              <li>Trabalhe Conosco</li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/contato">
              <li>Contato</li>
            </Link>
          </ul>
        </div>
      </div>
    </StyledMobile>
  );
}
