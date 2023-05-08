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
import Logo from "../../../public/vite.svg";
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
        console.log(isHome)
      }, 10)
      if(isMobile) {
        setOpenMenu(true)
      }
    }

    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    }

  return (
    <Styled>
      <div className="Header">
        {isMobile && (
          <div onClick={() => toggleMenu()} className={openMenu ? "Header__Hamburguer" : "Header__Hamburguer OpenBurguer"}>
            <div className="Bar"></div>
            <div className="Bar"></div>
            <div className="Bar"></div>
          </div>
        )}
        <div className={!openMenu ? "Header__Content" : "Header__Content Open"}>
          <ul>
            <Link onClick={() => changePage()} className="lis" to="/">
              <li  style={{color: isHome !== "/" && !isMobile && "#000"}}>
                <MdOutlineHome color={isHome !== "/" && !isMobile && "#000"}/>
                Home
              </li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/agencia">
              <li style={{color: isHome !== "/" && !isMobile && "#000"}}>
                <MdWorkOutline color={isHome !== "/" && !isMobile && "#000"}/>A agencia
              </li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/mentoria">
              <li style={{color: isHome !== "/" && !isMobile && "#000"}}>
                <MdMoving color={isHome !== "/" && !isMobile && "#000"}/>
                Mentoria
              </li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/servicos">
              <li style={{color: isHome !== "/" && !isMobile && "#000"}}>
                <MdMiscellaneousServices color={isHome !== "/" && !isMobile && "#000"}/>
                Serviços
              </li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/trabalhe-conosco">
              <li  style={{color: isHome != "/" && !isMobile &&  "#000"}}>
                <MdOutlineGroupAdd color={isHome !== "/" && !isMobile && "#000"}/>
                Trabalhe Conosco
              </li>
            </Link>
            <Link onClick={() => changePage()} className="lis" to="/contato">
              <li>Contato</li>
            </Link>
          </ul>
        </div>
        <div className="Header__Logo">
          <img src={Logo} alt="" />
          <small style={{color: isHome !== "/" && !isMobile && "#000"}}>SPACE7 digital</small>
        </div>
      </div>
    </Styled>
  );
}
