import { Link } from "react-router-dom";
import Styled from "./style";
import StyledMobile from "./style-mobile";
import {
  MdOutlineHome,
  MdWorkOutline,
  MdMoving,
  MdMiscellaneousServices,
  MdOutlineGroupAdd
} from "react-icons/md";
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

  return (
    <Styled>
      <div className="Header">
        <div className="Header__Content">
          <ul>
            <Link className="lis" to="/">
              <li>
                <MdOutlineHome />
                Home
              </li>
            </Link>
            <Link className="lis" to="/agencia">
              <li>
                <MdWorkOutline />A agencia
              </li>
            </Link>
            <Link className="lis" to="/mentoria">
              <li>
                <MdMoving />
                Mentoria
              </li>
            </Link>
            <Link className="lis" to="/servicos">
              <li>
                <MdMiscellaneousServices />
                Serviços
              </li>
            </Link>
            <Link className="lis" to="/trabalhe-conosco">
              <li>
                <MdOutlineGroupAdd />
                Trabalhe Conosco
              </li>
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
